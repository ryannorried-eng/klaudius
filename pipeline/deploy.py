"""
Deploys a built Next.js site in builds/{place_id}/ to Vercel via REST API.
Writes the deployment URL back to the CRM.
"""
import os, sqlite3, sys, base64, mimetypes
import requests
from pathlib import Path
from dotenv import load_dotenv

load_dotenv()

DB_PATH = Path(__file__).parent.parent / "crm" / "leads.db"
VERCEL_API = "https://api.vercel.com"


def _collect_files(build_path: Path) -> list[dict]:
    """Walk build_path and return a list of Vercel file objects."""
    files = []
    for filepath in build_path.rglob("*"):
        if not filepath.is_file():
            continue
        relative = filepath.relative_to(build_path).as_posix()
        raw = filepath.read_bytes()
        encoding = "base64"
        data = base64.b64encode(raw).decode("utf-8")
        files.append({"file": relative, "data": data, "encoding": encoding})
    return files


def deploy(place_id: str) -> str:
    token = os.environ.get("VERCEL_TOKEN")
    team_slug = os.environ.get("VERCEL_TEAM_SLUG")
    if not token:
        raise EnvironmentError("VERCEL_TOKEN not set in .env")

    build_path = Path(f"builds/{place_id}")
    if not build_path.exists():
        raise FileNotFoundError(f"No build at {build_path} — run gather + build first")

    project_name = f"klaudius-{place_id}".lower().replace("_", "-")
    files = _collect_files(build_path)

    payload = {
        "name": project_name,
        "files": files,
        "projectSettings": {
            "framework": "nextjs",
        },
        "target": "production",
    }

    headers = {"Authorization": f"Bearer {token}", "Content-Type": "application/json"}
    params = {}
    if team_slug:
        params["teamId"] = team_slug

    resp = requests.post(
        f"{VERCEL_API}/v13/deployments",
        json=payload,
        headers=headers,
        params=params,
        timeout=120,
    )

    if resp.status_code not in (200, 201):
        raise RuntimeError(f"Vercel API error {resp.status_code}: {resp.text}")

    data = resp.json()
    url = f"https://{data['url']}"

    conn = sqlite3.connect(DB_PATH)
    conn.execute(
        "INSERT OR REPLACE INTO sites (place_id, build_path, vercel_url, deployed_at) VALUES (?,?,?,datetime('now'))",
        (place_id, str(build_path), url),
    )
    conn.execute(
        "UPDATE leads SET status='deployed', updated_at=datetime('now') WHERE id=?",
        (place_id,),
    )
    conn.commit()
    conn.close()

    print(f"[deploy] {place_id} → {url}")
    return url


if __name__ == "__main__":
    deploy(sys.argv[1])
