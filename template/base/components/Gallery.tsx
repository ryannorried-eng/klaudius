export default function Gallery({ photos = [] }: { photos?: string[] }) {
  if (!photos.length) return null
  return (
    <section style={{ padding: '4rem 2rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
        {photos.map((src, i) => (
          <img key={i} src={src} alt="" style={{ width: '100%', height: '280px', objectFit: 'cover' }} />
        ))}
      </div>
    </section>
  )
}
