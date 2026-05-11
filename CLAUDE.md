# Klaudius Pipeline

You are running an autonomous web agency pipeline. Your job is to find local businesses
without websites, build them designer-quality Next.js sites, deploy them, and pitch
the live URL to the business owner.

## How to operate
- All pipeline logic lives in /pipeline/*.py
- All leads and outreach are tracked in SQLite via crm/leads.db
- Built sites land in /builds/{place_id}/
- Design preferences and lessons from past runs are in /lessons.md — read it before every build
- Available slash commands are in /skills/*.md — read the relevant one before executing

## Site structure
Every generated site is multi-page with true Next.js App Router routing:

| Route | Purpose |
|-------|---------|
| `/` | Home — trust bar, hero, services preview, reviews, gallery preview, CTA |
| `/services` | Full services page with descriptions, features, local keywords |
| `/projects` | Gallery page — hide entirely if fewer than 3 real photos exist |
| `/about` | Company story, years in business, values, certifications |
| `/contact` | Form, phone, address, hours, emergency CTA |

Nav is persistent across all pages via layout.tsx. MobileCTABar is fixed to bottom on mobile.

## Aura-based design intelligence
Every build starts with aura inference — run `infer_aura(business)` from pipeline/aura.py
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

Each design system JSON contains:
- `aura_signals` — weighted keywords that trigger this aura
- `layout_variant` — section order, hero style, spacing, gallery, CTA style
- `copywriting_tone` — headline examples, CTA text, trust language, tone description

## Design principles
- Every site gets a unique design system — never reuse the same palette or type pairing twice
- Aura determines MORE than colors: it sets section order, spacing, copywriting tone, and visual rhythm
- Mobile-first. Every page must render correctly at 390px wide before deploy
- Image rule: never deploy broken image references; hide Gallery if fewer than 3 real photos exist
- Pick a design system and adapt it — never clone it exactly

## Structural layout variation
Aura types produce structurally different sites, not just different colors:

- **industrial**: Hero → TrustBar → Services → Reviews → Gallery → CTA (dense, functional)
- **contractor**: TrustBar → Hero → Reviews → Services → Gallery → CTA (conversion-first, reviews early)
- **coastal**: Hero → Gallery → Services → Reviews → CTA (photography-led, airy pacing)
- **luxury**: Hero → Gallery → Services → Reviews → CTA (slow pacing, asymmetry, whitespace)
- **minimal_professional**: Hero → Services → Reviews → CTA (single-column, no decorative elements)

## Conversion requirements (all sites)
- Sticky mobile CTA bar (MobileCTABar in layout.tsx) with click-to-call
- Phone number in desktop nav and MobileCTABar
- TrustBar with aura-appropriate badges (see examples in each design system JSON)
- CTASection component at the bottom of every page
- Emergency language in hero and contact for 24/7 businesses
- Repeated phone CTAs — every page must have at least one

## SEO structure
- metadata.title: `"{Business Name} | {City}"` in app/layout.tsx
- metadata.description: local-keyword-rich, 150 chars max
- Every page has its own metadata in its page.tsx file
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

## Outreach tone
- Warm, direct, no fluff
- Reference something specific about the business (a review, a service, a photo subject)
- Lead with the live URL in the first sentence
- Subject line: just their business name, nothing spammy

## Rules
- Never deploy without confirming all 5 pages render correctly at 390px mobile width
- Never deploy with placeholder text (BUSINESS_NAME, PHONE, TAGLINE, CITY, etc.)
- Never deploy broken image references or empty Gallery sections
- Never pitch without a deployed URL confirmed in the CRM
- Always update the CRM after every pipeline step
- Read lessons.md before every build session and append new lessons after each run
