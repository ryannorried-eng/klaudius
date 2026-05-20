import type { Metadata } from 'next'
import CTASection from '../../components/CTASection'

export const metadata: Metadata = {
  title: 'Projects | Rodriguez Construction & Remodeling · Waco, TX',
  description: 'View completed projects by Rodriguez Construction & Remodeling in Waco, TX. Home builds, additions, remodeling, painting. Free estimates. Call (254) 447-7325.',
}

const PHONE = '(254) 447-7325'
const CITY = 'Waco'
const BUSINESS_NAME = 'Rodriguez Construction & Remodeling'

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
    title: 'New Home Build — McLennan County',
    category: 'New Construction',
    description: 'Rodriguez Construction handled the overwhelming majority of a full custom home build in the Waco area — framing, roofing, drywall, interior finishes, cabinetry, and flooring. One crew, one contractor, finished on schedule.',
    year: '2024',
  },
  {
    title: 'Garage Addition — Waco, TX',
    category: 'Room Addition',
    description: 'Built a two-car garage addition with full interior finishing and tie-in to the existing structure. Luis supervised the entire project — foundation, framing, roofline, and finishing details — and the result matched the home seamlessly.',
    year: '2024',
  },
  {
    title: 'Interior Painting — Waco Condo',
    category: 'Interior Painting',
    description: 'Full interior paint of a Waco condo on a tight turnaround. Luis\'s crew met the schedule, cleaned up completely after each day, and delivered a clean, professional finish. Client noted the results were "a great job."',
    year: '2023',
  },
  {
    title: 'Drywall Repair & Interior Repaint — Waco, TX',
    category: 'Drywall & Painting',
    description: 'Interior repaint and drywall crack repair throughout a single-family home. Luis\'s crew repaired all hairline cracks from settling before painting, arriving punctually each day and completing the work on schedule.',
    year: '2023',
  },
  {
    title: 'Kitchen Renovation — Central Waco',
    category: 'Kitchen Remodeling',
    description: 'Complete kitchen renovation including new cabinetry, countertops, tile backsplash, and updated plumbing fixtures. One contractor from demo to final install — no subcontractor handoffs.',
    year: '2025',
  },
  {
    title: 'Bathroom Remodel — McFerrin Ave Area',
    category: 'Bathroom Renovation',
    description: 'Full bathroom gut-out and rebuild with new tile, walk-in shower, updated vanity, and lighting. Luis managed every trade and handled the permit through City of Waco.',
    year: '2025',
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
            Real work, real results across Waco
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
            color: 'var(--color-muted)',
            maxWidth: '52ch',
            lineHeight: 1.7,
          }}>
            A look at completed projects by Rodriguez Construction & Remodeling across Waco and McLennan County — new home builds, garage additions, interior remodeling, painting, and more.
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
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '0.875rem' }}>
              Project Highlights
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, letterSpacing: '-0.015em', lineHeight: 1.1 }}>
              Work completed across {CITY}
            </h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2.5rem)',
          }}>
            {projectHighlights.map((p, i) => (
              <div key={i} style={{ borderTop: '2px solid var(--color-accent)', paddingTop: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.625rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
                    {p.category}
                  </span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--color-muted)' }}>{p.year}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.0625rem, 2.2vw, 1.25rem)', fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.2, marginBottom: '0.625rem', color: 'var(--color-fg)' }}>
                  {p.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.65 }}>
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Like what you see?"
        subtext={`Every project starts with a free estimate and a straight conversation. Call Luis to get started in ${CITY}.`}
        phone={PHONE}
        ctaLabel={`Call ${PHONE}`}
        secondaryLabel="Request an Estimate"
        secondaryHref="/contact"
        footnote={`Licensed & Insured · Serving ${CITY}, TX`}
      />
    </main>
  )
}
