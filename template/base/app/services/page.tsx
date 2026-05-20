// Services page — overwritten per business.
// Write real service descriptions: specific, with local keywords, no generic filler.
// Each service gets a two-column block: copy on left, feature bullets on right.
// Match tone to aura copywriting style from design system JSON.
import type { Metadata } from 'next'
import CTASection from '../../components/CTASection'

export const metadata: Metadata = {
  title: 'Services | BUSINESS_NAME · CITY',
  description: 'Professional CATEGORY services in CITY. BUSINESS_NAME — licensed, insured, free estimates. Call PHONE.',
}

const PHONE = 'PHONE'
const CITY = 'CITY'
const BUSINESS_NAME = 'BUSINESS_NAME'

// Populate from business.json — write specific descriptions with local keywords.
const services = [
  {
    id: 'service-slug',
    number: '01',
    title: 'SERVICE_NAME',
    subtitle: 'SERVICE_SUBTITLE — one-line description with trust language.',
    description: `SERVICE_DESCRIPTION — written with local keywords, trust language, and specific detail.

Second paragraph with more detail about what's included, how the work is done, and why customers trust this business for this service.`,
    features: [
      'Feature one — specific to this service',
      'Feature two',
      'Feature three',
      'Feature four',
      'Feature five',
      'Feature six',
    ],
    localNote: `Serving ${CITY} and surrounding communities.`,
  },
]

export default function ServicesPage() {
  return (
    <main>
      {/* Page header */}
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
            What We Do
          </p>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            maxWidth: '20ch',
            marginBottom: '1.5rem',
          }}>
            SERVICES_PAGE_HEADLINE for {CITY}
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
            color: 'var(--color-muted)',
            maxWidth: '58ch',
            lineHeight: 1.7,
            marginBottom: '2rem',
          }}>
            SERVICES_PAGE_INTRO — specific description of what {BUSINESS_NAME} does in {CITY}.
            Local keywords, trust language, years of experience.
          </p>
          <a
            href={`tel:${PHONE}`}
            style={{
              display: 'inline-flex',
              background: 'var(--color-accent)',
              color: 'var(--color-bg)',
              padding: '0.875rem 1.875rem',
              borderRadius: '4px',
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              textDecoration: 'none',
              fontSize: '1rem',
            }}
          >
            Call for a Free Estimate
          </a>
        </div>
      </section>

      {/* Service blocks */}
      {services.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          style={{
            padding: 'clamp(4rem, 10vw, 7rem) clamp(1rem, 5vw, 2.5rem)',
            background: i % 2 === 1 ? 'var(--color-surface)' : 'var(--color-bg)',
            borderBottom: '1px solid var(--color-border)',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
              gap: 'clamp(2.5rem, 6vw, 5rem)',
              alignItems: 'start',
            }}>
              {/* Left column — copy */}
              <div>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  color: 'var(--color-accent)',
                  display: 'block',
                  marginBottom: '1rem',
                }}>
                  {s.number}
                </span>
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.875rem, 4vw, 2.875rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.015em',
                  lineHeight: 1.08,
                  marginBottom: '0.625rem',
                }}>
                  {s.title}
                </h2>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                  color: 'var(--color-accent)',
                  marginBottom: '1.75rem',
                  lineHeight: 1.4,
                }}>
                  {s.subtitle}
                </p>
                {s.description.split('\n\n').map((para, j) => (
                  <p key={j} style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9375rem',
                    color: 'var(--color-muted)',
                    lineHeight: 1.75,
                    marginBottom: '1rem',
                  }}>
                    {para}
                  </p>
                ))}
                <p style={{
                  marginTop: '1.5rem',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8125rem',
                  color: 'var(--color-accent)',
                  fontStyle: 'italic',
                }}>
                  {s.localNote}
                </p>
                <div style={{ marginTop: '2rem' }}>
                  <a
                    href={`tel:${PHONE}`}
                    style={{
                      background: 'var(--color-accent)',
                      color: 'var(--color-bg)',
                      padding: '0.75rem 1.625rem',
                      borderRadius: '4px',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 700,
                      textDecoration: 'none',
                      fontSize: '0.9375rem',
                    }}
                  >
                    Get a Free Estimate
                  </a>
                </div>
              </div>

              {/* Right column — features */}
              <div>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-muted)',
                  marginBottom: '1.125rem',
                }}>
                  Scope includes
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {s.features.map((f, j) => (
                    <li key={j} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      padding: '0.75rem 0',
                      borderBottom: '1px solid var(--color-border)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9375rem',
                      color: 'var(--color-fg)',
                      lineHeight: 1.45,
                    }}>
                      <span style={{
                        color: 'var(--color-accent)',
                        fontSize: '0.5rem',
                        marginTop: '0.4rem',
                        flexShrink: 0,
                      }}>✦</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTASection
        headline="Ready to get started?"
        subtext={`Call us to discuss your project. We'll give you a straight answer, a real timeline, and a firm estimate. No pressure.`}
        phone={PHONE}
        ctaLabel={`Call ${PHONE}`}
        secondaryLabel="Request an Online Estimate"
        secondaryHref="/contact"
        footnote={`Licensed & Insured · Serving ${CITY}`}
      />
    </main>
  )
}
