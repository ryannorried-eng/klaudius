// Overwritten per business. Placeholder structure only.
export default function Hero() {
  return (
    <section style={{ minHeight: '100svh', display: 'flex', alignItems: 'center', padding: '2rem' }}>
      <div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 8vw, 6rem)', lineHeight: 1.05 }}>
          Business Name
        </h1>
        <p style={{ marginTop: '1.5rem', fontSize: '1.25rem', color: 'var(--color-muted)' }}>
          Tagline or summary
        </p>
      </div>
    </section>
  )
}
