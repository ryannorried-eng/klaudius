"""
Deploys a built Next.js site in builds/{place_id}/ to Vercel.
Writes the unlisted URL back to the CRM.
"""
import subprocess, sqlite3, re, sys
from pathlib import Path

DB_PATH = Path(__file__).parent.parent / "crm" / "leads.db"

def deploy(place_id: str) -> str:
    build_path = Path(f"builds/{place_id}")
    if not build_path.exists():
        raise FileNotFoundError(f"No build at {build_path} — run gather + build first")

    result = subprocess.run(
        ["vercel", "--yes", "--no-clipboard"],
        cwd=build_path,
        capture_output=True,
        text=True
    )

    output = result.stdout + result.stderr
    url_match = re.search(r"https://[^\s]+\.vercel\.app", output)
    if not url_match:
        raise RuntimeError(f"Deploy failed. Output:\n{output}")

    url = url_match.group(0)

    conn = sqlite3.connect(DB_PATH)
    conn.execute(
        "INSERT OR REPLACE INTO sites (place_id, build_path, vercel_url, deployed_at) VALUES (?,?,?,datetime('now'))",
        (place_id, str(build_path), url)
    )
    conn.execute(
        "UPDATE leads SET status='deployed', updated_at=datetime('now') WHERE id=?",
        (place_id,)
    )
    conn.commit()
    conn.close()

    print(f"[deploy] {place_id} → {url}")
    return url


if __name__ == "__main__":
    deploy(sys.argv[1])
