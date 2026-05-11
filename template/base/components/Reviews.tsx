// Full reviews section. Used on dedicated review sections or standalone.
// For home page preview use ReviewsPreview instead.
type Review = { author: string; text: string; rating: number }

function Stars({ n }: { n: number }) {
  return (
    <span aria-label={`${n} stars`} style={{ color: 'var(--color-accent)', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
      {'★'.repeat(Math.min(5, Math.max(0, Math.round(n))))}{'☆'.repeat(Math.max(0, 5 - Math.round(n)))}
    </span>
  )
}

export default function Reviews({ reviews = [] }: { reviews?: Review[] }) {
  if (!reviews.length) return null
  return (
    <section style={{ padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 2rem)' }}>
      <h2 style={{
        fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
        marginBottom: '2.5rem', lineHeight: 1.1,
      }}>
        What People Say
      </h2>
      <div style={{
        display: 'grid', gap: '2rem',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
      }}>
        {reviews.map((r, i) => (
          <blockquote key={i} style={{
            borderLeft: '3px solid var(--color-accent)', paddingLeft: '1.5rem', margin: 0,
          }}>
            <Stars n={r.rating} />
            <p style={{
              fontStyle: 'italic', lineHeight: 1.7, margin: '0.5rem 0 0.75rem',
              fontFamily: 'var(--font-body)', fontSize: '0.95rem',
            }}>
              "{r.text}"
            </p>
            <cite style={{
              display: 'block', fontStyle: 'normal',
              color: 'var(--color-muted)', fontSize: '0.8125rem', fontFamily: 'var(--font-body)',
            }}>
              — {r.author}
            </cite>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
