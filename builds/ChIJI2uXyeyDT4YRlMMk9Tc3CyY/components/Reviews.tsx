type Review = { author: string; text: string; rating: number }

export default function Reviews({ reviews = [] }: { reviews?: Review[] }) {
  if (!reviews.length) return null
  return (
    <section style={{
      padding: 'clamp(3rem, 8vw, 6rem) clamp(2rem, 6vw, 5rem)',
      borderTop: '1px solid var(--color-muted)',
    }}>
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)',
        fontWeight: 400,
        fontStyle: 'italic',
        marginBottom: '3rem',
      }}>
        What people say
      </h2>
      <div style={{
        display: 'grid',
        gap: '3rem',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      }}>
        {reviews.map((r, i) => (
          <blockquote key={i}>
            <p style={{
              fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
              fontWeight: 300,
              lineHeight: 1.8,
              color: 'var(--color-fg)',
              opacity: 0.8,
            }}>
              "{r.text}"
            </p>
            <cite style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginTop: '1.5rem',
              fontStyle: 'normal',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
            }}>
              {'★'.repeat(r.rating)}
              <span style={{ color: 'var(--color-fg)', opacity: 0.4 }}>— {r.author}</span>
            </cite>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
