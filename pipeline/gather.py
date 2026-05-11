"""
Gathers photos, reviews, and business details from Google Places.
Downloads photos to builds/{place_id}/public/images/.
Writes builds/{place_id}/business.json.
"""
import os, json, requests, shutil
from pathlib import Path

PLACES_KEY = os.environ["GOOGLE_PLACES_KEY"]

def gather(place_id: str) -> dict:
    url = f"https://places.googleapis.com/v1/places/{place_id}"
    headers = {
        "X-Goog-Api-Key": PLACES_KEY,
        "X-Goog-FieldMask": "id,displayName,formattedAddress,nationalPhoneNumber,regularOpeningHours,rating,userRatingCount,reviews,photos,editorialSummary,types"
    }
    resp = requests.get(url, headers=headers)
    resp.raise_for_status()
    data = resp.json()

    img_dir = Path(f"builds/{place_id}/public/images")
    img_dir.mkdir(parents=True, exist_ok=True)

    photos = data.get("photos", [])[:8]
    downloaded = []
    for i, photo in enumerate(photos):
        ref  = photo["name"]
        purl = f"https://places.googleapis.com/v1/{ref}/media?maxHeightPx=1200&key={PLACES_KEY}"
        r    = requests.get(purl, stream=True)
        if r.status_code == 200:
            fname = img_dir / f"photo_{i+1}.jpg"
            with open(fname, "wb") as f:
                shutil.copyfileobj(r.raw, f)
            downloaded.append(f"public/images/photo_{i+1}.jpg")

    reviews = [
        {
            "author": rv.get("authorAttribution", {}).get("displayName", ""),
            "text":   rv.get("text", {}).get("text", ""),
            "rating": rv.get("rating", 5)
        }
        for rv in data.get("reviews", [])[:5]
    ]

    meta = {
        "place_id":     place_id,
        "name":         data["displayName"]["text"],
        "address":      data.get("formattedAddress", ""),
        "phone":        data.get("nationalPhoneNumber", ""),
        "rating":       data.get("rating"),
        "review_count": data.get("userRatingCount"),
        "summary":      data.get("editorialSummary", {}).get("text", ""),
        "hours":        data.get("regularOpeningHours", {}).get("weekdayDescriptions", []),
        "photos":       downloaded,
        "reviews":      reviews,
        "types":        data.get("types", [])
    }

    meta_path = Path(f"builds/{place_id}/business.json")
    meta_path.write_text(json.dumps(meta, indent=2))

    print(f"[gather] {meta['name']} — {len(downloaded)} photos, {len(reviews)} reviews")
    return meta


if __name__ == "__main__":
    import sys
    gather(sys.argv[1])
