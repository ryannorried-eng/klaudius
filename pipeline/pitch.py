"""
Sends personalized cold outreach email via Resend.
Reads business.json for personalization details.
Reads deployed URL from CRM.
"""
import os, sqlite3, json
import resend
from pathlib import Path
from dotenv import load_dotenv

load_dotenv()

resend.api_key = os.environ["RESEND_API_KEY"]
FROM_EMAIL     = os.environ["FROM_EMAIL"]
FROM_NAME      = os.environ["FROM_NAME"]
DB_PATH        = Path(__file__).parent.parent / "crm" / "leads.db"

def pitch(place_id: str):
    meta_path = Path(f"builds/{place_id}/business.json")
    if not meta_path.exists():
        raise FileNotFoundError(f"No business.json for {place_id}")
    meta = json.loads(meta_path.read_text())

    conn = sqlite3.connect(DB_PATH)
    row  = conn.execute(
        "SELECT s.vercel_url, l.email, l.name FROM sites s JOIN leads l ON s.place_id=l.id WHERE s.place_id=?",
        (place_id,)
    ).fetchone()
    conn.close()

    if not row or not row[0]:
        raise ValueError(f"No deployed URL for {place_id} — run deploy first")

    vercel_url, to_email, name = row

    if not to_email:
        print(f"[pitch] No email on file for {name} — skipping")
        return

    review_hook = ""
    if meta.get("reviews"):
        snippet = meta["reviews"][0]["text"][:100]
        review_hook = f'\nOne of your customers said: "{snippet}..." — I used that to shape the site.\n'

    subject = name
    body = f"""Hi,

I built {name} a website. Here it is:

{vercel_url}
{review_hook}
It's built from your own photos and details — no stock imagery, no template. If you want to keep it, I can point it at your own domain and hand you full control. No lock-in.

If you're not interested, just let me know and I'll take it down.

Best,
{FROM_NAME}
"""

    resend.Emails.send({
        "from":    FROM_EMAIL,
        "to":      [to_email],
        "subject": subject,
        "text":    body
    })

    conn = sqlite3.connect(DB_PATH)
    conn.execute(
        "INSERT INTO outreach (place_id, channel, subject, body, sent_at, touch_number) VALUES (?,?,?,?,datetime('now'),1)",
        (place_id, "email", subject, body)
    )
    conn.execute(
        "UPDATE leads SET status='pitched', updated_at=datetime('now') WHERE id=?",
        (place_id,)
    )
    conn.commit()
    conn.close()

    print(f"[pitch] Sent to {name} at {to_email}")


if __name__ == "__main__":
    import sys
    pitch(sys.argv[1])
