import type { Metadata } from 'next'
import CTASection from '../../components/CTASection'

export const metadata: Metadata = {
  title: 'About | Prestige Construction & Remodeling LLC · Waco, TX',
  description: 'Learn about Prestige Construction & Remodeling — Waco\'s trusted general contractor. Reliable crews, honest pricing. Licensed & insured. Call (254) 981-4152.',
}

const PHONE = '(254) 981-4152'
const CITY = 'Waco'

const values = [
  {
    title: 'We Show Up',
    body: 'When Manny says the crew will be there at 7 AM, they\'re there at 7 AM. Every homeowner who\'s hired us has noticed — because it\'s rarer than it should be.',
  },
  {
    title: 'Honest Pricing',
    body: 'Our estimates are written, itemized, and firm. No allowances that turn into overages. No scope creep without your sign-off. What you approve is what you pay.',
  },
  {
    title: 'Clean Job Sites',
    body: 'We clean up every day before we leave. Dust barriers go up before demo. Your home is a work zone during the project — but you shouldn\'t have to live in chaos.',
  },
  {
    title: 'We Stand Behind the Work',
    body: 'Every Prestige project carries a one-year workmanship warranty. If something isn\'t right, we come back and fix it — no runaround, no charge.',
  },
]

const credentials = [
  'Texas Residential Contractor License',
  'General Liability Insurance',
  'Workers\' Compensation Insurance',
  'City of Waco Registered Contractor',
  'Permitted projects in Woodway, Hewitt, and McLennan County',
]

export default function AboutPage() {
  return (
    <main>
      <section style={{
        padding: 'clamp(3.5rem, 10vw, 6rem) clamp(1rem, 5vw, 2.5rem)',
        borderBottom: '1px solid var(--color-border)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.6875rem',
            fontWeight: 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}>
            <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'var(--color-accent)' }} />
            Our Story
          </p>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            maxWidth: '22ch',
            marginBottom: '1.5rem',
          }}>
            Built on reliability. Earned one job at a time.
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
            color: 'var(--color-muted)',
            maxWidth: '60ch',
            lineHeight: 1.7,
          }}>
            Prestige Construction & Remodeling has been serving Waco and McLennan County with general contracting, remodeling, and renovation services. The business was built around one principle: show up when you say you will, work hard all day, and do the job right.
          </p>
        </div>
      </section>

      <section style={{
        padding: 'clamp(4rem, 10vw, 7rem) clamp(1rem, 5vw, 2.5rem)',
        borderBottom: '1px solid var(--color-border)',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
          gap: 'clamp(2.5rem, 6vw, 5rem)',
          alignItems: 'start',
        }}>
          <div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.375rem)',
              fontWeight: 700,
              letterSpacing: '-0.015em',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
            }}>
              A Waco contractor you can call back.
            </h2>
            {[
              'Manny started Prestige Construction with a straightforward idea: most homeowners don\'t need the cheapest contractor — they need one they can trust. They need someone who answers the phone, shows up when promised, and doesn\'t disappear after the check clears. That\'s what Prestige was built to be.',
              'The business grew steadily through referrals in the Waco area. Neighbors recommend Manny\'s crew to neighbors. Customers who hired Prestige for a bathroom come back when they\'re ready to do the kitchen. One satisfied client already had Manny\'s crew in three separate times — and is planning a fourth project.',
              'Today Prestige handles residential construction and remodeling projects across McLennan County — kitchen and bathroom remodels, room additions, full home renovations, flooring, and general contracting. Open seven days a week, because sometimes a project needs attention on a Saturday.',
            ].map((para, i) => (
              <p key={i} style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9375rem',
                color: 'var(--color-muted)',
                lineHeight: 1.75,
                marginBottom: '1.125rem',
              }}>
                {para}
              </p>
            ))}
          </div>

          <div>
            <div style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: '4px',
              padding: 'clamp(1.75rem, 4vw, 2.5rem)',
              marginBottom: '1.5rem',
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.5rem 2rem',
                marginBottom: '2rem',
              }}>
                {[
                  { value: '5.0★', label: 'Google Rating' },
                  { value: '7', label: 'Days a Week' },
                  { value: 'Waco', label: 'Locally Owned' },
                  { value: 'Free', label: 'Estimates' },
                ].map(stat => (
                  <div key={stat.label}>
                    <div style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.5rem, 3.5vw, 2.125rem)',
                      fontWeight: 700,
                      color: 'var(--color-accent)',
                      lineHeight: 1,
                      marginBottom: '0.3rem',
                    }}>
                      {stat.value}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.75rem',
                      color: 'var(--color-muted)',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      fontWeight: 500,
                    }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                  lineHeight: 1.6,
                  color: 'var(--color-fg)',
                }}>
                  &ldquo;They show up as promised and work all day. They have been one of the best I&rsquo;ve dealt with.&rdquo;
                </p>
                <p style={{
                  marginTop: '0.75rem',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8125rem',
                  color: 'var(--color-muted)',
                }}>
                  — Elster Green, Waco, TX
                </p>
              </div>
            </div>

            <a
              href={`tel:${PHONE}`}
              style={{
                display: 'block',
                background: 'var(--color-accent)',
                color: 'var(--color-bg)',
                padding: '1rem 1.75rem',
                borderRadius: '4px',
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: '1rem',
                textAlign: 'center',
              }}
            >
              Get a Free Estimate
            </a>
          </div>
        </div>
      </section>

      <section style={{
        padding: 'clamp(4rem, 10vw, 7rem) clamp(1rem, 5vw, 2.5rem)',
        background: 'var(--color-surface)',
        borderBottom: '1px solid var(--color-border)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
            How We Work
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            fontWeight: 700,
            letterSpacing: '-0.015em',
            lineHeight: 1.1,
            marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
            maxWidth: '22ch',
          }}>
            The standard we hold ourselves to
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2.5rem)',
          }}>
            {values.map((v, i) => (
              <div key={i} style={{ borderTop: '2px solid var(--color-accent)', paddingTop: '1.375rem' }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.0625rem, 2.2vw, 1.25rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                  marginBottom: '0.75rem',
                  lineHeight: 1.2,
                }}>
                  {v.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  color: 'var(--color-muted)',
                  lineHeight: 1.7,
                }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{
        padding: 'clamp(4rem, 10vw, 7rem) clamp(1rem, 5vw, 2.5rem)',
        borderBottom: '1px solid var(--color-border)',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
          gap: 'clamp(2.5rem, 6vw, 5rem)',
          alignItems: 'start',
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
              Licensing &amp; Insurance
            </p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.375rem)',
              fontWeight: 700,
              letterSpacing: '-0.015em',
              lineHeight: 1.1,
              marginBottom: '1.25rem',
            }}>
              Fully licensed. Fully insured.
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9375rem',
              color: 'var(--color-muted)',
              lineHeight: 1.75,
              maxWidth: '52ch',
            }}>
              Every Prestige project is covered by full general liability and workers&rsquo; compensation insurance. We pull all required permits in Waco, Woodway, Hewitt, and surrounding cities — so you never have to worry about unpermitted work affecting your home&rsquo;s resale or insurance coverage.
            </p>
          </div>
          <div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {credentials.map((c, i) => (
                <li key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.875rem',
                  padding: '1rem 0',
                  borderBottom: '1px solid var(--color-border)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9375rem',
                  color: 'var(--color-fg)',
                }}>
                  <span style={{ color: 'var(--color-accent)', fontSize: '0.5rem', flexShrink: 0 }}>✦</span>
                  {c}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: '1.75rem' }}>
              <a
                href={`tel:${PHONE}`}
                style={{
                  background: 'var(--color-accent)',
                  color: 'var(--color-bg)',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '4px',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  textDecoration: 'none',
                  fontSize: '0.9375rem',
                  display: 'inline-block',
                }}
              >
                Call {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Work with a team you can trust."
        subtext={`Proudly serving ${CITY}, Woodway, Hewitt, and the surrounding community. Call us to get started — 7 days a week.`}
        phone={PHONE}
        ctaLabel={`Call ${PHONE}`}
        secondaryLabel="View Our Services"
        secondaryHref="/services"
        footnote={`Licensed & Insured · ${CITY}, TX · Open 7 Days`}
      />
    </main>
  )
}
