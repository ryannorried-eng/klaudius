type Review = { author: string; text: string; rating: number }

function Stars({ n }: { n: number }) {
  return (
    <span aria-label={`${n} out of 5 stars`} style={{ color: 'var(--color-accent)', letterSpacing: '0.05em', fontSize: '0.9rem' }}>
      {'★'.repeat(Math.min(5, Math.max(0, Math.round(n))))}{'☆'.repeat(Math.max(0, 5 - Math.round(n)))}
    </span>
  )
}

export default function ReviewsPreview({
  reviews = [],
  totalCount = 0,
  rating = 5,
}: {
  reviews?: Review[]
  totalCount?: number
  rating?: number
}) {
  const featured = reviews.slice(0, 3)
  if (!featured.length) return null
  return (
    <section style={{
      padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 2rem)',
      background: 'color-mix(in srgb, var(--color-fg) 4%, var(--color-bg))',
    }}>
      <div style={{ marginBottom: '2.25rem' }}>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
          marginBottom: '0.5rem', lineHeight: 1.1,
        }}>
          What Customers Say
        </h2>
        {totalCount > 0 && (
          <p style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}>
            <Stars n={Math.round(rating)} /> {rating.toFixed(1)} average · {totalCount} reviews
          </p>
        )}
      </div>
      <div style={{
        display: 'grid', gap: '1.75rem',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
      }}>
        {featured.map((r, i) => (
          <blockquote key={i} style={{
            borderLeft: '3px solid var(--color-accent)', paddingLeft: '1.5rem', margin: 0,
          }}>
            <Stars n={r.rating} />
            <p style={{
              fontStyle: 'italic', lineHeight: 1.7, margin: '0.5rem 0 0.75rem',
              fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--color-fg)',
            }}>
              "{r.text}"
            </p>
            <cite style={{
              fontStyle: 'normal', color: 'var(--color-muted)',
              fontSize: '0.8125rem', fontFamily: 'var(--font-body)',
            }}>
              — {r.author}
            </cite>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
