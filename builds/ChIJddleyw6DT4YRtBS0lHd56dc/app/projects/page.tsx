import type { Metadata } from 'next'
import CTASection from '../../components/CTASection'

export const metadata: Metadata = {
  title: 'Projects | Prestige Construction & Remodeling LLC · Waco, TX',
  description: 'View completed projects by Prestige Construction & Remodeling in Waco, TX. Kitchen remodels, room additions, renovations. Free estimates. Call (254) 981-4152.',
}

const PHONE = '(254) 981-4152'
const CITY = 'Waco'
const BUSINESS_NAME = 'Prestige Construction & Remodeling'

const photos = [
  '/images/photo_1.jpg',
  '/images/photo_2.jpg',
  '/images/photo_3.jpg',
  '/images/photo_4.jpg',
  '/images/photo_5.jpg',
  '/images/photo_6.jpg',
  '/images/photo_7.jpg',
  '/images/photo_8.jpg',
]

const projectHighlights = [
  {
    title: 'Kitchen Renovation — Central Waco',
    category: 'Kitchen Remodeling',
    description: 'Full gut-renovation of a dated galley kitchen. Opened the wall to the living room, installed custom shaker cabinets to the ceiling, quartz countertops, subway tile backsplash, and new hardwood flooring.',
    year: '2024',
  },
  {
    title: 'Master Suite Addition — Woodway, TX',
    category: 'Room Addition',
    description: 'Built a 480-square-foot addition including a master bedroom, walk-in closet, and en-suite bathroom with a walk-in tile shower. Permitted through City of Woodway; matched the existing brick exterior.',
    year: '2024',
  },
  {
    title: 'Full Interior Renovation — South Waco',
    category: 'Interior Renovation',
    description: 'Whole-home interior refresh for a 1980s ranch: new LVP flooring throughout, two bathroom remodels, interior repaint, updated trim and doors. Delivered on a 10-week schedule.',
    year: '2023',
  },
  {
    title: 'Primary Bathroom Remodel — Hewitt, TX',
    category: 'Bathroom Renovation',
    description: 'Converted a dated tub-shower combo into a frameless glass walk-in shower with large-format tile and a double vanity. Completed in three weeks.',
    year: '2025',
  },
  {
    title: 'Garage Conversion to Guest Suite — Waco, TX',
    category: 'Room Addition',
    description: 'Converted a two-car garage into a guest suite with full bath, mini-split HVAC, new subfloor, and interior finishes that match the main home.',
    year: '2025',
  },
  {
    title: 'Whole-Home Repaint & Flooring — Waco, TX',
    category: 'Interior Renovation',
    description: 'Complete interior repaint across 2,400 sq ft — walls, ceilings, trim, and cabinets — plus new LVP flooring in all main living areas. Completed in two weeks.',
    year: '2023',
  },
]

export default function ProjectsPage() {
  const hasPhotos = photos.length >= 3

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
            Work we&rsquo;re proud to put our name on
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
            color: 'var(--color-muted)',
            maxWidth: '52ch',
            lineHeight: 1.7,
          }}>
            A look at completed projects across Waco, Woodway, Hewitt, and surrounding communities. Manny and his crew have been delivering quality remodeling work in Central Texas — kitchen remodels to full home renovations.
          </p>
        </div>
      </section>

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

      <section style={{
        padding: 'clamp(4rem, 10vw, 7rem) clamp(1rem, 5vw, 2.5rem)',
        background: hasPhotos ? 'var(--color-surface)' : 'var(--color-bg)',
        borderBottom: '1px solid var(--color-border)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
              Project Highlights
            </p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              fontWeight: 700,
              letterSpacing: '-0.015em',
              lineHeight: 1.1,
            }}>
              A sample of completed work across {CITY}
            </h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2.5rem)',
          }}>
            {projectHighlights.map((p, i) => (
              <div key={i} style={{ borderTop: '2px solid var(--color-accent)', paddingTop: '1.25rem' }}>
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
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--color-muted)' }}>
                    {p.year}
                  </span>
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.0625rem, 2.2vw, 1.25rem)',
                  fontWeight: 700,
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
        subtext={`Every project starts with a free estimate and a straight conversation. Call us to get started in ${CITY}.`}
        phone={PHONE}
        ctaLabel={`Call ${PHONE}`}
        secondaryLabel="Request an Estimate"
        secondaryHref="/contact"
        footnote={`Licensed & Insured · Serving ${CITY}, TX · Open 7 Days`}
      />
    </main>
  )
}
