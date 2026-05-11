# /run

Run the full autonomous pipeline loop for a region and business category.

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

   **c. Read context**
   - Read `lessons.md` — note any design or outreach patterns from past runs

   **d. Infer aura**
   - Import and call `infer_aura(business)` from `pipeline/aura.py`
   - Or run: `python pipeline/aura.py builds/{place_id}/business.json`
   - Record: aura type + design system name
   - Valid aura types: `coastal` | `luxury` | `industrial` | `contractor` | `minimal_professional`

   **e. Load design system**
   - Read `template/design-systems/{design_system}.json`
   - Extract: `css_vars`, `google_fonts`, `layout_variant`, `copywriting_tone`

   **f. Inject design system**
   - Write CSS variables from `css_vars` into `builds/{place_id}/app/globals.css`
   - Add Google Fonts `<link>` from `google_fonts` into `builds/{place_id}/app/layout.tsx`
   - Set metadata `title` to `"{Business Name} | {City}"`
   - Set metadata `description` with local keywords (max 150 chars)

   **g. Populate layout.tsx**
   - Set `businessName` and `phone` in Nav and MobileCTABar
   - Set `ctaText` on MobileCTABar to match aura tone (e.g. "Call Now — 24/7 Service" for industrial)

   **h. Write Home page (`app/page.tsx`)**
   - Use `layout_variant.section_order` to set the correct component order
   - Reorder component imports and JSX to match the aura section sequence
   - Populate all props: name, tagline, phone, city, rating, reviewCount, emergency
   - Write aura-appropriate tagline from `copywriting_tone.examples.hero_tagline`
   - Set `trustBadges` appropriate to aura (see design system JSON)
   - Populate `services` array (max 6 preview items)
   - Set `photos` to real paths from `public/images/` — use `[]` if fewer than 3 exist
   - Populate `reviews` array (max 3 featured reviews)

   **i. Write Services page (`app/services/page.tsx`)**
   - Write real service descriptions — specific, detailed, with local keywords
   - Include `features` arrays where useful
   - Set city and phone

   **j. Write Projects page (`app/projects/page.tsx`)**
   - Count real photos in `builds/{place_id}/public/images/`
   - If 3+ photos: populate `photos` array with relative paths (`/images/filename.jpg`)
   - If fewer than 3: remove Gallery component, replace with a text-based proof section
   - Never leave an empty or broken gallery

   **k. Write About page (`app/about/page.tsx`)**
   - Write company story based on business name, review signals, and category
   - Match tone to aura copywriting style
   - Set years, values, and certifications appropriately
   - Avoid generic AI filler — make it feel local and specific

   **l. Write Contact page (`app/contact/page.tsx`)**
   - Fill phone, address, hours from business.json
   - Set `emergency=true` if business lists 24/7 hours
   - Set city and serviceArea

   **m. Verify mobile rendering — all 5 pages at 390px**
   - No placeholder text remaining (BUSINESS_NAME, PHONE, TAGLINE, CITY, etc.)
   - CTAs visible without scrolling on home page
   - No horizontal overflow on any page
   - MobileCTABar not obscuring content (body has `padding-bottom: 80px`)
   - No broken image `src` references
   - Gallery hidden if photos array is empty or has fewer than 3 items

   **n. Deploy**
   - Run pipeline/deploy.py — `deploy(place_id)`

   **o. Pitch**
   - If email exists in CRM: run pipeline/pitch.py — `pitch(place_id)`

   **p. Log**
   - Append to lessons.md: design system, aura type, what worked, any failures

3. Print summary table:
   `business name | aura | design system | deployed URL | pitched (yes/no)`

## Hard rules
- Never deploy if any component still contains placeholder text
- Never deploy with broken image references or empty Gallery props
- Never pitch without a confirmed Vercel URL in the CRM
- Each site must use a different palette from the previous build in the same batch
- Copy must match aura tone — never use generic filler language
- MobileCTABar must have the correct phone number and aura-appropriate ctaText
