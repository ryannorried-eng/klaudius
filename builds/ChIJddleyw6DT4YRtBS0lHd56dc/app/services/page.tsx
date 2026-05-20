import type { Metadata } from 'next'
import CTASection from '../../components/CTASection'

export const metadata: Metadata = {
  title: 'Services | Prestige Construction & Remodeling LLC · Waco, TX',
  description: 'Kitchen remodeling, room additions, bathroom renovation, flooring, and general contracting in Waco, TX. Licensed & insured. Free estimates. Call (254) 981-4152.',
}

const PHONE = '(254) 981-4152'
const CITY = 'Waco'

const services = [
  {
    id: 'kitchen-remodeling',
    number: '01',
    title: 'Kitchen Remodeling',
    subtitle: 'Complete kitchen transformations — from layout changes to luxury finishes.',
    description: `A kitchen remodel is one of the most impactful upgrades you can make to a Waco home. Prestige Construction handles everything from structural changes and custom cabinetry to countertop fabrication and appliance hookup — one contractor, start to finish, no hand-off surprises.

Every kitchen project starts with a walk-through and a written scope. You'll know exactly what's included before a single nail is pulled. Manny's crew keeps job sites clean and communication clear throughout.`,
    features: [
      'Custom and semi-custom cabinetry installation',
      'Countertop fabrication — quartz, granite, butcher block',
      'Tile backsplash and floor tile',
      'Plumbing and electrical rough-in and finish work',
      'Full gut-and-rebuild or cosmetic refresh',
      'Island additions and open floor plan conversions',
      'Appliance installation and hookup',
      'Under-cabinet and overhead lighting upgrades',
    ],
    localNote: 'Serving Waco, Woodway, Hewitt, and surrounding McLennan County communities.',
  },
  {
    id: 'bathroom-renovation',
    number: '02',
    title: 'Bathroom Renovation',
    subtitle: 'From half-bath updates to full master bath additions.',
    description: `Waco homeowners trust Prestige for bathroom renovations of every size — powder room refreshes, master bath gut-outs, and secondary bath updates. We manage permits, plumbing, tile, and fixtures in-house.

Our estimates cover every line item, including the ones other contractors miss. No allowances that balloon into overages. What we quote is what you pay.`,
    features: [
      'Walk-in shower conversions and expansions',
      'Custom tile work — walls, floors, niches, and benches',
      'Vanity and fixture replacement',
      'Freestanding tub and soaker tub installations',
      'Double vanity and layout reconfiguration',
      'Exhaust fan and lighting upgrades',
      'Waterproofing and moisture barrier installation',
      'Frameless glass shower enclosures',
    ],
    localNote: 'Available throughout Waco and Central Texas.',
  },
  {
    id: 'room-additions',
    number: '03',
    title: 'Room Additions',
    subtitle: 'Seamless additions designed to look like they were always there.',
    description: `When your family outgrows your floor plan, a room addition is the answer. Prestige Construction manages the full process — plans, permits, foundation, framing, insulation, HVAC, electrical, and finish carpentry — with one point of contact.

Every addition matches the roofline, trim, and finishes of your existing home. We pull all required permits with the City of Waco and schedule all inspections.`,
    features: [
      'In-law suites and guest room additions',
      'Master bedroom and bath additions',
      'Sunrooms and enclosed patio conversions',
      'Garage-to-living-space conversions',
      'Structural engineering and permit management',
      'Foundation work, framing, and roofing tie-in',
      'HVAC extension and electrical service upgrade',
      'Interior finish to match existing home',
    ],
    localNote: 'Serving Waco and McLennan County. All permits handled in-house.',
  },
  {
    id: 'interior-renovation',
    number: '04',
    title: 'Interior Renovation',
    subtitle: 'Whole-home or room-by-room — walls, trim, doors, and finishes.',
    description: `Whether you're updating a single room or refreshing a whole house, Prestige handles interior renovation work with the same care as a full remodel. Drywall repair, interior painting, trim and door replacement, and finish carpentry — all done right.

Manny's crew preps every surface properly before any finish work begins. The difference shows in the details: clean lines, tight joints, finishes that hold up.`,
    features: [
      'Interior painting — whole-home and room-by-room',
      'Drywall installation, repair, and texture matching',
      'Baseboard, crown molding, and door casing',
      'Interior door replacement and hanging',
      'Popcorn ceiling removal and refinish',
      'Trim and wainscoting installation',
      'Cabinet painting and refinishing',
      'Window casing and sill replacement',
    ],
    localNote: 'Interior renovation services throughout Waco, TX.',
  },
  {
    id: 'flooring',
    number: '05',
    title: 'Flooring & Tile',
    subtitle: 'Hardwood, LVP, porcelain tile — demo, prep, and install.',
    description: `New flooring transforms a home faster than almost any other upgrade. Prestige installs hardwood, engineered wood, luxury vinyl plank, and porcelain tile across all room types — including staircases, kitchens, and bathrooms that require proper moisture preparation.

We handle demo and subfloor repair in-house, so there's no gap between what needs to be done and who's responsible.`,
    features: [
      'Solid and engineered hardwood installation',
      'Luxury vinyl plank (LVP) and tile',
      'Porcelain and ceramic floor tile',
      'Staircase treads and risers',
      'Subfloor leveling and repair',
      'Transition strips and thresholds',
      'Demo and disposal of existing flooring',
      'Heated floor tile system installation',
    ],
    localNote: 'Flooring services available throughout Waco and surrounding areas.',
  },
  {
    id: 'general-contracting',
    number: '06',
    title: 'General Contracting',
    subtitle: 'One contractor. One price. One person responsible.',
    description: `Need someone to run the whole project? Prestige Construction acts as general contractor for residential projects of all sizes — coordinating trades, managing the schedule, pulling permits, and keeping the job moving while you live your life.

Manny built this business around accountability. You'll have one number to call and one person who knows every detail of your job.`,
    features: [
      'Full project management from permit to punch list',
      'Trade coordination — plumbing, electrical, HVAC, tile',
      'Permit pulling and inspection scheduling',
      'Budget tracking and change order management',
      'Daily site supervision',
      'Subcontractor vetting and quality control',
      'Residential projects up to full home renovation',
      'Open 7 days — available when your project needs attention',
    ],
    localNote: 'General contracting services for Waco homeowners and property owners.',
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
            Full-service construction and remodeling in Waco
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
            color: 'var(--color-muted)',
            maxWidth: '58ch',
            lineHeight: 1.7,
            marginBottom: '2rem',
          }}>
            Prestige Construction & Remodeling handles projects from first permit to final walkthrough. Kitchen remodels, bathroom renovations, room additions, flooring, and full general contracting — licensed, insured, and open 7 days a week.
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
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  color: 'var(--color-accent)',
                  display: 'block',
                  marginBottom: '1rem',
                }}>
                  {s.number}
                </span>
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.875rem, 4vw, 2.875rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.015em',
                  lineHeight: 1.08,
                  marginBottom: '0.625rem',
                }}>
                  {s.title}
                </h2>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                  color: 'var(--color-accent)',
                  marginBottom: '1.75rem',
                  lineHeight: 1.4,
                }}>
                  {s.subtitle}
                </p>
                {s.description.split('\n\n').map((para, j) => (
                  <p key={j} style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9375rem',
                    color: 'var(--color-muted)',
                    lineHeight: 1.75,
                    marginBottom: '1rem',
                  }}>
                    {para}
                  </p>
                ))}
                <p style={{
                  marginTop: '1.5rem',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8125rem',
                  color: 'var(--color-accent)',
                  fontStyle: 'italic',
                }}>
                  {s.localNote}
                </p>
                <div style={{ marginTop: '2rem' }}>
                  <a
                    href={`tel:${PHONE}`}
                    style={{
                      background: 'var(--color-accent)',
                      color: 'var(--color-bg)',
                      padding: '0.75rem 1.625rem',
                      borderRadius: '4px',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 700,
                      textDecoration: 'none',
                      fontSize: '0.9375rem',
                    }}
                  >
                    Get a Free Estimate
                  </a>
                </div>
              </div>

              <div>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-muted)',
                  marginBottom: '1.125rem',
                }}>
                  Scope includes
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {s.features.map((f, j) => (
                    <li key={j} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      padding: '0.75rem 0',
                      borderBottom: '1px solid var(--color-border)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9375rem',
                      color: 'var(--color-fg)',
                      lineHeight: 1.45,
                    }}>
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
        subtext="Call Manny's crew for a free, no-pressure estimate. We'll walk the job and give you a firm written quote — no surprises."
        phone={PHONE}
        ctaLabel={`Call ${PHONE}`}
        secondaryLabel="Request an Online Estimate"
        secondaryHref="/contact"
        footnote={`Licensed & Insured · Serving ${CITY}, TX · Open 7 Days`}
      />
    </main>
  )
}
