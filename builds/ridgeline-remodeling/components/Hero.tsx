import Link from 'next/link'

type HeroProps = {
  headline: string
  subheadline: string
  phone: string
  badge?: string
  primaryCTA?: string
  secondaryCTA?: string
  secondaryHref?: string
}

export default function Hero({
  headline,
  subheadline,
  phone,
  badge,
  primaryCTA = 'Call for a Free Estimate',
  secondaryCTA = 'View Our Work',
  secondaryHref = '/projects',
}: HeroProps) {
  return (
    <section style={{
      minHeight: 'clamp(520px, 70svh, 82svh)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: 'clamp(3.5rem, 10vw, 6rem) clamp(1rem, 5vw, 2.5rem)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle brass gradient top-left */}
      <div aria-hidden style={{
        position: 'absolute', top: '-10%', left: '-5%',
        width: '45%', height: '60%',
        background: 'radial-gradient(ellipse at 30% 30%, rgba(201,168,76,0.06) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative' }}>
        {badge && (
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.6875rem',
            fontWeight: 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            marginBottom: '1.375rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}>
            <span style={{
              display: 'inline-block', width: '24px', height: '1px',
              background: 'var(--color-accent)',
            }} />
            {badge}
          </p>
        )}

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.75rem, 8vw, 5.75rem)',
          fontWeight: 700,
          lineHeight: 1.04,
          letterSpacing: '-0.02em',
          maxWidth: '14ch',
          marginBottom: '1.5rem',
          color: 'var(--color-fg)',
        }}>
          {headline}
        </h1>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(1rem, 2.5vw, 1.1875rem)',
          color: 'var(--color-muted)',
          maxWidth: '52ch',
          lineHeight: 1.7,
          marginBottom: '2.5rem',
          fontWeight: 400,
        }}>
          {subheadline}
        </p>

        <div style={{
          display: 'flex',
          gap: '0.875rem',
          flexWrap: 'wrap',
          alignItems: 'center',
          marginBottom: '3rem',
        }}>
          <a
            href={`tel:${phone}`}
            style={{
              background: 'var(--color-accent)',
              color: 'var(--color-bg)',
              padding: '0.9375rem 2rem',
              borderRadius: '3px',
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              textDecoration: 'none',
              fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              letterSpacing: '0.01em',
              whiteSpace: 'nowrap',
            }}
          >
            {primaryCTA}
          </a>
          <Link
            href={secondaryHref}
            style={{
              border: '1px solid rgba(245, 240, 232, 0.25)',
              color: 'var(--color-fg)',
              padding: '0.9375rem 2rem',
              borderRadius: '3px',
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              textDecoration: 'none',
              fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              whiteSpace: 'nowrap',
            }}
          >
            {secondaryCTA}
          </Link>
        </div>

        <div style={{
          display: 'flex',
          gap: '2.5rem',
          flexWrap: 'wrap',
        }}>
          {[
            { value: '15+', label: 'Years in Waco' },
            { value: '400+', label: 'Projects Completed' },
            { value: '5.0', label: 'Google Rating' },
          ].map(stat => (
            <div key={stat.label}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                fontWeight: 700,
                color: 'var(--color-accent)',
                lineHeight: 1,
                marginBottom: '0.25rem',
              }}>
                {stat.value}
              </div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                color: 'var(--color-muted)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                fontWeight: 500,
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
