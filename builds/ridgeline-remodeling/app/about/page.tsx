import type { Metadata } from 'next'
import CTASection from '../../components/CTASection'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Ridgeline Remodeling | Waco, TX · Est. 2009',
  description: 'Family-owned remodeling contractor serving Waco, TX since 2009. Licensed, insured, and built on 15 years of trust with McLennan County homeowners.',
}

const PHONE = '(254) 401-7820'

const values = [
  {
    title: 'Honest Estimates',
    body: 'We price what the job actually costs. No lowball bids designed to win work and recover margin through change orders. You get a real number up front.',
  },
  {
    title: 'Written Schedules',
    body: 'Every project starts with a timeline, and we track against it. If something shifts — material delay, hidden condition — you hear about it from us the same day.',
  },
  {
    title: 'Crew You Can Trust',
    body: 'We don\'t hire a new sub for every job. Our core crew has worked together for years. The same people who start your project finish it.',
  },
  {
    title: 'Work We Stand Behind',
    body: 'We warranty our labor because we build the way we\'d want our own homes built. If something isn\'t right after we leave, we come back.',
  },
]

const credentials = [
  'Texas Residential Contractor License',
  'General Liability Insurance — $2M coverage',
  'Workers\' Compensation Insurance',
  'BBB Accredited Business',
  'OSHA-compliant job site practices',
  'McLennan County permit compliance',
]

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
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
            15 years building trust, one Waco home at a time
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
            color: 'var(--color-muted)',
            maxWidth: '60ch',
            lineHeight: 1.7,
          }}>
            Ridgeline Remodeling started in 2009 with a single crew and a conviction that Waco homeowners deserved a remodeling contractor who showed up when they said they would, communicated honestly, and built things right the first time.
          </p>
        </div>
      </section>

      {/* Company story */}
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
              Family-owned. Built on referrals.
            </h2>
            {[
              'Ridgeline was founded by a lifelong Waco resident who had spent years as a project manager for a large regional contractor and kept seeing the same problems: homeowners who weren\'t told the truth about timelines, change orders that doubled initial bids, and crews who treated the job site like a burden rather than a responsibility.',
              'The name Ridgeline reflects something that matters in construction — the ridgeline is the highest structural point of a roof, where everything holds together or falls apart. It\'s also a Waco reference. We grew up here, and we\'re building here for the long term.',
              'Today we operate a team of twelve full-time craftspeople and project managers, and we take on roughly 40 projects per year in Waco and surrounding McLennan County communities. We turn down work we can\'t do right. We\'re not a high-volume franchise operation — we\'re a craft shop that happens to be good at business.',
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

          {/* Stat block */}
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
                  { value: '2009', label: 'Founded in Waco' },
                  { value: '400+', label: 'Projects Completed' },
                  { value: '12', label: 'Full-Time Team Members' },
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
              <div style={{
                borderTop: '1px solid var(--color-border)',
                paddingTop: '1.5rem',
              }}>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                  lineHeight: 1.6,
                  color: 'var(--color-fg)',
                }}>
                  &ldquo;The contractor you refer to your neighbors.&rdquo;
                </p>
                <p style={{
                  marginTop: '0.75rem',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8125rem',
                  color: 'var(--color-muted)',
                }}>
                  That&rsquo;s the standard we hold ourselves to on every project.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              style={{
                display: 'block',
                background: 'var(--color-accent)',
                color: 'var(--color-bg)',
                padding: '1rem 1.75rem',
                borderRadius: '3px',
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: '1rem',
                textAlign: 'center',
              }}
            >
              Get a Free Estimate
            </Link>
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
            What makes a remodeling contractor worth trusting
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2.5rem)',
          }}>
            {values.map((v, i) => (
              <div key={i} style={{
                borderTop: '2px solid var(--color-accent)',
                paddingTop: '1.375rem',
              }}>
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
              Licensing & Insurance
            </p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.375rem)',
              fontWeight: 700,
              letterSpacing: '-0.015em',
              lineHeight: 1.1,
              marginBottom: '1.25rem',
            }}>
              Fully licensed. Fully insured. No shortcuts.
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9375rem',
              color: 'var(--color-muted)',
              lineHeight: 1.75,
              maxWidth: '52ch',
            }}>
              Before you hire any contractor for work in your home, ask to see their license and insurance certificates. We will hand them to you without hesitation. The paperwork protects you — and it tells you something about how seriously a company takes its work.
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
                  <span style={{
                    color: 'var(--color-accent)',
                    fontSize: '0.5rem',
                    flexShrink: 0,
                  }}>✦</span>
                  {c}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: '1.75rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a
                href={`tel:${PHONE}`}
                style={{
                  background: 'var(--color-accent)',
                  color: 'var(--color-bg)',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '3px',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  textDecoration: 'none',
                  fontSize: '0.9375rem',
                }}
              >
                Call {PHONE}
              </a>
              <Link
                href="/contact"
                style={{
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-fg)',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '3px',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  textDecoration: 'none',
                  fontSize: '0.9375rem',
                }}
              >
                Request an Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Work with a contractor you can trust."
        subtext="Fifteen years in Waco. A crew that stays. A schedule that holds. Call us and see the difference."
        phone={PHONE}
        ctaLabel="Call (254) 401-7820"
        secondaryLabel="Read About Our Services"
        secondaryHref="/services"
      />
    </main>
  )
}
