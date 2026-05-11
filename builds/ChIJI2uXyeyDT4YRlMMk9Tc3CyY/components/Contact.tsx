export default function Contact({ phone = '', address = '' }: { phone?: string; address?: string }) {
  return (
    <section style={{
      padding: 'clamp(3rem, 8vw, 6rem) clamp(2rem, 6vw, 5rem)',
      background: 'var(--color-fg)',
      color: 'var(--color-bg)',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2rem',
      alignItems: 'center',
    }}>
      <div>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)',
          fontWeight: 400,
          fontStyle: 'italic',
          marginBottom: '1rem',
        }}>
          Get in touch
        </h2>
        <p style={{ fontSize: '0.85rem', opacity: 0.6, maxWidth: '320px', lineHeight: 1.6 }}>
          Available 24 hours a day. No job too big, no job too small.
        </p>
      </div>
      <div>
        {phone && (
          <p style={{ marginBottom: '0.75rem' }}>
            <a
              href={`tel:${phone}`}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                fontStyle: 'italic',
                color: 'var(--color-bg)',
                display: 'block',
              }}
            >
              {phone}
            </a>
          </p>
        )}
        {address && (
          <p style={{ fontSize: '0.8rem', opacity: 0.5 }}>{address}</p>
        )}
      </div>
    </section>
  )
}
