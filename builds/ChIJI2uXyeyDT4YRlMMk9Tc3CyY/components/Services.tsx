export default function Services({ items = [] }: { items?: string[] }) {
  return (
    <section style={{
      padding: 'clamp(3rem, 8vw, 6rem) clamp(2rem, 6vw, 5rem)',
    }}>
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)',
        fontWeight: 400,
        fontStyle: 'italic',
        marginBottom: '3rem',
        borderBottom: '1px solid var(--color-muted)',
        paddingBottom: '1.5rem',
      }}>
        Services
      </h2>
      <ul style={{
        listStyle: 'none',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '0',
      }}>
        {items.map((item, i) => (
          <li key={i} style={{
            padding: '1.5rem 0',
            borderBottom: '1px solid var(--color-muted)',
            fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
            fontWeight: 300,
            letterSpacing: '0.03em',
            lineHeight: 1.4,
          }}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}
