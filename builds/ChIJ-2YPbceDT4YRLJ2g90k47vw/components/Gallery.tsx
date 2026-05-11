export default function Gallery({ photos = [] }: { photos?: string[] }) {
  if (!photos.length) return null
  return (
    <section style={{ padding: 'clamp(3rem, 8vw, 6rem) clamp(2rem, 6vw, 5rem)' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1rem',
      }}>
        {photos.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="White's Plumbing work"
            style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }}
          />
        ))}
      </div>
    </section>
  )
}
