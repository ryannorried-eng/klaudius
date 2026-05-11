import sqlite3
from pathlib import Path
from contextlib import contextmanager

DB_PATH = Path(__file__).parent / "leads.db"

@contextmanager
def get_conn():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    try:
        yield conn
        conn.commit()
    finally:
        conn.close()

def update_status(place_id: str, status: str):
    with get_conn() as conn:
        conn.execute(
            "UPDATE leads SET status=?, updated_at=datetime('now') WHERE id=?",
            (status, place_id)
        )

def get_lead(place_id: str) -> dict:
    with get_conn() as conn:
        row = conn.execute("SELECT * FROM leads WHERE id=?", (place_id,)).fetchone()
        return dict(row) if row else None

def get_deployed_url(place_id: str) -> str:
    with get_conn() as conn:
        row = conn.execute("SELECT vercel_url FROM sites WHERE place_id=?", (place_id,)).fetchone()
        return row["vercel_url"] if row else None

def log_outreach(place_id: str, channel: str, subject: str, body: str, touch: int = 1):
    with get_conn() as conn:
        conn.execute(
            "INSERT INTO outreach (place_id, channel, subject, body, sent_at, touch_number) VALUES (?,?,?,?,datetime('now'),?)",
            (place_id, channel, subject, body, touch)
        )
