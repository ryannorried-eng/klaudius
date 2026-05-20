// Overwritten per business. Match headline/subheadline/badge tone to the inferred aura.
// Replace all PLACEHOLDER values with real data from business.json before deploy.
import Link from 'next/link'

type HeroProps = {
  headline: string       // Aura-toned tagline: "Built to last. Done right." / "Designed for life on the water."
  subheadline: string    // 1–2 sentences with business name, city, and trust language
  phone: string
  badge?: string         // e.g. "Serving Long Beach Since 2011" / "Licensed & Insured"
  primaryCTA?: string    // Defaults to "Call for a Free Estimate"
  secondaryCTA?: string  // e.g. "View Our Work"
  secondaryHref?: string // Defaults to "/projects"
  emergency?: boolean    // Set true for 24/7 businesses
  stats?: { value: string; label: string }[]  // e.g. [{value:'10+', label:'Years in Business'}]
}

export default function Hero({
  headline,
  subheadline,
  phone,
  badge,
  primaryCTA = 'Call for a Free Estimate',
  secondaryCTA = 'View Our Work',
  secondaryHref = '/projects',
  emergency = false,
  stats = [],
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
      {/* Subtle accent gradient — color driven by CSS var so it adapts per design system */}
      <div aria-hidden style={{
        position: 'absolute', top: '-10%', left: '-5%',
        width: '45%', height: '60%',
        background: 'radial-gradient(ellipse at 30% 30%, color-mix(in srgb, var(--color-accent) 8%, transparent) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative' }}>
        {emergency && (
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.6875rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            marginBottom: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}>
            ⚡ 24/7 Emergency Service Available
          </p>
        )}

        {badge && !emergency && (
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
          marginBottom: stats.length ? '3rem' : '0',
        }}>
          <a
            href={`tel:${phone}`}
            style={{
              background: 'var(--color-accent)',
              color: 'var(--color-bg)',
              padding: '0.9375rem 2rem',
              borderRadius: '4px',
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
          {secondaryCTA && (
            <Link
              href={secondaryHref}
              style={{
                border: '1px solid color-mix(in srgb, var(--color-fg) 25%, transparent)',
                color: 'var(--color-fg)',
                padding: '0.9375rem 2rem',
                borderRadius: '4px',
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                textDecoration: 'none',
                fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                whiteSpace: 'nowrap',
              }}
            >
              {secondaryCTA}
            </Link>
          )}
        </div>

        {stats.length > 0 && (
          <div style={{
            display: 'flex',
            gap: 'clamp(1.5rem, 4vw, 2.5rem)',
            flexWrap: 'wrap',
          }}>
            {stats.map(stat => (
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
        )}
      </div>
    </section>
  )
}
