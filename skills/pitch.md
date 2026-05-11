# /pitch

Send outreach email for a deployed lead.

## Usage
/pitch place_id="ChIJ..."

## Steps
1. Confirm a deployed URL exists in CRM — if not, run /deploy first
2. Confirm an email address exists for this lead — if not, print a warning and stop
3. Run pipeline/pitch.py — pitch(place_id)
4. Print confirmation with the email address used
