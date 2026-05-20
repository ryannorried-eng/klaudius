#!/usr/bin/env bash
# deploy_local.sh — Deploy all built sites using Vercel CLI.
#
# Finds all leads with status='built' in the CRM, runs npm install +
# vercel --yes --name <sanitized-business-name> for each build directory,
# then writes the deployed URL back to the CRM.
#
# Requirements:
#   - vercel CLI installed globally: npm install -g vercel
#   - vercel login already completed (token cached) OR VERCEL_TOKEN in env
#   - python3 available on PATH
#   - .env file with VERCEL_TOKEN (optional if already logged in via CLI)
#
# Usage:
#   bash scripts/deploy_local.sh
#   bash scripts/deploy_local.sh --dry-run   # show what would be deployed

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"
DB_PATH="${REPO_ROOT}/crm/leads.db"
BUILDS_DIR="${REPO_ROOT}/builds"

DRY_RUN=false
if [[ "${1:-}" == "--dry-run" ]]; then
  DRY_RUN=true
  echo "[deploy_local] DRY RUN — no deploys will be executed"
fi

# Load .env if it exists (for VERCEL_TOKEN)
if [[ -f "${REPO_ROOT}/.env" ]]; then
  # shellcheck disable=SC2046
  export $(grep -v '^#' "${REPO_ROOT}/.env" | xargs -d '\n')
fi

# Verify vercel CLI is available
if ! command -v vercel &>/dev/null; then
  echo "[deploy_local] ERROR: vercel CLI not found. Install with: npm install -g vercel" >&2
  exit 1
fi

# Query CRM for leads with status='built'
echo "[deploy_local] Querying CRM for built leads..."
BUILT_LEADS=$(python3 - <<'PYEOF'
import sqlite3, json, sys, os

db_path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'crm', 'leads.db')

if not os.path.exists(db_path):
    print("[]")
    sys.exit(0)

try:
    conn = sqlite3.connect(db_path)
    conn.row_factory = sqlite3.Row
    rows = conn.execute(
        "SELECT id, name FROM leads WHERE status = 'built' ORDER BY created_at"
    ).fetchall()
    conn.close()
    result = [{"id": row["id"], "name": row["name"]} for row in rows]
    print(json.dumps(result))
except Exception as e:
    print(f"[]", file=sys.stderr)
    print(f"DB error: {e}", file=sys.stderr)
    sys.exit(1)
PYEOF
)

if [[ "$BUILT_LEADS" == "[]" || -z "$BUILT_LEADS" ]]; then
  echo "[deploy_local] No built leads found in CRM. Nothing to deploy."
  exit 0
fi

# Parse and deploy each lead
DEPLOYED_COUNT=0
FAILED_COUNT=0

while IFS= read -r lead; do
  PLACE_ID=$(echo "$lead" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d['id'])")
  BUSINESS_NAME=$(echo "$lead" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d['name'])")

  # Sanitize business name: lowercase, replace non-alphanumeric with hyphens, dedupe hyphens
  SANITIZED=$(echo "$BUSINESS_NAME" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/--*/-/g' | sed 's/^-//' | sed 's/-$//')
  PROJECT_NAME="klaudius-${SANITIZED}"
  # Vercel project names have a 100-char limit; truncate if needed
  PROJECT_NAME="${PROJECT_NAME:0:100}"

  BUILD_PATH="${BUILDS_DIR}/${PLACE_ID}"

  if [[ ! -d "$BUILD_PATH" ]]; then
    echo "[deploy_local] WARNING: Build directory not found for ${PLACE_ID} — skipping"
    FAILED_COUNT=$((FAILED_COUNT + 1))
    continue
  fi

  echo ""
  echo "[deploy_local] ─────────────────────────────────────────"
  echo "[deploy_local] Business : ${BUSINESS_NAME}"
  echo "[deploy_local] Place ID : ${PLACE_ID}"
  echo "[deploy_local] Project  : ${PROJECT_NAME}"
  echo "[deploy_local] Path     : ${BUILD_PATH}"

  if [[ "$DRY_RUN" == "true" ]]; then
    echo "[deploy_local] DRY RUN — skipping npm install + vercel deploy"
    continue
  fi

  # Install dependencies
  echo "[deploy_local] Running npm install..."
  if ! (cd "$BUILD_PATH" && npm install --silent 2>&1); then
    echo "[deploy_local] ERROR: npm install failed for ${PLACE_ID}" >&2
    FAILED_COUNT=$((FAILED_COUNT + 1))
    continue
  fi

  # Deploy with Vercel CLI
  echo "[deploy_local] Deploying with Vercel CLI..."
  VERCEL_OUTPUT=$(cd "$BUILD_PATH" && vercel --yes --name "$PROJECT_NAME" --prod 2>&1) || true
  DEPLOY_URL=$(echo "$VERCEL_OUTPUT" | grep -oE 'https://[a-zA-Z0-9._-]+\.vercel\.app' | tail -1)

  if [[ -z "$DEPLOY_URL" ]]; then
    # Try alternate URL extraction for newer Vercel CLI output
    DEPLOY_URL=$(echo "$VERCEL_OUTPUT" | grep -oE 'https://[^ ]+' | grep 'vercel.app' | tail -1)
  fi

  if [[ -z "$DEPLOY_URL" ]]; then
    echo "[deploy_local] ERROR: Could not extract deploy URL for ${PLACE_ID}" >&2
    echo "[deploy_local] Vercel output: ${VERCEL_OUTPUT}" >&2
    FAILED_COUNT=$((FAILED_COUNT + 1))
    continue
  fi

  echo "[deploy_local] Deployed → ${DEPLOY_URL}"

  # Write URL back to CRM
  python3 - <<PYEOF
import sqlite3, os, sys

db_path = "${DB_PATH}"
place_id = "${PLACE_ID}"
vercel_url = "${DEPLOY_URL}"
build_path = "${BUILD_PATH}"

try:
    conn = sqlite3.connect(db_path)
    # Upsert into sites table
    conn.execute(
        """INSERT OR REPLACE INTO sites (place_id, build_path, vercel_url, deployed_at)
           VALUES (?, ?, ?, datetime('now'))
           """,
        (place_id, build_path, vercel_url)
    )
    # Update lead status to deployed
    conn.execute(
        "UPDATE leads SET status='deployed', updated_at=datetime('now') WHERE id=?",
        (place_id,)
    )
    conn.commit()
    conn.close()
    print(f"[deploy_local] CRM updated: {place_id} → deployed ({vercel_url})")
except Exception as e:
    print(f"[deploy_local] WARNING: CRM update failed for {place_id}: {e}", file=sys.stderr)
PYEOF

  DEPLOYED_COUNT=$((DEPLOYED_COUNT + 1))

done < <(echo "$BUILT_LEADS" | python3 -c "
import sys, json
leads = json.load(sys.stdin)
for lead in leads:
    print(json.dumps(lead))
")

echo ""
echo "[deploy_local] ─────────────────────────────────────────"
echo "[deploy_local] Done. Deployed: ${DEPLOYED_COUNT} | Failed: ${FAILED_COUNT}"
