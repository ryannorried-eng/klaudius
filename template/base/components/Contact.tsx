// Full contact page component. Overwritten per business.
type ContactProps = {
  phone?: string
  address?: string
  city?: string
  serviceArea?: string
  hours?: string
  emergency?: boolean
  businessName?: string
}

export default function Contact({
  phone = '',
  address = '',
  city = '',
  serviceArea = '',
  hours = '',
  emergency = false,
  businessName = '',
}: ContactProps) {
  return (
    <section style={{ padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 2rem)' }}>
      <h1 style={{
        fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)',
        marginBottom: '0.5rem', lineHeight: 1.1,
      }}>
        Get in Touch
      </h1>
      {(city || serviceArea) && (
        <p style={{
          color: 'var(--color-muted)', fontFamily: 'var(--font-body)',
          marginBottom: '3rem', fontSize: '1rem',
        }}>
          Serving {serviceArea || city} and nearby communities.
        </p>
      )}

      <div style={{
        display: 'grid', gap: '3rem',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
      }}>
        <div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
            Send a Message
          </h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} action="#" method="POST">
            <input
              type="text" name="name" placeholder="Your name" required
              style={{
                padding: '0.875rem',
                border: '1px solid color-mix(in srgb, var(--color-muted) 40%, transparent)',
                borderRadius: '6px', fontFamily: 'var(--font-body)', fontSize: '1rem',
                background: 'color-mix(in srgb, var(--color-fg) 4%, var(--color-bg))',
                color: 'var(--color-fg)', outline: 'none',
              }}
            />
            <input
              type="tel" name="phone" placeholder="Your phone number" required
              style={{
                padding: '0.875rem',
                border: '1px solid color-mix(in srgb, var(--color-muted) 40%, transparent)',
                borderRadius: '6px', fontFamily: 'var(--font-body)', fontSize: '1rem',
                background: 'color-mix(in srgb, var(--color-fg) 4%, var(--color-bg))',
                color: 'var(--color-fg)', outline: 'none',
              }}
            />
            <textarea
              name="message" placeholder="Tell us about your project" rows={4}
              style={{
                padding: '0.875rem',
                border: '1px solid color-mix(in srgb, var(--color-muted) 40%, transparent)',
                borderRadius: '6px', fontFamily: 'var(--font-body)', fontSize: '1rem',
                background: 'color-mix(in srgb, var(--color-fg) 4%, var(--color-bg))',
                color: 'var(--color-fg)', resize: 'vertical', outline: 'none',
              }}
            />
            <button type="submit" style={{
              background: 'var(--color-accent)', color: 'var(--color-bg)',
              padding: '0.875rem', borderRadius: '6px', border: 'none',
              fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1rem', cursor: 'pointer',
            }}>
              Send Message
            </button>
          </form>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem' }}>
            Contact Info
          </h2>
          {phone && (
            <div>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--color-muted)',
                textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.35rem',
              }}>Phone</p>
              <a href={`tel:${phone}`} style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                color: 'var(--color-accent)', textDecoration: 'none', fontWeight: 700,
              }}>
                {phone}
              </a>
            </div>
          )}
          {address && (
            <div>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--color-muted)',
                textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.35rem',
              }}>Address</p>
              <p style={{ fontFamily: 'var(--font-body)', lineHeight: 1.6, color: 'var(--color-fg)' }}>
                {address}
              </p>
            </div>
          )}
          {hours && (
            <div>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--color-muted)',
                textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.35rem',
              }}>Hours</p>
              <p style={{ fontFamily: 'var(--font-body)', lineHeight: 1.6, color: 'var(--color-fg)' }}>
                {hours}
              </p>
            </div>
          )}
          {emergency && phone && (
            <div style={{
              background: 'var(--color-accent)', color: 'var(--color-bg)',
              padding: '1.25rem 1.5rem', borderRadius: '8px',
            }}>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, marginBottom: '0.25rem' }}>
                24/7 Emergency Service
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', opacity: 0.85, marginBottom: '0.75rem' }}>
                For urgent situations, call us any time.
              </p>
              <a href={`tel:${phone}`} style={{
                color: 'var(--color-bg)', fontFamily: 'var(--font-display)',
                fontSize: '1.25rem', fontWeight: 700, textDecoration: 'none',
              }}>
                {phone}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
