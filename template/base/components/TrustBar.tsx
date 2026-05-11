const defaults = ['Licensed & Insured', 'Free Estimates', '5-Star Rated', 'Locally Owned']

export default function TrustBar({ badges = defaults }: { badges?: string[] }) {
  return (
    <div style={{
      background: 'var(--color-accent)', color: 'var(--color-bg)',
      padding: '0.5rem clamp(1rem, 4vw, 2rem)',
      display: 'flex', gap: 'clamp(1.25rem, 3vw, 2.5rem)', alignItems: 'center',
      overflowX: 'auto', whiteSpace: 'nowrap',
      scrollbarWidth: 'none',
    }}>
      {badges.map((badge, i) => (
        <span key={i} style={{
          fontFamily: 'var(--font-body)', fontSize: '0.75rem',
          fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase',
          flexShrink: 0, display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
        }}>
          <span aria-hidden>✓</span>{badge}
        </span>
      ))}
    </div>
  )
}
