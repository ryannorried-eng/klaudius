// ServicesPreview — shown on home page. Max 6 services with numbered grid cards.
// Links to /services for full descriptions.
import Link from 'next/link'

type Service = {
  name: string
  description: string
  icon?: string   // emoji icon (optional)
  href?: string   // anchor on /services page, e.g. "/services#plumbing"
}

export default function ServicesPreview({
  services = [],
  headline = 'What We Do',
  sectionLabel = 'Our Services',
  city = '',
}: {
  services?: Service[]
  headline?: string
  sectionLabel?: string
  city?: string
}) {
  if (!services.length) return null

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
              maxWidth: '22ch',
            }}>
              {headline}
              {city ? ` in ${city}` : ''}
            </h2>
          </div>
          <Link
            href="/services"
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
            All Services →
          </Link>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
          gap: '1px',
          background: 'var(--color-border)',
          border: '1px solid var(--color-border)',
          borderRadius: '4px',
          overflow: 'hidden',
        }}>
          {services.slice(0, 6).map((s, i) => (
            <Link
              key={i}
              href={s.href || '/services'}
              style={{
                background: 'var(--color-bg)',
                padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                textDecoration: 'none',
                display: 'block',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                color: 'var(--color-accent)',
                display: 'block',
                marginBottom: s.icon ? '0.5rem' : '1rem',
              }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              {s.icon && (
                <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{s.icon}</div>
              )}
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
                fontWeight: 700,
                letterSpacing: '-0.01em',
                lineHeight: 1.2,
                marginBottom: '0.875rem',
                color: 'var(--color-fg)',
              }}>
                {s.name}
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                color: 'var(--color-muted)',
                lineHeight: 1.65,
              }}>
                {s.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
