// CTASection — bottom-of-page call-to-action. Appears on every page.
// Use ctaLabel and secondaryLabel (or ctaText/secondaryCTA for backward compat).

type CTASectionProps = {
  headline?: string
  subtext?: string
  phone: string
  ctaLabel?: string      // Primary button text: e.g. "Call (555) 000-0000"
  ctaText?: string       // Backward-compat alias for ctaLabel
  secondaryLabel?: string  // Secondary button text: e.g. "Request an Estimate Online"
  secondaryCTA?: string    // Backward-compat alias for secondaryLabel
  secondaryHref?: string
  dark?: boolean
  footnote?: string      // Small text below buttons, e.g. "Licensed & Insured · Serving Long Beach, CA"
}

export default function CTASection({
  headline = 'Ready to Get Started?',
  subtext = 'Contact us today for a free estimate.',
  phone,
  ctaLabel,
  ctaText,
  secondaryLabel,
  secondaryCTA,
  secondaryHref = '/contact',
  dark = true,
  footnote,
}: CTASectionProps) {
  const primaryLabel = ctaLabel ?? ctaText ?? `Call Now — ${phone}`
  const secLabel = secondaryLabel ?? secondaryCTA

  const bg = dark ? 'var(--color-fg)' : 'var(--color-surface)'
  const textColor = dark ? 'var(--color-bg)' : 'var(--color-fg)'
  const mutedColor = dark
    ? 'color-mix(in srgb, var(--color-bg) 60%, transparent)'
    : 'var(--color-muted)'
  const borderColor = dark
    ? 'color-mix(in srgb, var(--color-bg) 25%, transparent)'
    : 'var(--color-border)'

  return (
    <section style={{
      padding: 'clamp(4rem, 10vw, 7rem) clamp(1rem, 5vw, 2.5rem)',
      background: bg,
      borderTop: '1px solid var(--color-border)',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <div style={{
          width: '40px', height: '2px',
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
              borderRadius: '4px',
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              textDecoration: 'none',
              fontSize: '1rem',
              letterSpacing: '0.01em',
              whiteSpace: 'nowrap',
            }}
          >
            {primaryLabel}
          </a>
          {secLabel && (
            <a
              href={secondaryHref}
              style={{
                border: `1px solid ${borderColor}`,
                color: textColor,
                padding: '0.9375rem 2.125rem',
                borderRadius: '4px',
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                textDecoration: 'none',
                fontSize: '1rem',
                whiteSpace: 'nowrap',
              }}
            >
              {secLabel}
            </a>
          )}
        </div>
        {footnote && (
          <p style={{
            marginTop: '1.75rem',
            fontFamily: 'var(--font-body)',
            fontSize: '0.8125rem',
            color: mutedColor,
            letterSpacing: '0.03em',
          }}>
            {footnote}
          </p>
        )}
      </div>
    </section>
  )
}
