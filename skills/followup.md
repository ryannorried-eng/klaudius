# /followup

Send follow-up emails to non-replies.

## Steps
1. Query outreach for touch_number=1 sent 3+ days ago
2. Cross-check replies table — skip any lead that has replied
3. For each due lead, send a short follow-up via Resend referencing the live URL
4. Log as touch_number=2 in outreach table
5. Print: name | email | days since first touch
