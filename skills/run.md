# /run

Run the full autonomous pipeline loop for a region and business category.
Every site uses the 5-page multi-page scaffold from template/base/.

## Usage
/run region="San Pedro, CA" category="plumber" count=10

## Steps

1. Run pipeline/find.py — `find_leads(region, category, count)`
2. For each new lead returned:

   **a. Gather**
   - Run pipeline/gather.py — `gather(place_id)`
   - Read `builds/{place_id}/business.json`

   **b. Scaffold**
   - Copy template into build dir: `cp -r template/base/. builds/{place_id}/`
   - Confirms: all 5 pages, 9 components, postcss.config.js, next.config.js are present

   **c. Read context**
   - Read `lessons.md` — note any design or outreach patterns from past runs

   **d. Infer aura**
   - Import and call `infer_aura(business)` from `pipeline/aura.py`
   - Or run: `python pipeline/aura.py builds/{place_id}/business.json`
   - Record: aura type + design system name
   - Valid aura types: `coastal` | `luxury` | `industrial` | `contractor` | `minimal_professional`

   **e. Load design system**
   - Read `template/design-systems/{design_system}.json`
   - Extract: `css_vars`, `google_fonts`, `layout_variant`, `copywriting_tone`, `trustBadges`

   **f. Inject design system**
   - Replace the `:root { }` block in `builds/{place_id}/app/globals.css` with `css_vars`
   - Add Google Fonts `<link>` from `google_fonts` into `builds/{place_id}/app/layout.tsx`
   - Set metadata `title` to `"{Business Name} | {City}"`
   - Set metadata `description` with local keywords (max 150 chars)

   **g. Populate layout.tsx**
   - Set `businessName`, `phone`, `tagline` in layout
   - Set `ctaText` on MobileCTABar to match aura tone
     - industrial: "Call Now — 24/7 Service"
     - contractor: "Call Now — Free Estimate"
     - coastal: "Book Now"
     - luxury: "Schedule a Consultation"
     - minimal: "Contact Us"

   **h. Write Home page (`app/page.tsx`)**
   - Use `layout_variant.section_order` to set the correct component order
   - Reorder JSX to match the aura section sequence:
     - **industrial**: TrustBar → Hero → ServicesPreview → ReviewsPreview → ProjectsPreview → CTASection
     - **contractor**: TrustBar → Hero → ReviewsPreview → ServicesPreview → ProjectsPreview → CTASection
     - **coastal**: Hero → ProjectsPreview → ServicesPreview → ReviewsPreview → CTASection
     - **luxury**: Hero → ProjectsPreview → ServicesPreview → ReviewsPreview → CTASection
     - **minimal**: Hero → ServicesPreview → ReviewsPreview → CTASection
   - Populate all props with real data from business.json:
     - `trustBadges`: use icon+label format from design system JSON
     - `services`: max 6 preview items, each with name/description/href
     - `photos`: real paths if 3+ photos exist, else `[]`
     - `reviews`: max 3 featured reviews with author/location/text/rating
     - `stats`: years in business, project count, Google rating
   - Write aura-appropriate headline/subheadline from `copywriting_tone.examples`

   **i. Write Services page (`app/services/page.tsx`)**
   - Write real service descriptions — specific, detailed, with local keywords
   - Two-column layout: copy left, feature bullets right
   - Add `localNote` per service: "Serving {City} and surrounding areas"
   - Set phone and city constants

   **j. Write Projects page (`app/projects/page.tsx`)**
   - Count real photos in `builds/{place_id}/public/images/`
   - If 3+ photos: set `photos` array with relative paths (`/images/filename.jpg`)
   - If fewer than 3: set `photos = []`, populate `projectHighlights` with text descriptions
   - Never leave an empty or broken gallery

   **k. Write About page (`app/about/page.tsx`)**
   - Write company story based on business name, review signals, and category
   - Match tone to aura copywriting style
   - Populate stats block (founded year, project count, team size, rating)
   - Write values and credentials appropriate to the business category
   - Avoid generic AI filler — make it feel local and specific

   **l. Write Contact page (`app/contact/page.tsx`)**
   - Fill `PHONE`, `ADDRESS`, `CITY`, `serviceArea` from business.json
   - Set `emergency = true` if business lists 24/7 hours
   - Populate `hours` with structured {days, hours} pairs from business.json

   **m. Verify mobile rendering — all 5 pages at 390px**
   - No placeholder text remaining (BUSINESS_NAME, PHONE, TAGLINE, CITY, YEAR, etc.)
   - CTAs visible without scrolling on home page
   - No horizontal overflow on any page
   - MobileCTABar not obscuring content (body has `padding-bottom: 80px`)
   - No broken image `src` references
   - ProjectsPreview/Gallery hidden if photos array has fewer than 3 items
   - postcss.config.js present in build directory

   **n. Mark built in CRM**
   - Update lead status to 'built' in crm/leads.db

   **o. Deploy**
   - Single deploy: `cd builds/{place_id} && npm install && vercel --yes --name klaudius-{sanitized-name} --prod`
   - Batch deploy (all 'built' leads): `bash scripts/deploy_local.sh`
   - Write deployed URL back to CRM (sites table, status → 'deployed')
   - ⚠️ Note: deploy.py (Vercel REST API) is deprecated. Use scripts/deploy_local.sh instead.

   **p. Find email (optional)**
   - If lead has no email in CRM: `python pipeline/find_emails.py {place_id}`
   - Checks Hunter.io API (HUNTER_API_KEY required in .env)
   - Writes found email back to leads.email column

   **q. Pitch**
   - If email exists in CRM: run pipeline/pitch.py — `pitch(place_id)`
   - Never pitch without a confirmed Vercel URL in the CRM

   **r. Log**
   - Append to lessons.md: design system, aura type, what worked, any failures

3. Print summary table:
   `business name | aura | design system | deployed URL | pitched (yes/no)`

## Hard rules
- Never deploy if any component still contains placeholder text
- Never deploy with broken image references or empty Gallery props
- Never deploy without postcss.config.js in the build directory
- Never pitch without a confirmed Vercel URL in the CRM
- Each site must use a different palette from the previous build in the same batch
- Copy must match aura tone — never use generic filler language
- MobileCTABar must have the correct phone number and aura-appropriate ctaText
- Use `scripts/deploy_local.sh` for deployment — NOT `pipeline/deploy.py` (Vercel REST API is unreliable)
