import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: 'Bosque Boulevard Kitchen',
    category: 'Kitchen Remodel',
    detail: 'Custom walnut cabinetry · Calacatta quartz · Integrated lighting',
    gradient: 'linear-gradient(135deg, #2a2620 0%, #3d3628 40%, #2c2418 100%)',
    accentLine: 'rgba(201,168,76,0.35)',
  },
  {
    id: 2,
    title: 'Hewitt Master Suite',
    category: 'Bathroom Renovation',
    detail: 'Marble tile · Walk-in shower · Heated floors',
    gradient: 'linear-gradient(135deg, #1e2028 0%, #272830 50%, #1a1c24 100%)',
    accentLine: 'rgba(201,168,76,0.25)',
  },
  {
    id: 3,
    title: 'Woodway Whole-Home',
    category: 'Full Remodel',
    detail: '2,800 sq ft · 6-month project · Full interior transformation',
    gradient: 'linear-gradient(135deg, #201e1a 0%, #302c24 45%, #1e1c18 100%)',
    accentLine: 'rgba(201,168,76,0.3)',
  },
]

export default function ProjectsPreview() {
  return (
    <section style={{
      padding: 'clamp(4rem, 10vw, 7rem) clamp(1rem, 5vw, 2.5rem)',
      borderTop: '1px solid var(--color-border)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '1.5rem',
          marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
        }}>
          <div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              marginBottom: '0.875rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'var(--color-accent)' }} />
              Recent Work
            </p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              fontWeight: 700,
              letterSpacing: '-0.015em',
              lineHeight: 1.1,
            }}>
              Projects we&rsquo;re proud to put our name on
            </h2>
          </div>
          <Link
            href="/projects"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: 'var(--color-accent)',
              textDecoration: 'none',
              borderBottom: '1px solid var(--color-accent)',
              paddingBottom: '2px',
              whiteSpace: 'nowrap',
            }}
          >
            Full Gallery →
          </Link>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: 'clamp(1rem, 2vw, 1.5rem)',
        }}>
          {projects.map(p => (
            <Link
              key={p.id}
              href="/projects"
              style={{ textDecoration: 'none', display: 'block' }}
            >
              {/* Project image placeholder — premium gradient stand-in */}
              <div style={{
                aspectRatio: '4/3',
                background: p.gradient,
                borderRadius: '3px',
                marginBottom: '1.125rem',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid var(--color-border)',
              }}>
                {/* Brass diagonal accent */}
                <div aria-hidden style={{
                  position: 'absolute',
                  top: 0, right: 0,
                  width: '40%', height: '100%',
                  background: `linear-gradient(to bottom-left, ${p.accentLine}, transparent)`,
                }} />
                {/* Category label */}
                <div style={{
                  position: 'absolute',
                  top: '1rem', left: '1rem',
                  background: 'rgba(26,25,23,0.75)',
                  backdropFilter: 'blur(4px)',
                  border: '1px solid var(--color-border)',
                  padding: '0.3125rem 0.75rem',
                  borderRadius: '2px',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.625rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-accent)',
                  }}>
                    {p.category}
                  </span>
                </div>
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1rem, 2vw, 1.1875rem)',
                fontWeight: 600,
                letterSpacing: '-0.01em',
                color: 'var(--color-fg)',
                marginBottom: '0.4rem',
                lineHeight: 1.2,
              }}>
                {p.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                color: 'var(--color-muted)',
                lineHeight: 1.5,
              }}>
                {p.detail}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
