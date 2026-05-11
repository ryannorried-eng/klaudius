"""
Sends touch_number=2 follow-up emails to leads that were pitched 3+ days ago
with no reply logged in the replies table.
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


def followup(dry_run: bool = False):
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row

    rows = conn.execute("""
        SELECT
            l.id,
            l.name,
            l.email,
            s.vercel_url,
            o.sent_at,
            CAST(julianday('now') - julianday(o.sent_at) AS INTEGER) AS days_ago
        FROM outreach o
        JOIN leads l ON o.place_id = l.id
        JOIN sites  s ON o.place_id = s.place_id
        WHERE o.touch_number = 1
          AND days_ago >= 3
          AND l.id NOT IN (SELECT place_id FROM replies)
          AND l.id NOT IN (
              SELECT place_id FROM outreach WHERE touch_number = 2
          )
        ORDER BY o.sent_at ASC
    """).fetchall()

    if not rows:
        print("[followup] No leads due for follow-up.")
        conn.close()
        return

    print(f"[followup] {len(rows)} lead(s) due:")
    for row in rows:
        name, email, url, days = row["name"], row["email"], row["vercel_url"], row["days_ago"]
        print(f"  {name} | {email} | {days}d since first touch")

        if not email:
            print(f"    → no email on file, skipping")
            continue

        subject = name
        body = f"""Hi,

Just following up — I built {name} a website a few days ago:

{url}

Still happy to hand it over if you want it. No lock-in, no strings.

{FROM_NAME}
"""
        if dry_run:
            print(f"    → [dry run] would send follow-up to {email}")
            continue

        resend.Emails.send({
            "from":    FROM_EMAIL,
            "to":      [email],
            "subject": subject,
            "text":    body,
        })

        conn.execute(
            "INSERT INTO outreach (place_id, channel, subject, body, sent_at, touch_number) VALUES (?,?,?,?,datetime('now'),2)",
            (row["id"], "email", subject, body)
        )
        conn.execute(
            "UPDATE leads SET status='followed_up', updated_at=datetime('now') WHERE id=?",
            (row["id"],)
        )
        print(f"    → sent")

    conn.commit()
    conn.close()


if __name__ == "__main__":
    import sys
    dry = "--dry-run" in sys.argv
    followup(dry_run=dry)
