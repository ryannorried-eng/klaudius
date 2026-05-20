import type { Metadata } from 'next'
import CTASection from '../../components/CTASection'

export const metadata: Metadata = {
  title: 'Services | Rodriguez Construction & Remodeling · Waco, TX',
  description: 'New home construction, room additions, remodeling, interior painting, and drywall in Waco, TX. Rodriguez Construction — free estimates. Call (254) 447-7325.',
}

const PHONE = '(254) 447-7325'
const CITY = 'Waco'

const services = [
  {
    id: 'new-construction',
    number: '01',
    title: 'New Home Construction',
    subtitle: 'From foundation to finish — one crew, one contractor.',
    description: `Building a home in the Waco area means finding a contractor who can manage the full scope without dropping the ball between trades. Rodriguez Construction has handled full new home builds in McLennan County and stood behind every detail — from framing and roofing to interior finishes and final walkthrough.

Luis supervises every project personally. You won't get handed off to a crew you've never met. One number, one person accountable, from breaking ground to handing over the keys.`,
    features: [
      'Full custom home construction',
      'Framing, roofing, and structural work',
      'Plumbing and electrical coordination',
      'Insulation, drywall, and interior finishes',
      'Cabinetry, flooring, and tile installation',
      'Exterior work — siding, trim, and paint',
      'Permit management and inspection scheduling',
      'Final punch list and walkthrough',
    ],
    localNote: 'New construction projects serving Waco and McLennan County, TX.',
  },
  {
    id: 'additions',
    number: '02',
    title: 'Room & Garage Additions',
    subtitle: 'More space, built to match — permitted and done right.',
    description: `Rodriguez Construction has completed garage additions, guest suites, and expanded living areas across Waco. Luis supervised every project himself and made sure the finished addition looked like it belonged — not like something tacked on later.

All additions are permitted and inspected. We handle the paperwork, schedule the inspections, and make sure the structural work ties into your existing home correctly.`,
    features: [
      'Garage additions and new construction',
      'Garage-to-living-space conversions',
      'Guest suites and in-law apartments',
      'Room expansions and open floor plan work',
      'Foundation work and tie-in framing',
      'Roofline matching and exterior finish',
      'HVAC and electrical extensions',
      'Permit management through City of Waco',
    ],
    localNote: 'Addition projects serving Waco, TX and surrounding communities.',
  },
  {
    id: 'kitchen-bath',
    number: '03',
    title: 'Kitchen & Bath Remodeling',
    subtitle: 'Full renovations with no hand-off surprises.',
    description: `Kitchen and bathroom remodels are Rodriguez Construction's bread and butter. Luis coordinates the tile work, plumbing, cabinetry, and fixtures himself — no passing the job between strangers who've never spoken to each other.

Projects are scoped in detail before any work begins. You'll know the timeline, the sequence, and the exact scope. Changes require your sign-off. No surprises at the end.`,
    features: [
      'Full kitchen gut-and-rebuild or cosmetic refresh',
      'Custom and semi-custom cabinetry installation',
      'Countertop installation — quartz, granite, laminate',
      'Tile backsplash and floor tile',
      'Bathroom demo, tile, and fixture replacement',
      'Walk-in shower conversions',
      'Vanity and plumbing fixture upgrades',
      'Lighting and exhaust fan work',
    ],
    localNote: 'Kitchen and bath remodeling throughout Waco, TX.',
  },
  {
    id: 'painting',
    number: '04',
    title: 'Interior Painting',
    subtitle: 'Professional prep. Clean lines. On-time delivery.',
    description: `Rodriguez Construction has painted single-family homes, condos, and rental properties throughout Waco. Luis's crews are known for meeting tight timelines, cleaning up after each day's work, and delivering results that look right and hold up.

Every paint project starts with proper surface prep — filling holes, caulking gaps, and priming bare surfaces. The quality of the finished coat reflects the work underneath it.`,
    features: [
      'Whole-home interior repaints',
      'Condo and multi-unit painting',
      'Single-room and accent wall work',
      'Trim, baseboards, and crown molding painting',
      'Cabinet painting and door refinishing',
      'Popcorn ceiling removal and repaint',
      'Surface prep — patching, sanding, priming',
      'Rental property turnovers and refreshes',
    ],
    localNote: 'Interior painting services throughout Waco and McLennan County.',
  },
  {
    id: 'drywall',
    number: '05',
    title: 'Drywall Repair & Finishing',
    subtitle: 'Cracks, patches, texture matching — done clean.',
    description: `Whether it's a hairline crack from settling, a hole from a door handle, or a full wall section that needs to be redone, Rodriguez Construction handles drywall repair and finishing with care. Luis's crew shows up when scheduled and cleans up completely when finished.

Texture matching is one of those details that separates a professional drywall repair from one that sticks out forever. We take time to match the existing texture so the repair disappears.`,
    features: [
      'Hairline and structural crack repair',
      'Hole patching and panel replacement',
      'Texture matching — orange peel, knockdown, smooth',
      'Water damage repair and replacement',
      'Full wall and ceiling drywall installation',
      'Skim coating and smooth finish work',
      'Pre-paint surface preparation',
      'Rental property repair and restoration',
    ],
    localNote: 'Drywall services available throughout Waco, TX.',
  },
  {
    id: 'flooring',
    number: '06',
    title: 'Flooring Installation',
    subtitle: 'Demo, prep, and install — no subcontractor surprises.',
    description: `Rodriguez Construction installs hardwood, luxury vinyl plank, and tile flooring across Waco-area homes. Demo and subfloor prep are handled in-house — there's no gap between pulling up the old floor and laying down the new one.

We take time to prep the subfloor correctly. A floor that's installed right on a properly leveled and repaired substrate lasts decades. One that isn't starts showing problems in months.`,
    features: [
      'Hardwood and engineered hardwood installation',
      'Luxury vinyl plank (LVP) throughout',
      'Porcelain and ceramic tile',
      'Subfloor repair, leveling, and prep',
      'Demo and disposal of existing flooring',
      'Staircase treads and risers',
      'Transition strips and thresholds',
      'Matching flooring on additions and renovations',
    ],
    localNote: 'Flooring installation services throughout Waco and surrounding areas.',
  },
]

export default function ServicesPage() {
  return (
    <main>
      <section style={{
        padding: 'clamp(3.5rem, 10vw, 6rem) clamp(1rem, 5vw, 2.5rem)',
        borderBottom: '1px solid var(--color-border)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.6875rem',
            fontWeight: 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}>
            <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'var(--color-accent)' }} />
            What We Do
          </p>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            maxWidth: '20ch',
            marginBottom: '1.5rem',
          }}>
            Construction and remodeling in Waco
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
            color: 'var(--color-muted)',
            maxWidth: '58ch',
            lineHeight: 1.7,
            marginBottom: '2rem',
          }}>
            Rodriguez Construction & Remodeling handles residential projects across Waco and McLennan County. New home builds, garage additions, kitchen and bath remodels, interior painting, drywall, and flooring — licensed, insured, and supervised by Luis on every job.
          </p>
          <a
            href={`tel:${PHONE}`}
            style={{
              display: 'inline-flex',
              background: 'var(--color-accent)',
              color: 'var(--color-bg)',
              padding: '0.875rem 1.875rem',
              borderRadius: '4px',
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              textDecoration: 'none',
              fontSize: '1rem',
            }}
          >
            Call for a Free Estimate
          </a>
        </div>
      </section>

      {services.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          style={{
            padding: 'clamp(4rem, 10vw, 7rem) clamp(1rem, 5vw, 2.5rem)',
            background: i % 2 === 1 ? 'var(--color-surface)' : 'var(--color-bg)',
            borderBottom: '1px solid var(--color-border)',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
              gap: 'clamp(2.5rem, 6vw, 5rem)',
              alignItems: 'start',
            }}>
              <div>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', color: 'var(--color-accent)', display: 'block', marginBottom: '1rem' }}>
                  {s.number}
                </span>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.875rem, 4vw, 2.875rem)', fontWeight: 700, letterSpacing: '-0.015em', lineHeight: 1.08, marginBottom: '0.625rem' }}>
                  {s.title}
                </h2>
                <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(1rem, 2vw, 1.125rem)', color: 'var(--color-accent)', marginBottom: '1.75rem', lineHeight: 1.4 }}>
                  {s.subtitle}
                </p>
                {s.description.split('\n\n').map((para, j) => (
                  <p key={j} style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.75, marginBottom: '1rem' }}>
                    {para}
                  </p>
                ))}
                <p style={{ marginTop: '1.5rem', fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--color-accent)', fontStyle: 'italic' }}>
                  {s.localNote}
                </p>
                <div style={{ marginTop: '2rem' }}>
                  <a href={`tel:${PHONE}`} style={{ background: 'var(--color-accent)', color: 'var(--color-bg)', padding: '0.75rem 1.625rem', borderRadius: '4px', fontFamily: 'var(--font-body)', fontWeight: 700, textDecoration: 'none', fontSize: '0.9375rem' }}>
                    Get a Free Estimate
                  </a>
                </div>
              </div>

              <div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: '1.125rem' }}>
                  Scope includes
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {s.features.map((f, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem 0', borderBottom: '1px solid var(--color-border)', fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'var(--color-fg)', lineHeight: 1.45 }}>
                      <span style={{ color: 'var(--color-accent)', fontSize: '0.5rem', marginTop: '0.4rem', flexShrink: 0 }}>✦</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTASection
        headline="Ready to get started?"
        subtext="Call Luis for a straight answer and a firm estimate. No pressure, no surprises."
        phone={PHONE}
        ctaLabel={`Call ${PHONE}`}
        secondaryLabel="Request an Online Estimate"
        secondaryHref="/contact"
        footnote={`Licensed & Insured · Serving ${CITY}, TX`}
      />
    </main>
  )
}
