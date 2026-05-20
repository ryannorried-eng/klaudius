// ReviewsPreview — 3 featured customer reviews on home page.
// Shown in all aura layouts. Hide (return null) only if reviews array is empty.

type Review = {
  author: string
  location?: string  // city, e.g. "Long Beach, CA"
  text: string
  rating: number
}

function Stars({ n }: { n: number }) {
  return (
    <span aria-label={`${n} stars`} style={{
      color: 'var(--color-accent)',
      fontSize: '0.75rem',
      letterSpacing: '0.1em',
    }}>
      {'★'.repeat(Math.min(5, Math.max(0, Math.round(n))))}
    </span>
  )
}

export default function ReviewsPreview({
  reviews = [],
  totalCount = 0,
  rating = 5,
  headline = 'What Customers Say',
  sectionLabel = 'Reviews',
}: {
  reviews?: Review[]
  totalCount?: number
  rating?: number
  headline?: string
  sectionLabel?: string
}) {
  const featured = reviews.slice(0, 3)
  if (!featured.length) return null

  return (
    <section style={{
      padding: 'clamp(4rem, 10vw, 7rem) clamp(1rem, 5vw, 2.5rem)',
      background: 'var(--color-surface)',
      borderTop: '1px solid var(--color-border)',
      borderBottom: '1px solid var(--color-border)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '1.5rem',
          marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
        }}>
          <div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              marginBottom: '0.875rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'var(--color-accent)' }} />
              {sectionLabel}
            </p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              fontWeight: 700,
              letterSpacing: '-0.015em',
              lineHeight: 1.1,
            }}>
              {headline}
            </h2>
          </div>
          {totalCount > 0 && (
            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8125rem',
              color: 'var(--color-muted)',
              textAlign: 'right',
              whiteSpace: 'nowrap',
            }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.75rem',
                fontWeight: 700,
                color: 'var(--color-accent)',
                lineHeight: 1,
              }}>
                {rating.toFixed(1)}
              </div>
              <Stars n={Math.round(rating)} />
              <div style={{ marginTop: '0.25rem' }}>
                {totalCount} reviews
              </div>
            </div>
          )}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: 'clamp(1.25rem, 2.5vw, 2rem)',
        }}>
          {featured.map((r, i) => (
            <blockquote
              key={i}
              style={{
                margin: 0,
                padding: 'clamp(1.5rem, 3vw, 2rem)',
                background: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <Stars n={r.rating} />
              <p style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 'clamp(0.9375rem, 2vw, 1.0625rem)',
                lineHeight: 1.65,
                color: 'var(--color-fg)',
                flex: 1,
              }}>
                &ldquo;{r.text}&rdquo;
              </p>
              <footer>
                <cite style={{
                  fontStyle: 'normal',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  color: 'var(--color-fg)',
                  display: 'block',
                }}>
                  {r.author}
                </cite>
                {r.location && (
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    color: 'var(--color-muted)',
                  }}>
                    {r.location}
                  </span>
                )}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
