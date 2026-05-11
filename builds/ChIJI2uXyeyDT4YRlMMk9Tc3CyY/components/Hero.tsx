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
      display: 'grid',
      gridTemplateColumns: '1fr',
      alignItems: 'center',
      padding: 'clamp(2rem, 6vw, 5rem)',
      position: 'relative',
    }}>
      {/* Vertical rule accent */}
      <div style={{
        position: 'absolute',
        left: 'clamp(1rem, 3vw, 2.5rem)',
        top: '15%',
        bottom: '15%',
        width: '2px',
        background: 'var(--color-accent)',
        opacity: 0.6,
      }} />

      <div style={{ paddingLeft: 'clamp(2rem, 5vw, 4rem)' }}>
        <p style={{
          fontSize: '0.7rem',
          letterSpacing: '0.25em',
          color: 'var(--color-accent)',
          textTransform: 'uppercase',
          marginBottom: '2rem',
          fontWeight: 300,
        }}>
          Waco, Texas · Since Day One · Open 24 Hours
        </p>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.8rem, 9vw, 7rem)',
          lineHeight: 1.0,
          fontStyle: 'italic',
          fontWeight: 400,
          letterSpacing: '-0.02em',
        }}>
          {name}
        </h1>

        <p style={{
          marginTop: '2rem',
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          fontWeight: 300,
          color: 'var(--color-fg)',
          opacity: 0.7,
          maxWidth: '480px',
          lineHeight: 1.6,
        }}>
          {tagline}
        </p>

        <div style={{ marginTop: '3rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'baseline' }}>
          <a
            href={`tel:${phone}`}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
              color: 'var(--color-accent)',
              fontStyle: 'italic',
              borderBottom: '1px solid var(--color-accent)',
              paddingBottom: '0.2rem',
            }}
          >
            {phone}
          </a>
          <span style={{ fontSize: '0.8rem', color: 'var(--color-fg)', opacity: 0.5, letterSpacing: '0.1em' }}>
            ★ {rating} from {reviewCount} reviews
          </span>
        </div>
      </div>
    </section>
  )
}
