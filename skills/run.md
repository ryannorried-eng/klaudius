# /run

Run the full autonomous pipeline loop for a region and business category.

## Usage
/run region="San Pedro, CA" category="plumber" count=10

## Steps
1. Run pipeline/find.py — find_leads(region, category, count)
2. For each new lead returned:
   a. Run pipeline/gather.py — gather(place_id)
   b. Read builds/{place_id}/business.json
   c. Copy template/base/ into builds/{place_id}/
   d. Read lessons.md — note any design or outreach preferences from past runs
   e. Read template/design-systems/ — pick the best-fit system for this business type and adapt it (don't clone it exactly)
   f. Rewrite builds/{place_id}/app/page.tsx and all components with real business data — name, address, phone, hours, reviews, photo paths
   g. Inject chosen CSS variables into builds/{place_id}/app/globals.css
   h. Add Google Fonts link to builds/{place_id}/app/layout.tsx
   i. Verify mobile rendering by reviewing all components for 390px compatibility
   j. Run pipeline/deploy.py — deploy(place_id)
   k. If email exists in the CRM for this lead, run pipeline/pitch.py — pitch(place_id)
   l. Append a lesson to lessons.md noting the design system used and anything notable
3. Print a summary table: business name | design system | deployed URL | pitched yes/no

## Hard rules
- Never deploy if any component still contains placeholder text like "Business Name"
- Never pitch without a confirmed vercel URL in the CRM
- Each site must use a different palette from the previous build
