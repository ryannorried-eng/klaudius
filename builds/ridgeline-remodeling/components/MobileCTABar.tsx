export default function MobileCTABar({ phone }: { phone: string }) {
  return (
    <>
      <div className="mobile-cta-bar" style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 200,
        background: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        padding: '0.625rem 1rem',
        display: 'flex', gap: '0.625rem', alignItems: 'center',
        boxShadow: '0 -4px 24px rgba(0,0,0,0.4)',
      }}>
        <a
          href={`tel:${phone}`}
          style={{
            flex: 1,
            background: 'var(--color-accent)',
            color: 'var(--color-bg)',
            padding: '0.8125rem 0.5rem',
            borderRadius: '3px',
            textAlign: 'center',
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            textDecoration: 'none',
            fontSize: '0.9375rem',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            letterSpacing: '0.01em',
          }}
        >
          Call Now — Free Estimate
        </a>
        <a
          href="/contact"
          style={{
            flex: 1,
            background: 'transparent',
            color: 'var(--color-accent)',
            padding: '0.8125rem 0.5rem',
            borderRadius: '3px',
            textAlign: 'center',
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            textDecoration: 'none',
            fontSize: '0.9375rem',
            border: '1px solid var(--color-accent)',
            whiteSpace: 'nowrap',
            letterSpacing: '0.01em',
          }}
        >
          Get a Quote
        </a>
      </div>
      <style>{`
        @media (min-width: 769px) { .mobile-cta-bar { display: none !important; } }
      `}</style>
    </>
  )
}
