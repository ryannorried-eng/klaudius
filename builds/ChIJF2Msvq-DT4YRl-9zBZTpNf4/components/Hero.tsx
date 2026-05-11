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
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Hazard-tape accent stripe */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '6px',
        background: 'repeating-linear-gradient(90deg, var(--color-accent) 0px, var(--color-accent) 24px, var(--color-bg) 24px, var(--color-bg) 32px)',
      }} />

      <div style={{ maxWidth: '900px' }}>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.75rem',
          letterSpacing: '0.2em',
          color: 'var(--color-accent)',
          textTransform: 'uppercase',
          marginBottom: '1.5rem',
        }}>
          Waco, TX · Open 24 Hours
        </p>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.5rem, 8vw, 6rem)',
          lineHeight: 1.05,
          fontWeight: 700,
        }}>
          {name}
        </h1>

        <p style={{
          marginTop: '1.5rem',
          fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
          color: 'var(--color-fg)',
          opacity: 0.75,
          maxWidth: '560px',
          lineHeight: 1.5,
        }}>
          {tagline}
        </p>

        <div style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <a
            href={`tel:${phone}`}
            style={{
              display: 'inline-block',
              background: 'var(--color-accent)',
              color: '#1a1a18',
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              fontSize: '1.1rem',
              padding: '0.9rem 2rem',
              letterSpacing: '0.05em',
            }}
          >
            {phone}
          </a>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--color-muted)' }}>
            ★ {rating} · {reviewCount} reviews
          </p>
        </div>
      </div>

      {/* Bottom stripe */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'var(--color-muted)',
        opacity: 0.4,
      }} />
    </section>
  )
}
