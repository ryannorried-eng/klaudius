# /build

Build a site for a single lead that has already been gathered.

## Usage
/build place_id="ChIJ..."

## Steps

1. **Confirm data exists**
   - Check `builds/{place_id}/business.json` — if missing, run `/gather` first

2. **Scaffold**
   - Copy template: `cp -r template/base/. builds/{place_id}/`

3. **Read context**
   - Read `lessons.md` for design notes from previous builds

4. **Infer aura**
   - Import `infer_aura` from `pipeline/aura.py`
   - Call `infer_aura(business)` with the business.json data
   - Record the returned `(aura_type, design_system)` tuple

5. **Load design system**
   - Read `template/design-systems/{design_system}.json`
   - Note: `layout_variant.section_order`, `copywriting_tone.examples`, `hero_style`, `cta_style`

6. **Inject design system**
   - Write CSS variables into `builds/{place_id}/app/globals.css`
   - Add Google Fonts link, update metadata title/description in `builds/{place_id}/app/layout.tsx`
   - Format: title = `"{Business Name} | {City}"`, description max 150 chars with local keywords

7. **Populate layout.tsx**
   - Set `businessName` and `phone` constants
   - Set `ctaText` to match aura tone

8. **Populate Home page (`app/page.tsx`)**
   - Reorder sections per `layout_variant.section_order`
   - Write aura-appropriate tagline using `copywriting_tone.examples.hero_tagline`
   - Fill all component props with real data
   - Set `photos = []` if fewer than 3 real photos exist

9. **Populate Services page (`app/services/page.tsx`)**
   - Write specific service descriptions with local keywords and trust language
   - Include feature bullet points per service

10. **Populate Projects page (`app/projects/page.tsx`)**
    - Count photos in `builds/{place_id}/public/images/`
    - 3+ photos → populate `photos` array with `/images/` paths
    - Fewer than 3 → remove Gallery, replace with text-based social proof section

11. **Populate About page (`app/about/page.tsx`)**
    - Write company story that feels local and specific to this business
    - Match tone strictly to the inferred aura's copywriting style
    - Fill values and certifications from what's known about the category

12. **Populate Contact page (`app/contact/page.tsx`)**
    - Fill phone, address, hours, emergency flag from business.json

13. **Mobile QA — all 5 pages at 390px**
    - No placeholder text (BUSINESS_NAME, PHONE, TAGLINE, CITY, etc.)
    - No broken image references
    - Gallery hidden if photos < 3
    - CTAs above fold on home page
    - No horizontal overflow

14. **Done**
    - Print: `ready to deploy — run /deploy place_id="{place_id}"`
