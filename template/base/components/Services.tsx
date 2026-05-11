export default function Services({ items = [] }: { items?: string[] }) {
  return (
    <section style={{ padding: '4rem 2rem', background: 'var(--color-muted)10' }}>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '2rem' }}>Services</h2>
      <ul style={{ listStyle: 'none', display: 'grid', gap: '1rem' }}>
        {items.map((item, i) => (
          <li key={i} style={{ padding: '1rem', borderTop: '1px solid var(--color-muted)' }}>{item}</li>
        ))}
      </ul>
    </section>
  )
}
