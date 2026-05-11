export default function Services({ items = [] }: { items?: string[] }) {
  return (
    <section style={{
      padding: 'clamp(3rem, 8vw, 6rem) clamp(2rem, 6vw, 5rem)',
      borderTop: '1px solid var(--color-muted)',
    }}>
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.4rem, 3vw, 2rem)',
        fontWeight: 700,
        marginBottom: '2.5rem',
        letterSpacing: '-0.01em',
      }}>
        Services
      </h2>
      <ul style={{
        listStyle: 'none',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '0',
      }}>
        {items.map((item, i) => (
          <li key={i} style={{
            padding: '1.25rem 0',
            borderTop: '1px solid var(--color-muted)',
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
            letterSpacing: '0.02em',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}>
            <span style={{ color: 'var(--color-accent)', fontWeight: 700 }}>→</span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}
