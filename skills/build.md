# /build

Build a site for a single lead that has already been gathered.
Every build uses the 5-page multi-page scaffold from template/base/.

## Usage
/build place_id="ChIJ..."

## Steps

1. **Confirm data exists**
   - Check `builds/{place_id}/business.json` — if missing, run `/gather` first

2. **Scaffold**
   - Copy template: `cp -r template/base/. builds/{place_id}/`
   - This copies ALL required files including:
     - `app/` — all 5 pages (layout, home, services, projects, about, contact)
     - `components/` — Nav, MobileCTABar, Hero, TrustBar, ServicesPreview, ReviewsPreview, ProjectsPreview, Gallery, CTASection
     - `postcss.config.js` — REQUIRED for Tailwind CSS; must be present or build will fail
     - `tailwind.config.ts`, `package.json`, `tsconfig.json`, `next.config.js`

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
   - Replace the `:root { }` block with `css_vars` from the design system JSON
   - Add Google Fonts `<link>` URL in `builds/{place_id}/app/layout.tsx`
   - Replace `GOOGLE_FONTS_URL` with the `google_fonts` value from design system JSON
   - Format: title = `"{Business Name} | {City}"`, description max 150 chars with local keywords

7. **Populate layout.tsx**
   - Set `businessName`, `phone`, `tagline` (e.g. "Long Beach · Est. 2011")
   - Set `ctaText` to match aura tone (e.g. "Call Now — 24/7 Service" for industrial)

8. **Populate Home page (`app/page.tsx`)**
   - Reorder sections per `layout_variant.section_order`:
     - **industrial**: TrustBar → Hero → ServicesPreview → ReviewsPreview → ProjectsPreview → CTASection
     - **contractor**: TrustBar → Hero → ReviewsPreview → ServicesPreview → ProjectsPreview → CTASection
     - **coastal**: Hero → ProjectsPreview → ServicesPreview → ReviewsPreview → CTASection
     - **luxury**: Hero → ProjectsPreview → ServicesPreview → ReviewsPreview → CTASection
     - **minimal**: Hero → ServicesPreview → ReviewsPreview → CTASection
   - Write aura-appropriate tagline using `copywriting_tone.examples.hero_tagline`
   - Set `trustBadges` from design system JSON (icon + label format)
   - Populate `services` array (max 6 preview items, href to /services#anchor)
   - Set `photos` to real paths from `public/images/` — use `[]` if fewer than 3 exist
   - Set `stats` with real data (years, project count, rating) from business.json
   - Populate `reviews` array (max 3 featured, with location field)

9. **Populate Services page (`app/services/page.tsx`)**
   - Write specific service descriptions with local keywords and trust language
   - Include feature bullet points per service (6–8 features)
   - Add localNote per service (e.g. "Serving Long Beach and surrounding areas")

10. **Populate Projects page (`app/projects/page.tsx`)**
    - Count photos in `builds/{place_id}/public/images/`
    - 3+ photos → set `photos` array with `/images/` paths
    - Fewer than 3 → set `photos = []`, populate `projectHighlights` text section instead
    - Never leave an empty or broken gallery

11. **Populate About page (`app/about/page.tsx`)**
    - Write company story that feels local and specific to this business
    - Match tone strictly to the inferred aura's copywriting style
    - Fill values, credentials, and stats from business.json data

12. **Populate Contact page (`app/contact/page.tsx`)**
    - Fill `PHONE`, `ADDRESS`, `CITY`, `serviceArea` from business.json
    - Set `emergency = true` if business lists 24/7 hours
    - Populate `hours` array with structured {days, hours} pairs

13. **Mobile QA — all 5 pages at 390px**
    - No placeholder text (BUSINESS_NAME, PHONE, TAGLINE, CITY, YEAR, etc.)
    - No broken image references
    - Gallery/ProjectsPreview hidden if photos < 3
    - CTAs above fold on home page
    - No horizontal overflow
    - MobileCTABar not obscuring content (`padding-bottom: 80px` set in globals.css)
    - postcss.config.js exists in build directory

14. **Done**
    - Update CRM status to 'built': `python crm/db.py` or inline sqlite update
    - Print: `ready to deploy — run /deploy place_id="{place_id}"`
    - Or batch deploy later with: `bash scripts/deploy_local.sh`
