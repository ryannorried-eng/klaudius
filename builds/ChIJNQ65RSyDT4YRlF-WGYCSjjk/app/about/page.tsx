import type { Metadata } from 'next'
import CTASection from '../../components/CTASection'

export const metadata: Metadata = {
  title: 'About | Rodriguez Construction & Remodeling · Waco, TX',
  description: 'Learn about Rodriguez Construction & Remodeling — Waco\'s trusted contractor. Luis and his crew. 4.9 stars. Licensed & insured. Call (254) 447-7325.',
}

const PHONE = '(254) 447-7325'
const CITY = 'Waco'

const values = [
  {
    title: 'Luis Shows Up',
    body: 'Every Rodriguez project is supervised by Luis personally. Clients notice it immediately — they\'re not dealing with a dispatcher or a crew they\'ve never met. Luis is on site, accountable from day one.',
  },
  {
    title: 'Punctual, Every Time',
    body: 'When Luis says the crew will be there at 7 AM, they\'re there at 7 AM. Multiple clients have mentioned it specifically in their reviews — because showing up when you say you will is rarer than it should be.',
  },
  {
    title: 'Clean Job Sites',
    body: 'Rodriguez crews clean up at the end of every work day. Clients who\'ve had other contractors know the difference. Your home is a job site during the project, but you shouldn\'t have to navigate debris to get to your kitchen.',
  },
  {
    title: 'Stand Behind the Work',
    body: 'Luis has been recommended to family and friends by multiple clients and has never disappointed them. That record is worth protecting. If something isn\'t right, Rodriguez Construction comes back and makes it right.',
  },
]

const credentials = [
  'Texas Residential Contractor License',
  'General Liability Insurance',
  'Workers\' Compensation Insurance',
  'City of Waco Registered Contractor',
  'Permit history across McLennan County',
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
            Family-owned. Backed by results.
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
            color: 'var(--color-muted)',
            maxWidth: '60ch',
            lineHeight: 1.7,
          }}>
            Rodriguez Construction & Remodeling serves Waco and McLennan County with residential construction, remodeling, painting, and renovation work. Luis runs every project himself — and his clients keep sending family and friends his way.
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
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3.5vw, 2.375rem)', fontWeight: 700, letterSpacing: '-0.015em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              One contractor. One number. Luis answers it.
            </h2>
            {[
              'Luis Rodriguez started Rodriguez Construction & Remodeling to do one thing well: show up, do the work right, and treat people\'s homes with respect. That philosophy has earned him a 4.9-star rating across 14 Google reviews and a steady stream of referrals from clients who\'ve seen the results firsthand.',
              'The scope of Rodriguez Construction\'s work speaks to Luis\'s versatility. He\'s handled the majority of a full custom home build, garage additions, kitchen and bath remodels, interior painting, drywall repair, and flooring — sometimes all for the same client who came back when the next project was ready.',
              'Rodriguez Construction operates out of the McFerrin Ave neighborhood and serves Waco and surrounding communities Monday through Friday. Luis is the person who answers the phone, shows up at the estimate, and walks the job every day the crew is on site. There\'s no hand-off between sales and production — it\'s the same man throughout.',
            ].map((para, i) => (
              <p key={i} style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.75, marginBottom: '1.125rem' }}>
                {para}
              </p>
            ))}
          </div>

          <div>
            <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '4px', padding: 'clamp(1.75rem, 4vw, 2.5rem)', marginBottom: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem 2rem', marginBottom: '2rem' }}>
                {[
                  { value: '4.9★', label: 'Google Rating' },
                  { value: '14', label: 'Reviews' },
                  { value: 'Waco', label: 'Locally Owned' },
                  { value: 'Free', label: 'Estimates' },
                ].map(stat => (
                  <div key={stat.label}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3.5vw, 2.125rem)', fontWeight: 700, color: 'var(--color-accent)', lineHeight: 1, marginBottom: '0.3rem' }}>
                      {stat.value}
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--color-muted)', letterSpacing: '0.04em', textTransform: 'uppercase', fontWeight: 500 }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: 1.6, color: 'var(--color-fg)' }}>
                  &ldquo;I&rsquo;ve recommended him to family and friends and he has never disappointed. Couldn&rsquo;t be a bigger fan.&rdquo;
                </p>
                <p style={{ marginTop: '0.75rem', fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--color-muted)' }}>
                  — Zane Christian, Waco, TX
                </p>
              </div>
            </div>

            <a
              href={`tel:${PHONE}`}
              style={{ display: 'block', background: 'var(--color-accent)', color: 'var(--color-bg)', padding: '1rem 1.75rem', borderRadius: '4px', fontFamily: 'var(--font-body)', fontWeight: 700, textDecoration: 'none', fontSize: '1rem', textAlign: 'center' }}
            >
              Get a Free Estimate
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: 'clamp(4rem, 10vw, 7rem) clamp(1rem, 5vw, 2.5rem)', background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'var(--color-accent)' }} />
            How We Work
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, letterSpacing: '-0.015em', lineHeight: 1.1, marginBottom: 'clamp(2.5rem, 5vw, 4rem)', maxWidth: '22ch' }}>
            The standard we hold ourselves to
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            {values.map((v, i) => (
              <div key={i} style={{ borderTop: '2px solid var(--color-accent)', paddingTop: '1.375rem' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.0625rem, 2.2vw, 1.25rem)', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: '0.75rem', lineHeight: 1.2 }}>
                  {v.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-muted)', lineHeight: 1.7 }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: 'clamp(4rem, 10vw, 7rem) clamp(1rem, 5vw, 2.5rem)', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: 'clamp(2.5rem, 6vw, 5rem)', alignItems: 'start' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'var(--color-accent)' }} />
              Licensing &amp; Insurance
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3.5vw, 2.375rem)', fontWeight: 700, letterSpacing: '-0.015em', lineHeight: 1.1, marginBottom: '1.25rem' }}>
              Fully licensed. Fully insured.
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.75, maxWidth: '52ch' }}>
              Every Rodriguez Construction project is covered by full general liability and workers&rsquo; compensation insurance. We pull all required permits in Waco and surrounding cities, keeping your home&rsquo;s records clean for resale and insurance purposes.
            </p>
          </div>
          <div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {credentials.map((c, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', padding: '1rem 0', borderBottom: '1px solid var(--color-border)', fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'var(--color-fg)' }}>
                  <span style={{ color: 'var(--color-accent)', fontSize: '0.5rem', flexShrink: 0 }}>✦</span>
                  {c}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: '1.75rem' }}>
              <a href={`tel:${PHONE}`} style={{ background: 'var(--color-accent)', color: 'var(--color-bg)', padding: '0.75rem 1.5rem', borderRadius: '4px', fontFamily: 'var(--font-body)', fontWeight: 700, textDecoration: 'none', fontSize: '0.9375rem', display: 'inline-block' }}>
                Call {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Work with a team you can trust."
        subtext={`Proudly serving ${CITY} and surrounding communities. Call Luis to get started.`}
        phone={PHONE}
        ctaLabel={`Call ${PHONE}`}
        secondaryLabel="View Our Services"
        secondaryHref="/services"
        footnote={`Licensed & Insured · ${CITY}, TX`}
      />
    </main>
  )
}
