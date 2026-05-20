"""
find_emails.py — Attempt to find a contact email for a lead using Hunter.io API.

Usage:
    python pipeline/find_emails.py <place_id>
    python pipeline/find_emails.py --all        # process all leads without email

Strategy:
  1. Read business name + address from CRM leads table
  2. Query Hunter.io Domain Search API using the business name + city
  3. If Hunter finds a result, extract the highest-confidence email
  4. If Hunter finds nothing, try Hunter.io Email Finder with name + domain
  5. Log the found email back to leads.email column
  6. Never overwrite an existing email — only update if currently NULL/empty

Requirements:
    HUNTER_API_KEY env var — get from https://hunter.io/api
"""

import os
import re
import sys
import sqlite3
import requests
from pathlib import Path
from dotenv import load_dotenv

load_dotenv()

DB_PATH = Path(__file__).parent.parent / "crm" / "leads.db"
HUNTER_BASE = "https://api.hunter.io/v2"


def _city_from_address(address: str) -> str:
    """Extract city name from a full address string."""
    if not address:
        return ""
    # Try to pull city from "Street, City, STATE ZIP" pattern
    parts = [p.strip() for p in address.split(",")]
    if len(parts) >= 2:
        # Second-to-last part before state/zip is usually the city
        return parts[-2].strip()
    return ""


def _guess_domain_from_name(business_name: str, city: str) -> list[str]:
    """Generate plausible domain guesses from business name + city."""
    name_slug = re.sub(r"[^a-z0-9]", "", business_name.lower().replace(" ", ""))
    city_slug = re.sub(r"[^a-z0-9]", "", city.lower().replace(" ", ""))
    guesses = []
    if name_slug:
        guesses.append(f"{name_slug}.com")
        if city_slug and len(name_slug) < 20:
            guesses.append(f"{name_slug}{city_slug}.com")
    return guesses


def hunter_domain_search(api_key: str, domain: str) -> dict | None:
    """
    Search Hunter.io for emails on a given domain.
    Returns the highest-confidence email dict or None.
    """
    try:
        resp = requests.get(
            f"{HUNTER_BASE}/domain-search",
            params={
                "domain": domain,
                "api_key": api_key,
                "limit": 5,
                "type": "personal",
            },
            timeout=15,
        )
        if resp.status_code != 200:
            return None
        data = resp.json().get("data", {})
        emails = data.get("emails", [])
        if not emails:
            return None
        # Sort by confidence descending, prefer owner/general/contact types
        priority_types = {"owner", "contact", "generic"}
        prioritized = sorted(
            emails,
            key=lambda e: (
                e.get("type", "") in priority_types,
                e.get("confidence", 0),
            ),
            reverse=True,
        )
        return prioritized[0] if prioritized else None
    except requests.RequestException:
        return None


def hunter_email_finder(api_key: str, domain: str, first_name: str = "", last_name: str = "") -> str | None:
    """
    Use Hunter.io Email Finder when we have a name + domain.
    Returns email string or None.
    """
    if not domain or not first_name:
        return None
    try:
        resp = requests.get(
            f"{HUNTER_BASE}/email-finder",
            params={
                "domain": domain,
                "first_name": first_name,
                "last_name": last_name,
                "api_key": api_key,
            },
            timeout=15,
        )
        if resp.status_code != 200:
            return None
        data = resp.json().get("data", {})
        email = data.get("email")
        confidence = data.get("score", 0)
        if email and confidence >= 50:
            return email
        return None
    except requests.RequestException:
        return None


def find_email_for_lead(place_id: str) -> str | None:
    """
    Main function: attempt to find an email for a given lead.
    Returns the found email string or None.
    """
    api_key = os.environ.get("HUNTER_API_KEY")
    if not api_key or api_key.startswith("your_"):
        print(f"[find_emails] HUNTER_API_KEY not set — skipping {place_id}")
        return None

    # Read lead from CRM
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    lead = conn.execute("SELECT * FROM leads WHERE id=?", (place_id,)).fetchone()
    conn.close()

    if not lead:
        print(f"[find_emails] Lead not found in CRM: {place_id}")
        return None

    lead = dict(lead)
    name = lead.get("name", "")
    address = lead.get("address", "")
    existing_email = lead.get("email", "")

    # Don't overwrite existing email
    if existing_email and "@" in existing_email:
        print(f"[find_emails] {place_id} already has email: {existing_email} — skipping")
        return existing_email

    city = _city_from_address(address)
    print(f"[find_emails] Searching for: {name} in {city or address}")

    found_email = None

    # Strategy 1: Try domain search on guessed domains
    domain_guesses = _guess_domain_from_name(name, city)
    for domain in domain_guesses:
        print(f"[find_emails]   Trying domain search: {domain}")
        result = hunter_domain_search(api_key, domain)
        if result:
            found_email = result.get("value")
            confidence = result.get("confidence", 0)
            print(f"[find_emails]   ✓ Found: {found_email} (confidence: {confidence})")
            break

    # Strategy 2: If no domain hit, try Hunter's company name search via domain-search
    # by querying the business name as a company
    if not found_email:
        # Try searching by company name directly (Hunter supports ?company= param)
        company_slug = re.sub(r"\s+", "+", name.strip())
        try:
            resp = requests.get(
                f"{HUNTER_BASE}/domain-search",
                params={
                    "company": name,
                    "api_key": api_key,
                    "limit": 3,
                },
                timeout=15,
            )
            if resp.status_code == 200:
                data = resp.json().get("data", {})
                emails = data.get("emails", [])
                if emails:
                    best = sorted(emails, key=lambda e: e.get("confidence", 0), reverse=True)[0]
                    found_email = best.get("value")
                    print(f"[find_emails]   ✓ Found via company name: {found_email}")
        except requests.RequestException:
            pass

    # Log result to CRM
    if found_email:
        conn = sqlite3.connect(DB_PATH)
        conn.execute(
            "UPDATE leads SET email=?, updated_at=datetime('now') WHERE id=?",
            (found_email, place_id),
        )
        conn.commit()
        conn.close()
        print(f"[find_emails] ✓ Email saved to CRM: {place_id} → {found_email}")
    else:
        print(f"[find_emails] ✗ No email found for: {name}")

    return found_email


def find_emails_for_all_leads() -> dict[str, str]:
    """
    Process all leads in CRM that are missing an email.
    Returns {place_id: email} for successful discoveries.
    """
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    leads = conn.execute(
        "SELECT id, name FROM leads WHERE (email IS NULL OR email = '') AND status NOT IN ('lost', 'closed')"
    ).fetchall()
    conn.close()

    if not leads:
        print("[find_emails] No leads missing email addresses.")
        return {}

    print(f"[find_emails] Processing {len(leads)} leads without email...")
    results = {}
    for lead in leads:
        email = find_email_for_lead(lead["id"])
        if email:
            results[lead["id"]] = email

    print(f"\n[find_emails] Done. Found emails for {len(results)}/{len(leads)} leads.")
    return results


if __name__ == "__main__":
    args = sys.argv[1:]
    if not args:
        print("Usage: python pipeline/find_emails.py <place_id>")
        print("       python pipeline/find_emails.py --all")
        sys.exit(1)

    if args[0] == "--all":
        find_emails_for_all_leads()
    else:
        place_id = args[0]
        email = find_email_for_lead(place_id)
        if email:
            print(f"[find_emails] Result: {email}")
        else:
            print(f"[find_emails] No email found for {place_id}")
            sys.exit(1)
