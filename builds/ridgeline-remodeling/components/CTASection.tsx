type CTAProps = {
  headline: string
  subtext: string
  phone: string
  ctaLabel?: string
  secondaryLabel?: string
  secondaryHref?: string
  dark?: boolean
}

export default function CTASection({
  headline,
  subtext,
  phone,
  ctaLabel = 'Call for a Free Estimate',
  secondaryLabel,
  secondaryHref = '/contact',
  dark = true,
}: CTAProps) {
  const bg = dark ? 'var(--color-fg)' : 'var(--color-surface)'
  const textColor = dark ? 'var(--color-bg)' : 'var(--color-fg)'
  const mutedColor = dark ? 'rgba(26,25,23,0.6)' : 'var(--color-muted)'
  const borderColor = dark ? 'rgba(26,25,23,0.25)' : 'var(--color-border)'

  return (
    <section style={{
      padding: 'clamp(4rem, 10vw, 7rem) clamp(1rem, 5vw, 2.5rem)',
      background: bg,
      borderTop: '1px solid var(--color-border)',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <div style={{
          width: '40px',
          height: '2px',
          background: 'var(--color-accent)',
          margin: '0 auto 2rem',
        }} />
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.875rem, 4.5vw, 3rem)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          lineHeight: 1.08,
          marginBottom: '1.125rem',
          color: textColor,
        }}>
          {headline}
        </h2>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.9375rem, 2vw, 1.0625rem)',
          color: mutedColor,
          lineHeight: 1.7,
          marginBottom: '2.5rem',
          maxWidth: '42ch',
          margin: '0 auto 2.5rem',
        }}>
          {subtext}
        </p>
        <div style={{
          display: 'flex',
          gap: '0.875rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <a
            href={`tel:${phone}`}
            style={{
              background: 'var(--color-accent)',
              color: 'var(--color-bg)',
              padding: '0.9375rem 2.125rem',
              borderRadius: '3px',
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              textDecoration: 'none',
              fontSize: '1rem',
              letterSpacing: '0.01em',
              whiteSpace: 'nowrap',
            }}
          >
            {ctaLabel}
          </a>
          {secondaryLabel && (
            <a
              href={secondaryHref}
              style={{
                border: `1px solid ${borderColor}`,
                color: textColor,
                padding: '0.9375rem 2.125rem',
                borderRadius: '3px',
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                textDecoration: 'none',
                fontSize: '1rem',
                whiteSpace: 'nowrap',
              }}
            >
              {secondaryLabel}
            </a>
          )}
        </div>
        <p style={{
          marginTop: '1.75rem',
          fontFamily: 'var(--font-body)',
          fontSize: '0.8125rem',
          color: mutedColor,
          letterSpacing: '0.03em',
        }}>
          Waco & surrounding areas · Licensed & Insured · No obligation
        </p>
      </div>
    </section>
  )
}
