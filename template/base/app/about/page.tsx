// About page — overwritten per business.
// Write a believable, local-feeling company story from name/review signals.
// Avoid generic AI copy — match tone to inferred aura.
// Stats, values, credentials all populated from business.json context.
import type { Metadata } from 'next'
import CTASection from '../../components/CTASection'

export const metadata: Metadata = {
  title: 'About | BUSINESS_NAME · CITY',
  description: 'Learn about BUSINESS_NAME — serving CITY with quality and integrity. Licensed & insured.',
}

const PHONE = 'PHONE'
const CITY = 'CITY'
const BUSINESS_NAME = 'BUSINESS_NAME'

// Values: specific to this business type and aura — not generic
const values = [
  {
    title: 'VALUE_TITLE_ONE',
    body: 'VALUE_BODY_ONE — specific to this business, written to match aura tone.',
  },
  {
    title: 'VALUE_TITLE_TWO',
    body: 'VALUE_BODY_TWO',
  },
  {
    title: 'VALUE_TITLE_THREE',
    body: 'VALUE_BODY_THREE',
  },
  {
    title: 'VALUE_TITLE_FOUR',
    body: 'VALUE_BODY_FOUR',
  },
]

// Credentials: match what's known about the business category
const credentials = [
  'CREDENTIAL_ONE — e.g. State Contractor License',
  'CREDENTIAL_TWO — e.g. General Liability Insurance',
  'CREDENTIAL_THREE — e.g. Workers\' Compensation',
  'CREDENTIAL_FOUR — e.g. BBB Accredited',
]

export default function AboutPage() {
  return (
    <main>
      {/* Page hero */}
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
            ABOUT_HEADLINE — local, specific, aura-toned
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
            color: 'var(--color-muted)',
            maxWidth: '60ch',
            lineHeight: 1.7,
          }}>
            ABOUT_INTRO — one paragraph introducing the business, how long they've been in {CITY},
            and what makes them different. Match aura tone.
          </p>
        </div>
      </section>

      {/* Company story + stats */}
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
              STORY_SUBHEADLINE — e.g. "Family-owned. Built on referrals."
            </h2>
            {[
              'STORY_PARAGRAPH_ONE — how the business started, the founder\'s background, why they started in this city.',
              'STORY_PARAGRAPH_TWO — what makes this business different, the philosophy, the approach to work.',
              'STORY_PARAGRAPH_THREE — the team today, how many people, kinds of projects, commitment to the community.',
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

          {/* Stats block */}
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
                  { value: 'YEAR', label: 'Founded in ' + CITY },
                  { value: 'XXX+', label: 'Projects Completed' },
                  { value: 'XX', label: 'Team Members' },
                  { value: '5.0★', label: 'Google Rating' },
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
                  &ldquo;QUOTE_FROM_REVIEWS_or_COMPANY_MOTTO&rdquo;
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

      {/* Values */}
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
            VALUES_SECTION_HEADLINE
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

      {/* Credentials */}
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
              CREDENTIALS_COPY — brief paragraph about why licensing/insurance matters
              and how {BUSINESS_NAME} takes this seriously in {CITY}.
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
        subtext={`Proudly serving ${CITY} and the surrounding community. Call us to get started.`}
        phone={PHONE}
        ctaLabel={`Call ${PHONE}`}
        secondaryLabel="View Our Services"
        secondaryHref="/services"
        footnote={`Licensed & Insured · ${CITY}`}
      />
    </main>
  )
}
