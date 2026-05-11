import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact & Free Estimates | Ridgeline Remodeling · Waco, TX',
  description: 'Request a free remodeling estimate from Ridgeline Remodeling in Waco, TX. Call (254) 401-7820 or submit online. Serving Waco, Woodway, Hewitt & McLennan County.',
}

const PHONE = '(254) 401-7820'
const ADDRESS = '4821 Bosque Blvd, Waco, TX 76710'

const serviceArea = [
  'Waco', 'Woodway', 'Hewitt', 'Robinson', 'Bellmead',
  'Lacy-Lakeview', 'McGregor', 'Hillsboro', 'Temple (limited)',
]

const hours = [
  { days: 'Monday – Friday', hours: '7:00 AM – 6:00 PM' },
  { days: 'Saturday', hours: '8:00 AM – 3:00 PM' },
  { days: 'Sunday', hours: 'Closed' },
]

export default function ContactPage() {
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
            Get in Touch
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
            Free estimates. Straight answers. No pressure.
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
            color: 'var(--color-muted)',
            maxWidth: '52ch',
            lineHeight: 1.7,
          }}>
            Call us to describe your project and we&rsquo;ll set up a walk-through. You&rsquo;ll get an honest scope, a real timeline, and a firm number — before you commit to anything.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section style={{
        padding: 'clamp(4rem, 10vw, 7rem) clamp(1rem, 5vw, 2.5rem)',
        borderBottom: '1px solid var(--color-border)',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
          gap: 'clamp(3rem, 6vw, 5rem)',
          alignItems: 'start',
        }}>
          {/* Contact form */}
          <div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.375rem, 3vw, 1.875rem)',
              fontWeight: 700,
              letterSpacing: '-0.01em',
              lineHeight: 1.15,
              marginBottom: '0.5rem',
            }}>
              Request a Free Estimate
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              color: 'var(--color-muted)',
              marginBottom: '2rem',
              lineHeight: 1.6,
            }}>
              Tell us about your project. We&rsquo;ll follow up within one business day to schedule a walk-through.
            </p>

            <form
              action="#"
              method="POST"
              style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem' }}
            >
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
                <label style={labelStyle} htmlFor="phone">Phone Number</label>
                <input id="phone" name="phone" type="tel" required style={inputStyle} placeholder="(254) 555-0100" />
              </div>

              <div>
                <label style={labelStyle} htmlFor="email">Email Address</label>
                <input id="email" name="email" type="email" style={inputStyle} placeholder="jane@example.com" />
              </div>

              <div>
                <label style={labelStyle} htmlFor="address">Property Address</label>
                <input id="address" name="address" type="text" style={inputStyle} placeholder="123 Main St, Waco, TX" />
              </div>

              <div>
                <label style={labelStyle} htmlFor="service">Project Type</label>
                <select id="service" name="service" style={{ ...inputStyle, cursor: 'pointer' }}>
                  <option value="">Select a service...</option>
                  <option value="kitchen">Kitchen Remodel</option>
                  <option value="bathroom">Bathroom Renovation</option>
                  <option value="whole-home">Whole-Home Remodel</option>
                  <option value="addition">Room Addition</option>
                  <option value="other">Other / Not Sure Yet</option>
                </select>
              </div>

              <div>
                <label style={labelStyle} htmlFor="message">Project Description</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' }}
                  placeholder="Describe what you're hoping to do — size, scope, anything relevant. The more detail, the better we can prepare for the walk-through."
                />
              </div>

              <button
                type="submit"
                style={{
                  background: 'var(--color-accent)',
                  color: 'var(--color-bg)',
                  border: 'none',
                  padding: '0.9375rem 2rem',
                  borderRadius: '3px',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  letterSpacing: '0.01em',
                  textAlign: 'left',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <span>Submit Estimate Request</span>
                <span aria-hidden>→</span>
              </button>

              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                color: 'var(--color-muted)',
                lineHeight: 1.5,
              }}>
                We respond within one business day. No spam, no sales calls — just a follow-up about your project.
              </p>
            </form>
          </div>

          {/* Contact info sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Call CTA */}
            <div style={{
              background: 'var(--color-accent)',
              borderRadius: '3px',
              padding: 'clamp(1.5rem, 3vw, 2rem)',
            }}>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-bg)',
                opacity: 0.7,
                marginBottom: '0.5rem',
              }}>
                Prefer to Call?
              </p>
              <a
                href={`tel:${PHONE}`}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
                  fontWeight: 700,
                  color: 'var(--color-bg)',
                  textDecoration: 'none',
                  display: 'block',
                  letterSpacing: '-0.01em',
                  marginBottom: '0.5rem',
                }}
              >
                {PHONE}
              </a>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                color: 'var(--color-bg)',
                opacity: 0.75,
                lineHeight: 1.5,
              }}>
                Monday–Friday 7 AM–6 PM · Saturday 8 AM–3 PM
              </p>
            </div>

            {/* Address */}
            <div style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: '3px',
              padding: 'clamp(1.5rem, 3vw, 2rem)',
            }}>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-muted)',
                marginBottom: '0.75rem',
              }}>
                Office Address
              </p>
              <address style={{
                fontStyle: 'normal',
                fontFamily: 'var(--font-body)',
                fontSize: '0.9375rem',
                color: 'var(--color-fg)',
                lineHeight: 1.6,
              }}>
                {ADDRESS}
              </address>
              <p style={{
                marginTop: '0.5rem',
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                color: 'var(--color-muted)',
              }}>
                By appointment only. We come to you for estimates.
              </p>
            </div>

            {/* Hours */}
            <div style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: '3px',
              padding: 'clamp(1.5rem, 3vw, 2rem)',
            }}>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-muted)',
                marginBottom: '1rem',
              }}>
                Office Hours
              </p>
              {hours.map((h, i) => (
                <div key={i} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.625rem 0',
                  borderBottom: i < hours.length - 1 ? '1px solid var(--color-border)' : 'none',
                  gap: '1rem',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    color: 'var(--color-fg)',
                  }}>
                    {h.days}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    color: h.hours === 'Closed' ? 'var(--color-muted)' : 'var(--color-accent)',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                  }}>
                    {h.hours}
                  </span>
                </div>
              ))}
            </div>

            {/* Service area */}
            <div style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: '3px',
              padding: 'clamp(1.5rem, 3vw, 2rem)',
            }}>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-muted)',
                marginBottom: '1rem',
              }}>
                Service Area
              </p>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
              }}>
                {serviceArea.map(city => (
                  <span key={city} style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8125rem',
                    color: 'var(--color-fg)',
                    background: 'rgba(201,168,76,0.08)',
                    border: '1px solid var(--color-border)',
                    padding: '0.3125rem 0.75rem',
                    borderRadius: '2px',
                  }}>
                    {city}
                  </span>
                ))}
              </div>
              <p style={{
                marginTop: '1rem',
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                color: 'var(--color-muted)',
                lineHeight: 1.5,
              }}>
                Primarily McLennan County. Projects outside this area considered case-by-case.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA strip */}
      <section style={{
        padding: 'clamp(3rem, 7vw, 5rem) clamp(1rem, 5vw, 2.5rem)',
        background: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ width: '40px', height: '2px', background: 'var(--color-accent)', margin: '0 auto 2rem' }} />
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
            fontWeight: 700,
            letterSpacing: '-0.015em',
            lineHeight: 1.15,
            marginBottom: '1rem',
          }}>
            Ready when you are.
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9375rem',
            color: 'var(--color-muted)',
            lineHeight: 1.7,
            marginBottom: '2rem',
          }}>
            No obligation, no pressure. Just a straight conversation about your home and what it could become. Call us, and let&rsquo;s get started.
          </p>
          <a
            href={`tel:${PHONE}`}
            style={{
              display: 'inline-block',
              background: 'var(--color-accent)',
              color: 'var(--color-bg)',
              padding: '0.9375rem 2.25rem',
              borderRadius: '3px',
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              textDecoration: 'none',
              fontSize: '1.0625rem',
              letterSpacing: '0.01em',
            }}
          >
            Call {PHONE}
          </a>
          <p style={{
            marginTop: '1.25rem',
            fontFamily: 'var(--font-body)',
            fontSize: '0.8125rem',
            color: 'var(--color-muted)',
          }}>
            Licensed &amp; Insured · Waco, TX · Serving McLennan County since 2009
          </p>
        </div>
      </section>
    </main>
  )
}

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
  borderRadius: '3px',
  padding: '0.75rem 1rem',
  color: 'var(--color-fg)',
  fontFamily: 'var(--font-body)',
  fontSize: '0.9375rem',
  outline: 'none',
  appearance: 'none',
  WebkitAppearance: 'none',
}
