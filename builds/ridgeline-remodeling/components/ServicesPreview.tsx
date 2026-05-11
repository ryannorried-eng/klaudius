import Link from 'next/link'

const services = [
  {
    number: '01',
    title: 'Kitchen Remodeling',
    description: 'From full gut-and-rebuild to cabinet refacing and countertop upgrades — we design kitchens that work hard and look sharp for decades.',
    href: '/services#kitchen',
  },
  {
    number: '02',
    title: 'Bathroom Renovations',
    description: 'Master bath transformations, walk-in shower conversions, tile work, and fixture upgrades. Finished on time, every tile set right.',
    href: '/services#bathroom',
  },
  {
    number: '03',
    title: 'Whole-Home Remodels',
    description: 'Waco homeowners trust us with their biggest investment. We coordinate every trade, manage every detail, and deliver a finished home.',
    href: '/services#whole-home',
  },
  {
    number: '04',
    title: 'Room Additions',
    description: 'Expand your home without leaving the neighborhood you love. We handle design, permitting, and construction start to finish.',
    href: '/services#additions',
  },
]

export default function ServicesPreview() {
  return (
    <section style={{
      padding: 'clamp(4rem, 10vw, 7rem) clamp(1rem, 5vw, 2.5rem)',
      borderTop: '1px solid var(--color-border)',
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
              What We Build
            </p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              fontWeight: 700,
              letterSpacing: '-0.015em',
              lineHeight: 1.1,
              maxWidth: '22ch',
            }}>
              Craftsmanship across every corner of your home
            </h2>
          </div>
          <Link
            href="/services"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: 'var(--color-accent)',
              textDecoration: 'none',
              borderBottom: '1px solid var(--color-accent)',
              paddingBottom: '2px',
              whiteSpace: 'nowrap',
            }}
          >
            All Services →
          </Link>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
          gap: '1px',
          background: 'var(--color-border)',
          border: '1px solid var(--color-border)',
          borderRadius: '4px',
          overflow: 'hidden',
        }}>
          {services.map(s => (
            <Link
              key={s.number}
              href={s.href}
              style={{
                background: 'var(--color-bg)',
                padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                textDecoration: 'none',
                display: 'block',
                transition: 'background 0.2s',
              }}
            >
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
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
                fontWeight: 700,
                letterSpacing: '-0.01em',
                lineHeight: 1.2,
                marginBottom: '0.875rem',
                color: 'var(--color-fg)',
              }}>
                {s.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                color: 'var(--color-muted)',
                lineHeight: 1.65,
              }}>
                {s.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
