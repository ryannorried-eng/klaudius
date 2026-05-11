type Review = { author: string; text: string; rating: number }

export default function Reviews({ reviews = [] }: { reviews?: Review[] }) {
  if (!reviews.length) return null
  return (
    <section style={{
      padding: 'clamp(3rem, 8vw, 6rem) clamp(2rem, 6vw, 5rem)',
      background: '#111110',
    }}>
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.4rem, 3vw, 2rem)',
        fontWeight: 700,
        marginBottom: '3rem',
      }}>
        What people say
      </h2>
      <div style={{
        display: 'grid',
        gap: '2rem',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      }}>
        {reviews.map((r, i) => (
          <blockquote key={i} style={{
            borderLeft: '3px solid var(--color-accent)',
            paddingLeft: '1.5rem',
          }}>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.85rem',
              lineHeight: 1.75,
              color: 'var(--color-fg)',
              opacity: 0.8,
            }}>
              "{r.text}"
            </p>
            <cite style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginTop: '1rem',
              fontStyle: 'normal',
              fontSize: '0.75rem',
              color: 'var(--color-accent)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}>
              {'★'.repeat(r.rating)} <span style={{ color: 'var(--color-muted)' }}>— {r.author}</span>
            </cite>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
