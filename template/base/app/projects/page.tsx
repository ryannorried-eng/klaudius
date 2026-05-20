// Projects page — overwritten per business.
// If 3+ real photos: populate photos array and render photo grid.
// If fewer than 3: hide gallery entirely, use text-based proof section.
// Never deploy a broken or empty gallery.
import type { Metadata } from 'next'
import CTASection from '../../components/CTASection'

export const metadata: Metadata = {
  title: 'Projects | BUSINESS_NAME · CITY',
  description: 'View completed projects by BUSINESS_NAME in CITY. Licensed & insured. Free estimates.',
}

const PHONE = 'PHONE'
const CITY = 'CITY'
const BUSINESS_NAME = 'BUSINESS_NAME'

// Populated from business.json photo paths — use relative paths from /public/images/
// e.g. ['/images/photo1.jpg', '/images/photo2.jpg']
// Set to [] if fewer than 3 real photos exist — hide gallery section
const photos: string[] = []

// If using photos, optionally add metadata per photo
// Otherwise, describe notable completed projects as text
const projectHighlights = [
  {
    title: 'PROJECT_TITLE_ONE',
    category: 'SERVICE_CATEGORY',
    description: 'PROJECT_DESCRIPTION_ONE — specific details about scope, outcome, location.',
    year: 'YEAR',
  },
  {
    title: 'PROJECT_TITLE_TWO',
    category: 'SERVICE_CATEGORY',
    description: 'PROJECT_DESCRIPTION_TWO',
    year: 'YEAR',
  },
  {
    title: 'PROJECT_TITLE_THREE',
    category: 'SERVICE_CATEGORY',
    description: 'PROJECT_DESCRIPTION_THREE',
    year: 'YEAR',
  },
]

export default function ProjectsPage() {
  const hasPhotos = photos.length >= 3

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
            Our Work
          </p>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            maxWidth: '22ch',
            marginBottom: '1.25rem',
          }}>
            PROJECTS_HEADLINE — work we&rsquo;re proud to put our name on
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
            color: 'var(--color-muted)',
            maxWidth: '52ch',
            lineHeight: 1.7,
          }}>
            PROJECTS_INTRO — {CITY} businesses and residents we've served. Years in business,
            types of projects completed, communities served.
          </p>
        </div>
      </section>

      {/* Photo gallery (only rendered if 3+ photos) */}
      {hasPhotos && (
        <section style={{
          padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 5vw, 2.5rem)',
          borderBottom: '1px solid var(--color-border)',
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
              gap: 'clamp(0.75rem, 1.5vw, 1.25rem)',
            }}>
              {photos.map((src, i) => (
                <div key={i} style={{
                  aspectRatio: '4/3',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  border: '1px solid var(--color-border)',
                }}>
                  <img
                    src={src}
                    alt={`${BUSINESS_NAME} project ${i + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Text-based proof section (always shown; more prominent if no photos) */}
      <section style={{
        padding: 'clamp(4rem, 10vw, 7rem) clamp(1rem, 5vw, 2.5rem)',
        background: hasPhotos ? 'var(--color-surface)' : 'var(--color-bg)',
        borderBottom: '1px solid var(--color-border)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {!hasPhotos && (
            <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
                marginBottom: '0.875rem',
              }}>
                Notable Projects
              </p>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                fontWeight: 700,
                letterSpacing: '-0.015em',
                lineHeight: 1.1,
              }}>
                Work completed across {CITY}
              </h2>
            </div>
          )}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2.5rem)',
          }}>
            {projectHighlights.map((p, i) => (
              <div key={i} style={{
                borderTop: '2px solid var(--color-accent)',
                paddingTop: '1.25rem',
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  marginBottom: '0.5rem',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.625rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-accent)',
                  }}>
                    {p.category}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    color: 'var(--color-muted)',
                  }}>
                    {p.year}
                  </span>
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.0625rem, 2.2vw, 1.25rem)',
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                  lineHeight: 1.2,
                  marginBottom: '0.625rem',
                  color: 'var(--color-fg)',
                }}>
                  {p.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  color: 'var(--color-muted)',
                  lineHeight: 1.65,
                }}>
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Like what you see?"
        subtext={`Every project starts with a phone call and a free estimate. Call us to get started in ${CITY}.`}
        phone={PHONE}
        ctaLabel={`Call ${PHONE}`}
        secondaryLabel="Request an Estimate"
        secondaryHref="/contact"
        footnote={`Licensed & Insured · Serving ${CITY}`}
      />
    </main>
  )
}
