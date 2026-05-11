export default function MobileCTABar({
  phone,
  ctaText = 'Call Now — Free Estimate',
}: {
  phone: string
  ctaText?: string
}) {
  return (
    <>
      <div className="mobile-cta-bar" style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 200,
        background: 'var(--color-accent)',
        padding: '0.75rem 1rem',
        display: 'flex', gap: '0.625rem', alignItems: 'center',
        boxShadow: '0 -2px 16px rgba(0,0,0,0.2)',
      }}>
        <a href={`tel:${phone}`} style={{
          flex: 1, background: 'var(--color-bg)', color: 'var(--color-accent)',
          padding: '0.75rem 0.5rem', borderRadius: '6px', textAlign: 'center',
          fontFamily: 'var(--font-body)', fontWeight: 700, textDecoration: 'none',
          fontSize: '0.9375rem', whiteSpace: 'nowrap', overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}>
          📞 {ctaText}
        </a>
        <a href="/contact" style={{
          flex: 1, background: 'transparent', color: 'var(--color-bg)',
          padding: '0.75rem 0.5rem', borderRadius: '6px', textAlign: 'center',
          fontFamily: 'var(--font-body)', fontWeight: 600, textDecoration: 'none',
          fontSize: '0.9375rem', border: '2px solid var(--color-bg)',
          whiteSpace: 'nowrap',
        }}>
          Get a Quote
        </a>
      </div>
      <style>{`
        @media (min-width: 769px) { .mobile-cta-bar { display: none !important; } }
      `}</style>
    </>
  )
}
