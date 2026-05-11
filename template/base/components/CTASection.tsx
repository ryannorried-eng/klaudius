type CTASectionProps = {
  headline?: string
  subtext?: string
  phone: string
  ctaText?: string
  secondaryCTA?: string
  secondaryHref?: string
}

export default function CTASection({
  headline = 'Ready to Get Started?',
  subtext = 'Contact us today for a free estimate.',
  phone,
  ctaText = 'Call Now',
  secondaryCTA,
  secondaryHref = '/contact',
}: CTASectionProps) {
  return (
    <section style={{
      padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 4vw, 2rem)',
      background: 'var(--color-fg)', color: 'var(--color-bg)',
      textAlign: 'center',
    }}>
      <h2 style={{
        fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
        marginBottom: '0.75rem', lineHeight: 1.1,
      }}>
        {headline}
      </h2>
      <p style={{
        fontFamily: 'var(--font-body)', fontSize: '1rem',
        opacity: 0.7, maxWidth: '480px', margin: '0 auto 2rem',
        lineHeight: 1.6,
      }}>
        {subtext}
      </p>
      <div style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href={`tel:${phone}`} style={{
          background: 'var(--color-accent)', color: 'var(--color-bg)',
          padding: '0.875rem 1.875rem', borderRadius: '6px',
          fontFamily: 'var(--font-body)', fontWeight: 700, textDecoration: 'none',
          fontSize: '1rem',
        }}>
          {ctaText} — {phone}
        </a>
        {secondaryCTA && (
          <a href={secondaryHref} style={{
            border: '2px solid rgba(255,255,255,0.35)', color: 'var(--color-bg)',
            padding: '0.875rem 1.875rem', borderRadius: '6px',
            fontFamily: 'var(--font-body)', fontWeight: 600, textDecoration: 'none',
            fontSize: '1rem',
          }}>
            {secondaryCTA}
          </a>
        )}
      </div>
    </section>
  )
}
