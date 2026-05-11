# Pipeline Lessons

Read this before every build session. Append new lessons after each run.

## Design
- Industrial (dark #1a1a18, amber #f5a623) — best for 24/7 emergency plumbers with high review counts; hazard-tape stripe in Hero adds immediate trade credibility
- Editorial (near-black #0a0a0a, gold #e8d5a3, Bodoni Moda italic) — works well for high-volume plumbers with polished review language; vertical rule accent gives architectural feel
- Industrial-navy variant (#0d1b2a bg, crimson #c0392b accent) — good for smaller local operators; feels trustworthy and direct without being too corporate
- Never reuse the same bg/accent pair across builds in the same batch
- `clamp()` fluid type + `100svh` + `repeat(auto-fit, minmax(...))` grids cover 390px mobile without breakpoints

## Outreach
- (populate after first pitch results)

## Regional patterns
- Waco, TX plumber market (May 2026): Google Places returned only 3 no-website results from a 20-result search — market is relatively served; may need to expand radius or try adjacent categories (HVAC, electrician)
- No photos returned from Google Places for any of the 3 Waco plumbers — build sites review/text-forward rather than photo-forward; Gallery component already handles empty gracefully
- All 3 Waco plumbers operate 24/7 — lean into that in Hero tagline, it's a real differentiator for homeowners with urgent problems

## Failures to avoid
- `cp -r template/base/ builds/{id}/` copies the dir AS a subdir, not INTO it — results in `builds/{id}/base/` rather than `builds/{id}/app/` etc. Use `cp -r template/base/. builds/{id}/` or copy into a pre-existing directory
- Vercel CLI blocked by network allowlist in this sandbox — deploy must be run locally or via CI with outbound Vercel access
- Google Places API does not return photos for many local tradespeople — don't assume photos will be available; always build photo-free layouts that still look great
