"""
Mark a lead as closed (won) or lost, and log the outcome.
Usage: python settle.py <place_id> <closed|lost> [optional note]
"""
import sqlite3, sys
from pathlib import Path
from dotenv import load_dotenv

load_dotenv()

DB_PATH = Path(__file__).parent.parent / "crm" / "leads.db"

def settle(place_id: str, outcome: str, note: str = ""):
    if outcome not in ("closed", "lost"):
        raise ValueError("outcome must be 'closed' or 'lost'")
    conn = sqlite3.connect(DB_PATH)
    conn.execute(
        "UPDATE leads SET status=?, updated_at=datetime('now') WHERE id=?",
        (outcome, place_id)
    )
    if note:
        conn.execute(
            "INSERT INTO replies (place_id, received_at, body, sentiment) VALUES (?,datetime('now'),?,?)",
            (place_id, note, "positive" if outcome == "closed" else "negative")
        )
    conn.commit()
    conn.close()
    print(f"[settle] {place_id} marked as {outcome}")

if __name__ == "__main__":
    note = sys.argv[3] if len(sys.argv) > 3 else ""
    settle(sys.argv[1], sys.argv[2], note)
