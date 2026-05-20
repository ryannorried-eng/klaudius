# Klaudius Pipeline

You are running an autonomous web agency pipeline. Your job is to find local businesses
without websites, build them designer-quality Next.js sites, deploy them, and pitch
the live URL to the business owner.

## How to operate
- All pipeline logic lives in `/pipeline/*.py`
- All leads and outreach are tracked in SQLite via `crm/leads.db`
- Built sites land in `/builds/{place_id}/`
- Design preferences and lessons from past runs are in `/lessons.md` — read it before every build
- Available slash commands are in `/skills/*.md` — read the relevant one before executing

## End-to-end workflow

The correct sequence for a full pipeline run:

```
1.  find          → pipeline/find.py          Find no-website businesses (Google Places)
2.  gather        → pipeline/gather.py        Download photos, reviews, metadata → business.json
3.  scaffold      → cp -r template/base/. builds/{place_id}/
4.  aura          → pipeline/aura.py          Infer design system (industrial/contractor/coastal/luxury/minimal)
5.  design        → inject css_vars, fonts    Write globals.css + layout.tsx from design system JSON
6.  build         → write 5 pages             Populate all placeholders with real business data
7.  find emails   → pipeline/find_emails.py   Discover contact email via Hunter.io API (optional)
8.  deploy        → scripts/deploy_local.sh   npm install + vercel CLI --yes --name klaudius-{name}
9.  pitch         → pipeline/pitch.py         Send email with live URL (requires email in CRM)
10. follow-up     → pipeline/followup.py      Touch #2 email, 3+ days post-pitch if no reply
```

### Deployment note
Use `scripts/deploy_local.sh` for all deployments — it uses the local Vercel CLI
which is reliable. The Vercel REST API (`pipeline/deploy.py`) is deprecated and unreliable.
Run `bash scripts/deploy_local.sh` to batch-deploy all 'built' leads at once.

## Site structure
Every generated site is multi-page with true Next.js App Router routing:

| Route | Purpose |
|-------|---------|
| `/` | Home — TrustBar, Hero, ServicesPreview, ReviewsPreview, ProjectsPreview, CTASection |
| `/services` | Full services page with two-column blocks: copy + feature bullets |
| `/projects` | Gallery page — hide entirely if fewer than 3 real photos exist |
| `/about` | Company story, stats, values, credentials |
| `/contact` | Form, phone, address, hours, service area, emergency CTA |

Nav and MobileCTABar are persistent across all pages via `app/layout.tsx`.

### Template scaffold
`template/base/` is the canonical multi-page scaffold. Every new build starts with:
```bash
cp -r template/base/. builds/{place_id}/
```

This copies all required files including `postcss.config.js` (required for Tailwind).

### Components (7 core + 2 optional)
Core (wired into every build):
1. `Nav.tsx` — sticky header with businessName, phone, nav links
2. `MobileCTABar.tsx` — fixed bottom bar on mobile with click-to-call
3. `Hero.tsx` — headline, subheadline, badge, CTA buttons, optional stats
4. `TrustBar.tsx` — horizontal badge strip (icon + label format)
5. `ServicesPreview.tsx` — numbered grid of up to 6 services, links to /services
6. `ReviewsPreview.tsx` — 3 featured reviews with rating stars
7. `CTASection.tsx` — bottom-of-page CTA on every page

Optional (include based on photo count):
8. `ProjectsPreview.tsx` — shown on home page if 3+ photos exist
9. `Gallery.tsx` — used on /projects page if 3+ photos exist

Deprecated (removed — content is now inline in page files):
- `Services.tsx`, `About.tsx`, `Contact.tsx`, `Reviews.tsx`

## Aura-based design intelligence
Every build starts with aura inference — run `infer_aura(business)` from `pipeline/aura.py`
before choosing any design system. Never skip this step.

| Aura | Design system | Typical businesses |
|------|---------------|--------------------|
| coastal | coastal | Marinas, waterfront restaurants, charter fishing, dock builders |
| luxury | editorial | Architects, fine dining, boutique hotels, high-end remodelers |
| industrial | industrial | Plumbers, welders, HVAC, mechanics, electricians |
| contractor | contractor | Roofers, remodelers, landscapers, painters, general contractors |
| minimal_professional | minimal | Consultants, clinics, therapists, accountants, attorneys |

Aura detection uses: business name keywords (weight 3) → category/types (weight 4) → review language (weight 1).
Fallback if no signals match: industrial (broadest trade coverage).

Each design system JSON (`template/design-systems/*.json`) contains:
- `aura_signals` — weighted keywords that trigger this aura
- `css_vars` — CSS custom properties (colors, fonts)
- `google_fonts` — full `<link href="...">` URL
- `layout_variant` — section order, hero style, spacing, gallery, CTA style
- `copywriting_tone` — headline examples, CTA text, trust language, tone description
- `trustBadges` — aura-appropriate badges array (icon + label format)

## Structural layout variation
Aura types produce structurally different section orders on the home page:

- **industrial**: TrustBar → Hero → ServicesPreview → ReviewsPreview → ProjectsPreview → CTASection
- **contractor**: TrustBar → Hero → ReviewsPreview → ServicesPreview → ProjectsPreview → CTASection
- **coastal**: Hero → ProjectsPreview → ServicesPreview → ReviewsPreview → CTASection
- **luxury**: Hero → ProjectsPreview → ServicesPreview → ReviewsPreview → CTASection
- **minimal_professional**: Hero → ServicesPreview → ReviewsPreview → CTASection

## Design principles
- Every site gets a unique design system — never reuse the same palette or type pairing twice
- Aura determines MORE than colors: it sets section order, spacing, copywriting tone, and visual rhythm
- Mobile-first. Every page must render correctly at 390px wide before deploy
- Image rule: never deploy broken image references; hide ProjectsPreview/Gallery if fewer than 3 real photos
- Pick a design system and adapt it — never clone it exactly

## Conversion requirements (all sites)
- Sticky MobileCTABar in `layout.tsx` with click-to-call
- Phone number in desktop Nav and MobileCTABar
- TrustBar with aura-appropriate badges (`{icon, label}` format)
- CTASection with `ctaLabel` and optional `footnote` at the bottom of every page
- Emergency language in Hero and Contact for 24/7 businesses
- Repeated phone CTAs — every page must have at least one

## SEO structure
- `metadata.title`: `"{Business Name} | {City}"` — in `app/layout.tsx` AND each `page.tsx`
- `metadata.description`: local-keyword-rich, 150 chars max
- Every page has its own `export const metadata` in its `page.tsx`
- Semantic headings: h1 on every page, h2 for sections, h3 for cards
- City name in: hero tagline, services page intro, contact page
- Service-specific language in /services (not generic filler)

## Copywriting tone
Copy must match aura — read the `copywriting_tone` block in the chosen design system JSON.
Never write generic filler copy.

Quick reference:
- **industrial**: "Built to last. Done right the first time."
- **contractor**: "Fast estimates. Honest pricing. Reliable crews."
- **coastal**: "Designed for life on the water."
- **luxury**: "Crafted with precision. Built to endure."
- **minimal_professional**: "Clear guidance from experienced professionals."

## Email discovery
Before pitching, attempt to find a contact email:
```bash
python pipeline/find_emails.py {place_id}   # single lead
python pipeline/find_emails.py --all        # all leads without email
```
Requires `HUNTER_API_KEY` in `.env`. Strategy: domain search → company name search → Hunter email finder.

## Outreach tone
- Warm, direct, no fluff
- Reference something specific about the business (a review, a service, a photo subject)
- Lead with the live URL in the first sentence
- Subject line: just their business name, nothing spammy

## Rules
- Never deploy without confirming all 5 pages render correctly at 390px mobile width
- Never deploy with placeholder text (BUSINESS_NAME, PHONE, TAGLINE, CITY, YEAR, etc.)
- Never deploy broken image references or empty Gallery/ProjectsPreview sections
- Never deploy without `postcss.config.js` in the build directory
- Never pitch without a deployed URL confirmed in the CRM
- Always update the CRM after every pipeline step
- Read lessons.md before every build session and append new lessons after each run
- Use `scripts/deploy_local.sh` for deployment — NOT `pipeline/deploy.py`
