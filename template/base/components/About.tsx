type AboutProps = {
  name: string
  city: string
  years?: number
  story?: string
  values?: string[]
  certifications?: string[]
}

export default function About({
  name,
  city,
  years,
  story,
  values = [],
  certifications = [],
}: AboutProps) {
  return (
    <section style={{ padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 2rem)' }}>
      <div style={{ maxWidth: '720px' }}>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          lineHeight: 1.1, marginBottom: '1.5rem',
        }}>
          About {name}
        </h1>

        {years && (
          <p style={{
            color: 'var(--color-accent)', fontFamily: 'var(--font-body)',
            fontWeight: 700, fontSize: '0.8125rem', marginBottom: '1.25rem',
            textTransform: 'uppercase', letterSpacing: '0.08em',
          }}>
            Proudly serving {city} for {years}+ years
          </p>
        )}

        {story && (
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
            lineHeight: 1.8, color: 'var(--color-fg)', opacity: 0.85,
            marginBottom: '2.5rem',
          }}>
            {story}
          </p>
        )}

        {values.length > 0 && (
          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(1.25rem, 3vw, 1.625rem)',
              marginBottom: '1.25rem',
            }}>
              What We Stand For
            </h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {values.map((v, i) => (
                <li key={i} style={{
                  fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.6,
                  paddingLeft: '1.5rem', position: 'relative',
                }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--color-accent)', fontWeight: 700 }}>→</span>
                  {v}
                </li>
              ))}
            </ul>
          </div>
        )}

        {certifications.length > 0 && (
          <div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(1.25rem, 3vw, 1.625rem)',
              marginBottom: '1.25rem',
            }}>
              Licensed & Certified
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
              {certifications.map((c, i) => (
                <span key={i} style={{
                  padding: '0.4rem 0.875rem',
                  border: '1px solid var(--color-accent)', borderRadius: '999px',
                  fontFamily: 'var(--font-body)', fontSize: '0.8125rem',
                  color: 'var(--color-accent)', fontWeight: 600,
                }}>
                  ✓ {c}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
