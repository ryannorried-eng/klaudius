import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Rodriguez Construction & Remodeling · Waco, TX',
  description: 'Contact Rodriguez Construction & Remodeling in Waco, TX. Call (254) 447-7325 for a free estimate. Serving Waco and McLennan County, Mon–Fri.',
}

const PHONE = '(254) 447-7325'
const ADDRESS = '1528 McFerrin Ave, Waco, TX 76708'
const CITY = 'Waco'
const emergency = false

const serviceArea = ['Waco', 'Woodway', 'Hewitt', 'Robinson', 'Bellmead', 'China Spring', 'Lorena']

const hours = [
  { days: 'Monday – Friday', hours: '7:00 AM – 5:00 PM' },
  { days: 'Saturday', hours: 'Closed' },
  { days: 'Sunday', hours: 'Closed' },
]

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-body)',
  fontSize: '0.75rem',
  fontWeight: 600,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: 'var(--color-muted)',
  marginBottom: '0.4375rem',
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'var(--color-surface)',
  border: '1px solid var(--color-border)',
  borderRadius: '4px',
  padding: '0.75rem 1rem',
  color: 'var(--color-fg)',
  fontFamily: 'var(--font-body)',
  fontSize: '0.9375rem',
  outline: 'none',
  appearance: 'none',
  WebkitAppearance: 'none',
}

export default function ContactPage() {
  return (
    <main>
      <section style={{
        padding: 'clamp(3.5rem, 10vw, 6rem) clamp(1rem, 5vw, 2.5rem)',
        borderBottom: '1px solid var(--color-border)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'var(--color-accent)' }} />
            Get in Touch
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.05, maxWidth: '22ch', marginBottom: '1.25rem' }}>
            Free estimates. Straight answers. No pressure.
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', color: 'var(--color-muted)', maxWidth: '52ch', lineHeight: 1.7 }}>
            Call Luis directly or fill out the form below. We&rsquo;ll set up a walk-through at your convenience and give you a detailed written estimate — no obligation, no upsell.
          </p>
        </div>
      </section>

      <section style={{ padding: 'clamp(4rem, 10vw, 7rem) clamp(1rem, 5vw, 2.5rem)', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: 'clamp(3rem, 6vw, 5rem)', alignItems: 'start' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.375rem, 3vw, 1.875rem)', fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.15, marginBottom: '0.5rem' }}>
              Request a Free Estimate
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>
              Tell us about your project. We&rsquo;ll follow up within one business day.
            </p>

            <form action="#" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={labelStyle} htmlFor="first-name">First Name</label>
                  <input id="first-name" name="first_name" type="text" required style={inputStyle} placeholder="Jane" />
                </div>
                <div>
                  <label style={labelStyle} htmlFor="last-name">Last Name</label>
                  <input id="last-name" name="last_name" type="text" required style={inputStyle} placeholder="Smith" />
                </div>
              </div>
              <div>
                <label style={labelStyle} htmlFor="phone-input">Phone Number</label>
                <input id="phone-input" name="phone" type="tel" required style={inputStyle} placeholder="(254) 000-0000" />
              </div>
              <div>
                <label style={labelStyle} htmlFor="email-input">Email Address</label>
                <input id="email-input" name="email" type="email" style={inputStyle} placeholder="jane@example.com" />
              </div>
              <div>
                <label style={labelStyle} htmlFor="service">Service Needed</label>
                <select id="service" name="service" style={inputStyle}>
                  <option value="">Select a service...</option>
                  <option value="construction">New Home Construction</option>
                  <option value="addition">Room or Garage Addition</option>
                  <option value="kitchen-bath">Kitchen or Bathroom Remodel</option>
                  <option value="painting">Interior Painting</option>
                  <option value="drywall">Drywall Repair</option>
                  <option value="flooring">Flooring Installation</option>
                  <option value="other">Other / Multiple</option>
                </select>
              </div>
              <div>
                <label style={labelStyle} htmlFor="message">Project Description</label>
                <textarea id="message" name="message" rows={4} style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' }} placeholder="Describe your project — size, scope, timeline, anything relevant." />
              </div>
              <button type="submit" style={{ background: 'var(--color-accent)', color: 'var(--color-bg)', border: 'none', padding: '0.9375rem 2rem', borderRadius: '4px', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', letterSpacing: '0.01em', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                <span>Submit Request</span>
                <span aria-hidden>→</span>
              </button>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--color-muted)', lineHeight: 1.5 }}>
                We respond within one business day. No spam, no pressure.
              </p>
            </form>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ background: 'var(--color-accent)', borderRadius: '4px', padding: 'clamp(1.5rem, 3vw, 2rem)' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-bg)', opacity: 0.75, marginBottom: '0.5rem' }}>
                Call Luis Direct
              </p>
              <a href={`tel:${PHONE}`} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700, color: 'var(--color-bg)', textDecoration: 'none', display: 'block', letterSpacing: '-0.01em', marginBottom: '0.5rem' }}>
                {PHONE}
              </a>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-bg)', opacity: 0.75, lineHeight: 1.5 }}>
                Monday through Friday, 7:00 AM – 5:00 PM
              </p>
            </div>

            <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '4px', padding: 'clamp(1.5rem, 3vw, 2rem)' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: '0.75rem' }}>
                Address
              </p>
              <address style={{ fontStyle: 'normal', fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'var(--color-fg)', lineHeight: 1.6 }}>
                {ADDRESS}
              </address>
            </div>

            <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '4px', padding: 'clamp(1.5rem, 3vw, 2rem)' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: '1rem' }}>
                Hours
              </p>
              {hours.map((h, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.625rem 0', borderBottom: i < hours.length - 1 ? '1px solid var(--color-border)' : 'none', gap: '1rem' }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-fg)' }}>{h.days}</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: h.hours === 'Closed' ? 'var(--color-muted)' : 'var(--color-accent)', fontWeight: 500, whiteSpace: 'nowrap' }}>
                    {h.hours}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '4px', padding: 'clamp(1.5rem, 3vw, 2rem)' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: '1rem' }}>
                Service Area
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {serviceArea.map(city => (
                  <span key={city} style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--color-fg)', background: 'color-mix(in srgb, var(--color-accent) 8%, transparent)', border: '1px solid var(--color-border)', padding: '0.3125rem 0.75rem', borderRadius: '2px' }}>
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: 'clamp(3rem, 7vw, 5rem) clamp(1rem, 5vw, 2.5rem)', background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ width: '40px', height: '2px', background: 'var(--color-accent)', margin: '0 auto 2rem' }} />
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', fontWeight: 700, letterSpacing: '-0.015em', lineHeight: 1.15, marginBottom: '1rem' }}>
            Ready when you are.
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
            No obligation, no pressure. Just a straight conversation about your project with Luis.
          </p>
          <a href={`tel:${PHONE}`} style={{ display: 'inline-block', background: 'var(--color-accent)', color: 'var(--color-bg)', padding: '0.9375rem 2.25rem', borderRadius: '4px', fontFamily: 'var(--font-body)', fontWeight: 700, textDecoration: 'none', fontSize: '1.0625rem', letterSpacing: '0.01em' }}>
            Call {PHONE}
          </a>
          <p style={{ marginTop: '1.25rem', fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--color-muted)' }}>
            Licensed &amp; Insured &middot; {CITY}, TX &middot; Free Estimates
          </p>
        </div>
      </section>
    </main>
  )
}
