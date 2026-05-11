export default function Gallery({ photos = [] }: { photos?: string[] }) {
  if (!photos.length) return null
  return (
    <section style={{ padding: 'clamp(3rem, 8vw, 6rem) clamp(2rem, 6vw, 5rem)' }}>
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)',
        fontWeight: 400,
        fontStyle: 'italic',
        marginBottom: '2rem',
      }}>
        Our Work
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1rem',
      }}>
        {photos.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Carlos & Sons Plumbing work"
            style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }}
          />
        ))}
      </div>
    </section>
  )
}
