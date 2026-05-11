type Review = { author: string; text: string; rating: number }

export default function Reviews({ reviews = [] }: { reviews?: Review[] }) {
  if (!reviews.length) return null
  return (
    <section style={{ padding: '4rem 2rem' }}>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '2rem' }}>What people say</h2>
      <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        {reviews.map((r, i) => (
          <blockquote key={i} style={{ borderLeft: '3px solid var(--color-accent)', paddingLeft: '1.5rem' }}>
            <p style={{ fontStyle: 'italic', lineHeight: 1.6 }}>"{r.text}"</p>
            <cite style={{ display: 'block', marginTop: '0.75rem', color: 'var(--color-muted)', fontSize: '0.9rem' }}>— {r.author}</cite>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
