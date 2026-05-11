// Overwritten per business. Adjust emergency, city, and aura-specific styling to match design system.
type HeroProps = {
  name: string
  tagline: string
  phone: string
  rating?: number
  reviewCount?: number
  city?: string
  emergency?: boolean
}

function Stars({ n }: { n: number }) {
  return (
    <span style={{ color: 'var(--color-accent)', fontSize: '0.9rem' }}>
      {'★'.repeat(Math.min(5, Math.max(0, Math.round(n))))}
    </span>
  )
}

export default function Hero({
  name,
  tagline,
  phone,
  rating = 5,
  reviewCount = 0,
  city = '',
  emergency = false,
}: HeroProps) {
  return (
    <section style={{
      minHeight: 'clamp(480px, 65svh, 75svh)',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 4vw, 2rem)',
    }}>
      {emergency && (
        <p style={{
          color: 'var(--color-accent)', fontFamily: 'var(--font-body)',
          fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em',
          textTransform: 'uppercase', marginBottom: '1rem',
        }}>
          ⚡ 24/7 Emergency Service Available
        </p>
      )}

      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
        lineHeight: 1.05, maxWidth: '16ch', marginBottom: '1.25rem',
      }}>
        {name}
      </h1>

      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
        color: 'var(--color-muted)', maxWidth: '52ch',
        lineHeight: 1.65, marginBottom: '2rem',
      }}>
        {tagline}{city ? ` Serving ${city} and surrounding areas.` : ''}
      </p>

      <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        <a href={`tel:${phone}`} style={{
          background: 'var(--color-accent)', color: 'var(--color-bg)',
          padding: '0.875rem 1.75rem', borderRadius: '6px',
          fontFamily: 'var(--font-body)', fontWeight: 700, textDecoration: 'none',
          fontSize: 'clamp(0.9rem, 2vw, 1rem)',
        }}>
          Call {phone}
        </a>
        <a href="/contact" style={{
          border: '2px solid var(--color-fg)', color: 'var(--color-fg)',
          padding: '0.875rem 1.75rem', borderRadius: '6px',
          fontFamily: 'var(--font-body)', fontWeight: 600, textDecoration: 'none',
          fontSize: 'clamp(0.9rem, 2vw, 1rem)',
        }}>
          Free Estimate
        </a>
      </div>

      {reviewCount > 0 && (
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--color-muted)' }}>
          <Stars n={rating} /> {rating.toFixed(1)} from {reviewCount} reviews
        </p>
      )}
    </section>
  )
}
