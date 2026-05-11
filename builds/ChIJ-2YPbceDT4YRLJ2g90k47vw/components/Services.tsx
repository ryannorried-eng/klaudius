export default function Services({ items = [] }: { items?: string[] }) {
  return (
    <section style={{
      padding: 'clamp(3rem, 8vw, 6rem) clamp(2rem, 6vw, 5rem)',
      background: 'var(--color-muted)',
    }}>
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.4rem, 3vw, 2rem)',
        fontWeight: 700,
        marginBottom: '2rem',
      }}>
        Services
      </h2>
      <ul style={{
        listStyle: 'none',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1px',
        background: 'rgba(255,255,255,0.08)',
      }}>
        {items.map((item, i) => (
          <li key={i} style={{
            padding: '1.25rem 1.5rem',
            background: 'var(--color-muted)',
            fontSize: '0.95rem',
            fontWeight: 400,
            lineHeight: 1.4,
            borderLeft: '3px solid var(--color-accent)',
          }}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}
