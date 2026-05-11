# /find

Source new leads for a region without running a full build.

## Usage
/find region="Long Beach, CA" category="restaurant" count=20

## Steps
1. Run pipeline/find.py — find_leads(region, category, count)
2. Print a table of new leads added: name | category | address | phone
