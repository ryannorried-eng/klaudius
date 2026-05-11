import type { Metadata } from 'next'
import CTASection from '../../components/CTASection'

export const metadata: Metadata = {
  title: 'Project Gallery | Ridgeline Remodeling · Waco, TX',
  description: 'Browse kitchen remodels, bathroom renovations, and whole-home transformations by Ridgeline Remodeling in Waco, TX. 15 years of craftsmanship.',
}

const PHONE = '(254) 401-7820'

const projects = [
  {
    id: 1,
    title: 'Bosque Blvd Kitchen',
    location: 'Waco, TX',
    year: '2024',
    category: 'Kitchen Remodel',
    description: 'Complete kitchen transformation — custom walnut cabinetry, Calacatta quartz counters, new layout with island, and full electrical and plumbing reconfiguration.',
    gradient: 'linear-gradient(150deg, #2d2820 0%, #3e3425 45%, #28221a 100%)',
    accent: 'rgba(201,168,76,0.3)',
    span: 'wide',
  },
  {
    id: 2,
    title: 'Hewitt Master Bath',
    location: 'Hewitt, TX',
    year: '2024',
    category: 'Bathroom Renovation',
    description: 'Master suite bath renovation with Italian marble tile, freestanding tub, walk-in shower with bench and three-head system, custom vanity.',
    gradient: 'linear-gradient(135deg, #1e2028 0%, #282a34 55%, #1a1c24 100%)',
    accent: 'rgba(201,168,76,0.2)',
    span: 'normal',
  },
  {
    id: 3,
    title: 'Woodway Whole-Home',
    location: 'Woodway, TX',
    year: '2023',
    category: 'Full Remodel',
    description: '2,800 sq ft full interior renovation. Kitchen, 3 bathrooms, all flooring, doors, trim, and paint. Six-month project completed on schedule.',
    gradient: 'linear-gradient(145deg, #201e1a 0%, #302c22 50%, #1e1c16 100%)',
    accent: 'rgba(201,168,76,0.25)',
    span: 'normal',
  },
  {
    id: 4,
    title: 'Robinson Kitchen & Dining',
    location: 'Robinson, TX',
    year: '2023',
    category: 'Kitchen Remodel',
    description: 'Opened up the kitchen-dining wall, custom white oak cabinets, leathered granite, new lighting plan throughout.',
    gradient: 'linear-gradient(160deg, #252218 0%, #342e20 50%, #221e14 100%)',
    accent: 'rgba(201,168,76,0.22)',
    span: 'normal',
  },
  {
    id: 5,
    title: 'Waco Sunroom Addition',
    location: 'Waco, TX',
    year: '2023',
    category: 'Room Addition',
    description: '480 sq ft climate-controlled sunroom addition with vaulted ceiling, exposed beam, and full exterior matching.',
    gradient: 'linear-gradient(130deg, #1c2018 0%, #262c1e 55%, #181c14 100%)',
    accent: 'rgba(201,168,76,0.28)',
    span: 'wide',
  },
  {
    id: 6,
    title: 'Lacy Lakeview Bathroom',
    location: 'Lacy-Lakeview, TX',
    year: '2022',
    category: 'Bathroom Renovation',
    description: 'Guest bath and powder room redesign. New tile, vanities, fixtures, and recessed lighting throughout.',
    gradient: 'linear-gradient(135deg, #1e1e28 0%, #282830 55%, #1a1a22 100%)',
    accent: 'rgba(201,168,76,0.18)',
    span: 'normal',
  },
  {
    id: 7,
    title: 'Hewitt Master Suite Addition',
    location: 'Hewitt, TX',
    year: '2022',
    category: 'Room Addition',
    description: '620 sq ft master suite addition — bedroom, walk-in closet, full bath. Permitted through McLennan County.',
    gradient: 'linear-gradient(150deg, #22201a 0%, #302e24 50%, #1e1c16 100%)',
    accent: 'rgba(201,168,76,0.24)',
    span: 'normal',
  },
  {
    id: 8,
    title: 'Waco Open-Concept Remodel',
    location: 'Waco, TX',
    year: '2022',
    category: 'Full Remodel',
    description: 'Structural wall removal to create open kitchen-living floor plan. New kitchen, refinished floors, fresh paint and trim throughout 1,900 sq ft.',
    gradient: 'linear-gradient(145deg, #201c18 0%, #2e2820 50%, #1c1814 100%)',
    accent: 'rgba(201,168,76,0.2)',
    span: 'normal',
  },
]

export default function ProjectsPage() {
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
            Our Work
          </p>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            maxWidth: '22ch',
            marginBottom: '1.25rem',
          }}>
            Projects we&rsquo;re proud to put our name on
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
            color: 'var(--color-muted)',
            maxWidth: '52ch',
            lineHeight: 1.7,
          }}>
            Waco homes, Woodway kitchens, Hewitt master suites. Fifteen years of work across McLennan County, and we&rsquo;re still the contractor our clients recommend to their neighbors.
          </p>
        </div>
      </section>

      {/* Project grid */}
      <section style={{
        padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 5vw, 2.5rem)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
            gap: 'clamp(1.25rem, 2.5vw, 2rem)',
          }}>
            {projects.map(p => (
              <article
                key={p.id}
                style={{
                  gridColumn: p.span === 'wide' ? 'span 2' : 'span 1',
                  minWidth: 0,
                }}
              >
                {/* Project visual */}
                <div style={{
                  aspectRatio: p.span === 'wide' ? '16/7' : '4/3',
                  background: p.gradient,
                  borderRadius: '3px',
                  marginBottom: '1.25rem',
                  position: 'relative',
                  overflow: 'hidden',
                  border: '1px solid var(--color-border)',
                }}>
                  {/* Brass diagonal accent */}
                  <div aria-hidden style={{
                    position: 'absolute',
                    top: 0, right: 0,
                    width: '35%', height: '100%',
                    background: `linear-gradient(to bottom-left, ${p.accent}, transparent 70%)`,
                  }} />
                  {/* Bottom left category + year badge */}
                  <div style={{
                    position: 'absolute',
                    bottom: '1rem', left: '1rem',
                    display: 'flex', gap: '0.5rem', alignItems: 'center',
                  }}>
                    <span style={{
                      background: 'rgba(26,25,23,0.82)',
                      backdropFilter: 'blur(4px)',
                      border: '1px solid var(--color-border)',
                      padding: '0.3125rem 0.75rem',
                      borderRadius: '2px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.625rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--color-accent)',
                    }}>
                      {p.category}
                    </span>
                    <span style={{
                      background: 'rgba(26,25,23,0.6)',
                      padding: '0.3125rem 0.625rem',
                      borderRadius: '2px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.625rem',
                      fontWeight: 500,
                      color: 'var(--color-muted)',
                    }}>
                      {p.year}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.5rem' }}>
                  <h2 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.0625rem, 2.2vw, 1.25rem)',
                    fontWeight: 600,
                    letterSpacing: '-0.01em',
                    lineHeight: 1.2,
                    color: 'var(--color-fg)',
                  }}>
                    {p.title}
                  </h2>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    color: 'var(--color-muted)',
                    whiteSpace: 'nowrap',
                    marginTop: '0.125rem',
                  }}>
                    {p.location}
                  </span>
                </div>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  color: 'var(--color-muted)',
                  lineHeight: 1.65,
                }}>
                  {p.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Like what you see?"
        subtext="Every project on this page started with a phone call and a free walk-through. Yours can too."
        phone={PHONE}
        ctaLabel="Call (254) 401-7820"
        secondaryLabel="Request an Estimate"
        secondaryHref="/contact"
      />
    </main>
  )
}
