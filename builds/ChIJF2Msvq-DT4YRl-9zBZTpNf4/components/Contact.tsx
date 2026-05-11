export default function Contact({ phone = '', address = '' }: { phone?: string; address?: string }) {
  return (
    <section style={{
      padding: 'clamp(3rem, 8vw, 6rem) clamp(2rem, 6vw, 5rem)',
      background: 'var(--color-accent)',
      color: '#1a1a18',
    }}>
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.4rem, 3vw, 2rem)',
        fontWeight: 700,
        marginBottom: '0.5rem',
      }}>
        Call us anytime
      </h2>
      <p style={{ fontSize: '0.85rem', marginBottom: '2rem', opacity: 0.7 }}>
        Available 24 hours a day, 7 days a week
      </p>
      {phone && (
        <p style={{ marginBottom: '1rem' }}>
          <a
            href={`tel:${phone}`}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 5vw, 3rem)',
              fontWeight: 700,
              color: '#1a1a18',
              display: 'block',
            }}
          >
            {phone}
          </a>
        </p>
      )}
      {address && (
        <p style={{ fontSize: '0.85rem', opacity: 0.6, fontFamily: 'var(--font-body)' }}>
          {address}
        </p>
      )}
    </section>
  )
}
