import type { Metadata } from 'next'
import CTASection from '../../components/CTASection'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Remodeling Services | Ridgeline Remodeling · Waco, TX',
  description: 'Kitchen remodeling, bathroom renovations, whole-home remodels, and room additions in Waco, TX. 15 years of craftsmanship. Free estimates. (254) 401-7820.',
}

const PHONE = '(254) 401-7820'

const services = [
  {
    id: 'kitchen',
    number: '01',
    title: 'Kitchen Remodeling',
    subtitle: 'The most-used room in your home deserves the most care.',
    description: `Your kitchen isn't just where you cook — it's where Waco families start their mornings, host dinners, and build routines. We approach every kitchen remodel with that in mind.

From a full gut-and-rebuild of a 1970s galley layout to a targeted upgrade of countertops and cabinetry, we plan every job to fit your home, your life, and your budget. We don't hand your kitchen off to subcontractors — our crew stays on site, and a project manager is reachable every day.`,
    features: [
      'Custom cabinet design and installation',
      'Quartz, granite, and solid surface countertops',
      'Kitchen layout reconfiguration',
      'Tile backsplash and flooring',
      'Lighting design and electrical upgrades',
      'Plumbing relocation and fixture installation',
      'Appliance integration and ventilation',
      'Island additions and breakfast bar builds',
    ],
    localNote: 'Serving Waco, Woodway, Hewitt, Bellmead, and all surrounding McLennan County communities.',
  },
  {
    id: 'bathroom',
    number: '02',
    title: 'Bathroom Renovations',
    subtitle: 'From dated to distinguished — without the excuses.',
    description: `Bathroom remodels are where craftsmanship is most visible. Every tile set, every grout line, every fixture choice tells you whether a contractor actually cares about their work. We do.

We handle master bath transformations, guest bath refreshes, walk-in shower conversions, and full structural overhauls. If a wall needs to move to make the layout work, we move it. If the floor needs to be waterproofed before tile goes down, we waterproof it first.`,
    features: [
      'Walk-in shower conversions and expansions',
      'Freestanding tub installations',
      'Custom tile work — floor, walls, and niches',
      'Heated floor systems',
      'Vanity replacement and custom millwork',
      'Lighting and mirror upgrades',
      'Exhaust fan and ventilation work',
      'ADA-accessible bathroom modifications',
    ],
    localNote: 'Available for single-bath homes and full master suite renovations throughout greater Waco.',
  },
  {
    id: 'whole-home',
    number: '03',
    title: 'Whole-Home Remodels',
    subtitle: 'Your biggest investment. Managed like it.',
    description: `Waco has thousands of beautiful homes from the 1960s, 70s, and 80s — homes with good bones, great neighborhoods, and interiors that haven't kept pace with the families living in them. Ridgeline specializes in bringing these homes into the present without losing what made them worth buying.

A whole-home remodel is the most complex project we do, and the one we take most seriously. We build a detailed scope before a single nail is pulled, we coordinate every trade, and we communicate daily. You'll never wonder what's happening with your house.`,
    features: [
      'Full project management from permit to punch list',
      'Structural changes and load-bearing wall removal',
      'Kitchen and all bathroom remodels',
      'Flooring throughout — tile, hardwood, LVP',
      'Interior door, trim, and millwork package',
      'Lighting plan and full electrical updates',
      'Paint — all surfaces, professionally applied',
      'Final deep-clean and walkthrough inspection',
    ],
    localNote: 'Specializing in Waco-area homes built between 1950–1990. We know what\'s behind the walls in McLennan County.',
  },
  {
    id: 'additions',
    number: '04',
    title: 'Room Additions',
    subtitle: "Expand your home. Stay in the neighborhood you love.",
    description: `Sometimes your home just needs more room. A sunroom, a master suite addition, an expanded great room, or a covered back porch can completely change how you live in your house — without the disruption of selling and buying.

We handle every phase: structural engineering, permits, foundation work, framing, MEP rough-in, insulation, drywall, and finish. The addition matches your existing home — same roofline pitch, matching exterior, continuous flooring.`,
    features: [
      'Master suite and bedroom additions',
      'Sunrooms and screened porches',
      'Great room and living area expansions',
      'Garage conversions and ADU builds',
      'Covered outdoor living spaces',
      'Full permitting and engineering coordination',
      'Structural and foundation work',
      'Exterior matching — siding, brick, trim',
    ],
    localNote: 'Permitted through the City of Waco and McLennan County. We handle all inspections.',
  },
]

export default function ServicesPage() {
  return (
    <main>
      {/* Page header */}
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
            Remodeling services built for Waco homeowners
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
            color: 'var(--color-muted)',
            maxWidth: '58ch',
            lineHeight: 1.7,
            marginBottom: '2rem',
          }}>
            We have been remodeling McLennan County homes since 2009 — kitchens, bathrooms, full home renovations, and additions. Every project gets a dedicated crew, a written schedule, and a contractor you can reach.
          </p>
          <a
            href={`tel:${PHONE}`}
            style={{
              display: 'inline-flex',
              background: 'var(--color-accent)',
              color: 'var(--color-bg)',
              padding: '0.875rem 1.875rem',
              borderRadius: '3px',
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

      {/* Service blocks */}
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
              {/* Left column — copy */}
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
                <div style={{ marginTop: '2rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a
                    href={`tel:${PHONE}`}
                    style={{
                      background: 'var(--color-accent)',
                      color: 'var(--color-bg)',
                      padding: '0.75rem 1.625rem',
                      borderRadius: '3px',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 700,
                      textDecoration: 'none',
                      fontSize: '0.9375rem',
                    }}
                  >
                    Get a Free Estimate
                  </a>
                  <Link
                    href="/projects"
                    style={{
                      border: '1px solid var(--color-border)',
                      color: 'var(--color-fg)',
                      padding: '0.75rem 1.625rem',
                      borderRadius: '3px',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 500,
                      textDecoration: 'none',
                      fontSize: '0.9375rem',
                    }}
                  >
                    View Projects
                  </Link>
                </div>
              </div>

              {/* Right column — features */}
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
                      <span style={{
                        color: 'var(--color-accent)',
                        fontSize: '0.5rem',
                        marginTop: '0.4rem',
                        flexShrink: 0,
                      }}>✦</span>
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
        headline="Not sure where to start?"
        subtext="Call us and describe what you're thinking. We'll tell you what's realistic, what it typically costs, and how long it takes. No pressure, just straight talk."
        phone={PHONE}
        ctaLabel="Call (254) 401-7820"
        secondaryLabel="Request an Online Estimate"
        secondaryHref="/contact"
      />
    </main>
  )
}
