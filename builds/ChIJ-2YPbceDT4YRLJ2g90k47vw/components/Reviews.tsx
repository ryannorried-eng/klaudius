type Review = { author: string; text: string; rating: number }

export default function Reviews({ reviews = [] }: { reviews?: Review[] }) {
  if (!reviews.length) return null
  return (
    <section style={{
      padding: 'clamp(3rem, 8vw, 6rem) clamp(2rem, 6vw, 5rem)',
    }}>
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.4rem, 3vw, 2rem)',
        fontWeight: 700,
        marginBottom: '2.5rem',
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
            padding: '1.5rem',
            border: '1px solid var(--color-muted)',
            borderTop: '3px solid var(--color-accent)',
          }}>
            <p style={{
              fontSize: '0.9rem',
              lineHeight: 1.75,
              color: 'var(--color-fg)',
              opacity: 0.85,
            }}>
              "{r.text}"
            </p>
            <cite style={{
              display: 'block',
              marginTop: '1rem',
              fontStyle: 'normal',
              fontSize: '0.8rem',
              color: 'var(--color-fg)',
              opacity: 0.5,
            }}>
              {'★'.repeat(r.rating)} — {r.author}
            </cite>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
