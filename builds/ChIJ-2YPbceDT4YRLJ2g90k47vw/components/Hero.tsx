type HeroProps = {
  name: string
  tagline: string
  phone: string
  rating: number
  reviewCount: number
}

export default function Hero({ name, tagline, phone, rating, reviewCount }: HeroProps) {
  return (
    <section style={{
      minHeight: '100svh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: 'clamp(2rem, 6vw, 5rem)',
      borderBottom: '1px solid var(--color-muted)',
    }}>
      <div style={{ maxWidth: '720px' }}>
        <div style={{
          display: 'inline-block',
          background: 'var(--color-accent)',
          color: '#fff',
          fontSize: '0.7rem',
          fontWeight: 500,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          padding: '0.35rem 0.8rem',
          marginBottom: '2rem',
        }}>
          Open 24 Hours · Waco &amp; Surrounding Areas
        </div>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.8rem, 9vw, 5.5rem)',
          lineHeight: 1.05,
          fontWeight: 700,
        }}>
          {name}
        </h1>

        <p style={{
          marginTop: '1.5rem',
          fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
          lineHeight: 1.6,
          color: 'var(--color-fg)',
          opacity: 0.8,
          maxWidth: '500px',
        }}>
          {tagline}
        </p>

        <div style={{ marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
          <a
            href={`tel:${phone}`}
            style={{
              display: 'inline-block',
              border: '2px solid var(--color-accent)',
              color: 'var(--color-accent)',
              fontWeight: 500,
              fontSize: '1.1rem',
              padding: '0.8rem 1.8rem',
              letterSpacing: '0.03em',
            }}
          >
            {phone}
          </a>
          <span style={{ fontSize: '0.85rem', color: 'var(--color-fg)', opacity: 0.5 }}>
            ★ {rating} · {reviewCount} Google reviews
          </span>
        </div>
      </div>
    </section>
  )
}
