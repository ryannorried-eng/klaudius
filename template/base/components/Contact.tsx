export default function Contact({ phone = '', address = '' }: { phone?: string; address?: string }) {
  return (
    <section style={{ padding: '4rem 2rem', background: 'var(--color-fg)', color: 'var(--color-bg)' }}>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '2rem' }}>Get in touch</h2>
      {phone && <p style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}><a href={`tel:${phone}`} style={{ color: 'inherit' }}>{phone}</a></p>}
      {address && <p style={{ color: 'rgba(255,255,255,0.6)' }}>{address}</p>}
    </section>
  )
}
