"""
Lead sourcing via Google Places API (New).
Finds businesses in a region that have no website.
Writes new leads to SQLite.
"""
import os, sqlite3, requests
from pathlib import Path
from dotenv import load_dotenv

load_dotenv()

PLACES_KEY = os.environ["GOOGLE_PLACES_KEY"]
DB_PATH    = Path(__file__).parent.parent / "crm" / "leads.db"

def find_leads(region: str, category: str = "plumber", max_results: int = 20) -> list:
    url = "https://places.googleapis.com/v1/places:searchText"
    headers = {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": PLACES_KEY,
        "X-Goog-FieldMask": "places.id,places.displayName,places.formattedAddress,places.nationalPhoneNumber,places.websiteUri,places.types"
    }
    body = {
        "textQuery": f"{category} in {region}",
        "maxResultCount": max_results
    }

    resp = requests.post(url, headers=headers, json=body)
    resp.raise_for_status()
    places = resp.json().get("places", [])

    no_website = [p for p in places if not p.get("websiteUri")]

    conn = sqlite3.connect(DB_PATH)
    cur  = conn.cursor()
    inserted = 0
    for p in no_website:
        try:
            cur.execute(
                "INSERT OR IGNORE INTO leads (id, name, category, address, phone, region) VALUES (?,?,?,?,?,?)",
                (
                    p["id"],
                    p["displayName"]["text"],
                    category,
                    p.get("formattedAddress", ""),
                    p.get("nationalPhoneNumber", ""),
                    region
                )
            )
            if cur.rowcount:
                inserted += 1
        except Exception as e:
            print(f"  Skip {p.get('id')}: {e}")

    conn.commit()
    conn.close()
    print(f"[find] {len(no_website)} without websites. {inserted} new leads added.")
    return no_website


if __name__ == "__main__":
    import sys
    region   = sys.argv[1] if len(sys.argv) > 1 else "San Pedro, CA"
    category = sys.argv[2] if len(sys.argv) > 2 else "plumber"
    find_leads(region, category)
