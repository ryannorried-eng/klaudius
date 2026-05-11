'use client'
import { useState } from 'react'

type GalleryProps = {
  photos?: string[]
  title?: string
  minPhotos?: number
}

export default function Gallery({ photos = [], title = 'Our Work', minPhotos = 3 }: GalleryProps) {
  const [failed, setFailed] = useState<Set<number>>(new Set())

  const markFailed = (i: number) => setFailed(prev => new Set([...prev, i]))
  const valid = photos.filter((_, i) => !failed.has(i))

  // Never render a gallery with broken or insufficient photos
  if (photos.length < minPhotos || valid.length < minPhotos) return null

  return (
    <section style={{ padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 2rem)' }}>
      <h2 style={{
        fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
        marginBottom: '2rem', lineHeight: 1.1,
      }}>
        {title}
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
        gap: '0.75rem',
      }}>
        {photos.map((src, i) =>
          failed.has(i) ? null : (
            <img
              key={i}
              src={src}
              alt={`${title} — photo ${i + 1}`}
              onError={() => markFailed(i)}
              style={{
                width: '100%', height: '260px', objectFit: 'cover',
                borderRadius: '4px', display: 'block',
              }}
            />
          )
        )}
      </div>
    </section>
  )
}
