const badges = [
  { icon: '✦', label: 'Licensed & Insured' },
  { icon: '✦', label: 'Free Estimates' },
  { icon: '✦', label: '15 Years in Waco' },
  { icon: '✦', label: 'Family Owned' },
  { icon: '✦', label: '5-Star Rated' },
]

export default function TrustBar() {
  return (
    <div style={{
      background: 'var(--color-surface)',
      borderBottom: '1px solid var(--color-border)',
      padding: '0.625rem clamp(1rem, 5vw, 2.5rem)',
      display: 'flex',
      gap: 'clamp(1.25rem, 3vw, 2.5rem)',
      alignItems: 'center',
      overflowX: 'auto',
      whiteSpace: 'nowrap',
      scrollbarWidth: 'none',
    }}>
      {badges.map((b, i) => (
        <span key={i} style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.6875rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--color-muted)',
          flexShrink: 0,
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
        }}>
          <span style={{ color: 'var(--color-accent)', fontSize: '0.5rem' }}>{b.icon}</span>
          {b.label}
        </span>
      ))}
    </div>
  )
}
