import Link from 'next/link'

type Service = { name: string; description: string; icon?: string }

export default function ServicesPreview({
  services = [],
  headline = 'What We Do',
  city = '',
}: {
  services?: Service[]
  headline?: string
  city?: string
}) {
  if (!services.length) return null
  return (
    <section style={{ padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 2rem)' }}>
      <h2 style={{
        fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
        marginBottom: '0.5rem', lineHeight: 1.1,
      }}>
        {headline}
      </h2>
      {city && (
        <p style={{
          color: 'var(--color-muted)', marginBottom: '2.5rem',
          fontFamily: 'var(--font-body)', fontSize: '1rem',
        }}>
          Trusted in {city} and surrounding areas.
        </p>
      )}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
        gap: '1.25rem', marginBottom: '2.5rem',
      }}>
        {services.slice(0, 6).map((s, i) => (
          <div key={i} style={{
            padding: 'clamp(1.25rem, 3vw, 1.75rem)',
            border: '1px solid color-mix(in srgb, var(--color-muted) 25%, transparent)',
            borderRadius: '8px',
            background: 'color-mix(in srgb, var(--color-fg) 3%, var(--color-bg))',
          }}>
            {s.icon && (
              <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{s.icon}</div>
            )}
            <h3 style={{
              fontFamily: 'var(--font-display)', fontSize: '1.125rem',
              marginBottom: '0.5rem', color: 'var(--color-fg)',
            }}>
              {s.name}
            </h3>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '0.9rem',
              color: 'var(--color-muted)', lineHeight: 1.65,
            }}>
              {s.description}
            </p>
          </div>
        ))}
      </div>
      <Link href="/services" style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
        color: 'var(--color-accent)', fontFamily: 'var(--font-body)',
        fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem',
      }}>
        View all services →
      </Link>
    </section>
  )
}
