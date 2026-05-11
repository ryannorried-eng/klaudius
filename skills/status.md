# /status

Show a CRM pipeline summary.

## Steps
Query crm/leads.db and print:
1. Lead counts by status (found / gathering / building / deployed / pitched / replied / closed / lost)
2. Last 5 pitched leads: name | URL | days since pitched
3. Follow-up due: pitched leads with no reply and last touch 3+ days ago
4. Close rate if any leads are marked closed
