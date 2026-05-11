const reviews = [
  {
    author: 'Sandra M.',
    location: 'Woodway, TX',
    rating: 5,
    text: 'Ridgeline did our kitchen top to bottom — new layout, custom cabinets, quartz counters. They were on site every day they said they would be. Fifteen years of doing this shows in how they manage a job.',
  },
  {
    author: 'Carlos & Teresa R.',
    location: 'Waco, TX',
    rating: 5,
    text: 'We had three bids. Ridgeline wasn\'t the cheapest, but they were the only ones who came back with a real plan and a written schedule. Final result blew away what we imagined. Master bath is unreal.',
  },
  {
    author: 'David H.',
    location: 'Hewitt, TX',
    rating: 5,
    text: 'Whole-home remodel on a 1970s house. Six months, zero surprises on cost, and they were upfront every time something came up behind the walls. Clean job site start to finish. You can tell they\'re proud of their work.',
  },
]

function Stars({ n }: { n: number }) {
  return (
    <span aria-label={`${n} stars`} style={{
      color: 'var(--color-accent)',
      fontSize: '0.75rem',
      letterSpacing: '0.1em',
    }}>
      {'★'.repeat(n)}
    </span>
  )
}

export default function ReviewsPreview() {
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
              What Waco Homeowners Say
            </p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              fontWeight: 700,
              letterSpacing: '-0.015em',
              lineHeight: 1.1,
            }}>
              The contractor you refer to your neighbors
            </h2>
          </div>
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
            }}>5.0</div>
            <Stars n={5} />
            <div style={{ marginTop: '0.25rem' }}>Google Rating</div>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: 'clamp(1.25rem, 2.5vw, 2rem)',
        }}>
          {reviews.map((r, i) => (
            <blockquote
              key={i}
              style={{
                margin: 0,
                padding: 'clamp(1.5rem, 3vw, 2rem)',
                background: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                borderRadius: '3px',
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
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  color: 'var(--color-muted)',
                }}>
                  {r.location}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
