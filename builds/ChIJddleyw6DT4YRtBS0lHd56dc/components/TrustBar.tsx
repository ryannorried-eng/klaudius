// TrustBar — horizontal scrolling badge strip, shown at top of home page.
// badges can be plain strings or {icon, label} objects.
// Aura-appropriate defaults: see design system JSON for trustBadges per aura.

type Badge = string | { icon: string; label: string }

const defaultBadges: Badge[] = [
  { icon: '✦', label: 'Licensed & Insured' },
  { icon: '✦', label: 'Free Estimates' },
  { icon: '✦', label: '5-Star Rated' },
  { icon: '✦', label: 'Locally Owned' },
]

export default function TrustBar({ badges = defaultBadges }: { badges?: Badge[] }) {
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
      {badges.map((badge, i) => {
        const icon = typeof badge === 'string' ? '✦' : badge.icon
        const label = typeof badge === 'string' ? badge : badge.label
        return (
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
            <span style={{ color: 'var(--color-accent)', fontSize: '0.5rem' }}>{icon}</span>
            {label}
          </span>
        )
      })}
    </div>
  )
}
