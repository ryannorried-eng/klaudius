// ProjectsPreview — shown on home page when photos exist.
// Shows real photos if available, or gradient placeholders for brand-new builds.
// Hide this component if photos array is empty (< 3 photos).
import Link from 'next/link'

type Project = {
  title: string
  category: string
  detail?: string
  // Use src for real photo path, or gradient/accentLine for placeholder visuals
  src?: string
  gradient?: string
  accentLine?: string
}

const defaultGradients = [
  { gradient: 'linear-gradient(135deg, #2a2620 0%, #3d3628 40%, #2c2418 100%)', accentLine: 'rgba(var(--accent-rgb,201,168,76),0.35)' },
  { gradient: 'linear-gradient(135deg, #1e2028 0%, #272830 50%, #1a1c24 100%)', accentLine: 'rgba(var(--accent-rgb,201,168,76),0.25)' },
  { gradient: 'linear-gradient(135deg, #201e1a 0%, #302c24 45%, #1e1c18 100%)', accentLine: 'rgba(var(--accent-rgb,201,168,76),0.30)' },
]

export default function ProjectsPreview({
  projects = [],
  photos = [],
  headline = "Projects we're proud to put our name on",
  sectionLabel = 'Recent Work',
}: {
  projects?: Project[]
  photos?: string[]        // real photo paths from public/images/
  headline?: string
  sectionLabel?: string
}) {
  // Build display items from real photos first, then fall back to projects array
  const displayItems = photos.length >= 3
    ? photos.slice(0, 3).map((src, i) => ({
        title: `Project ${i + 1}`,
        category: 'Recent Work',
        src,
        gradient: defaultGradients[i % defaultGradients.length].gradient,
        accentLine: defaultGradients[i % defaultGradients.length].accentLine,
      }))
    : projects.slice(0, 3)

  if (!displayItems.length) return null

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
              {sectionLabel}
            </p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              fontWeight: 700,
              letterSpacing: '-0.015em',
              lineHeight: 1.1,
            }}>
              {headline}
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
          {displayItems.map((p, i) => (
            <Link
              key={i}
              href="/projects"
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <div style={{
                aspectRatio: '4/3',
                borderRadius: '4px',
                marginBottom: '1.125rem',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid var(--color-border)',
                background: p.gradient || 'var(--color-surface)',
              }}>
                {p.src ? (
                  <img
                    src={p.src}
                    alt={p.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                ) : (
                  <>
                    {/* Accent diagonal overlay for gradient placeholders */}
                    <div aria-hidden style={{
                      position: 'absolute', top: 0, right: 0,
                      width: '40%', height: '100%',
                      background: `linear-gradient(to bottom-left, ${p.accentLine || 'transparent'}, transparent)`,
                    }} />
                    {/* Category badge */}
                    <div style={{
                      position: 'absolute', top: '1rem', left: '1rem',
                      background: 'rgba(0,0,0,0.6)',
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
                  </>
                )}
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
              {p.detail && (
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8125rem',
                  color: 'var(--color-muted)',
                  lineHeight: 1.5,
                }}>
                  {p.detail}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
