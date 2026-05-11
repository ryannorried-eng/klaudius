// Used on the /services page. Overwritten per business with real service descriptions.
type Service = {
  name: string
  description: string
  features?: string[]
}

type ServicesProps = {
  services?: Service[]
  businessName?: string
  city?: string
  phone?: string
}

export default function Services({
  services = [],
  businessName = '',
  city = '',
  phone = '',
}: ServicesProps) {
  return (
    <section style={{ padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 4vw, 2rem)' }}>
      <h1 style={{
        fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)',
        marginBottom: '0.75rem', lineHeight: 1.1,
      }}>
        Our Services
      </h1>
      {city && (
        <p style={{
          color: 'var(--color-muted)', fontFamily: 'var(--font-body)',
          marginBottom: '3rem', fontSize: '1rem',
        }}>
          Professional services in {city} and the surrounding region.
        </p>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {services.map((s, i) => (
          <article key={i} style={{
            padding: 'clamp(1.5rem, 4vw, 2.5rem)',
            border: '1px solid color-mix(in srgb, var(--color-muted) 25%, transparent)',
            borderRadius: '8px',
          }}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(1.25rem, 3vw, 1.875rem)',
              marginBottom: '0.75rem', color: 'var(--color-fg)',
            }}>
              {s.name}
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '1rem',
              lineHeight: 1.75, color: 'var(--color-fg)', opacity: 0.8,
              marginBottom: s.features?.length ? '1.25rem' : 0,
            }}>
              {s.description}
            </p>
            {s.features && s.features.length > 0 && (
              <ul style={{
                listStyle: 'none',
                display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '0.5rem',
              }}>
                {s.features.map((f, j) => (
                  <li key={j} style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.875rem',
                    color: 'var(--color-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem',
                  }}>
                    <span style={{ color: 'var(--color-accent)', fontWeight: 700 }}>✓</span> {f}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>

      {phone && (
        <div style={{
          marginTop: '3rem', padding: 'clamp(1.5rem, 4vw, 2.5rem)',
          background: 'var(--color-accent)', borderRadius: '8px', textAlign: 'center',
        }}>
          <p style={{
            fontFamily: 'var(--font-body)', fontWeight: 700,
            color: 'var(--color-bg)', fontSize: '1.125rem', marginBottom: '0.75rem',
          }}>
            Questions? Call us for a free estimate.
          </p>
          <a href={`tel:${phone}`} style={{
            color: 'var(--color-bg)', fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 700, textDecoration: 'none',
          }}>
            {phone}
          </a>
        </div>
      )}
    </section>
  )
}
