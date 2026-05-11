'use client'
import { useState } from 'react'
import Link from 'next/link'

type NavProps = {
  businessName: string
  phone: string
}

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav({ businessName, phone }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'var(--color-bg)',
        borderBottom: '1px solid color-mix(in srgb, var(--color-muted) 30%, transparent)',
        padding: '0 clamp(1rem, 4vw, 2rem)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '64px',
      }}>
        <Link href="/" style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          color: 'var(--color-fg)', textDecoration: 'none',
          fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', letterSpacing: '-0.01em',
        }}>
          {businessName}
        </Link>

        <div className="nav-desktop" style={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{
              color: 'var(--color-fg)', textDecoration: 'none',
              fontFamily: 'var(--font-body)', fontSize: '0.875rem', opacity: 0.75,
            }}>
              {l.label}
            </Link>
          ))}
          <a href={`tel:${phone}`} style={{
            background: 'var(--color-accent)', color: 'var(--color-bg)',
            padding: '0.5rem 1.25rem', borderRadius: '4px',
            fontFamily: 'var(--font-body)', fontWeight: 700, textDecoration: 'none',
            fontSize: '0.875rem', whiteSpace: 'nowrap',
          }}>
            {phone}
          </a>
        </div>

        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none', background: 'none', border: 'none',
            cursor: 'pointer', padding: '0.5rem', color: 'var(--color-fg)',
            fontSize: '1.5rem', lineHeight: 1,
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, top: '64px', zIndex: 99,
          background: 'var(--color-bg)', padding: '2rem',
          display: 'flex', flexDirection: 'column', gap: '1.25rem',
          overflowY: 'auto',
        }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{
              color: 'var(--color-fg)', textDecoration: 'none',
              fontFamily: 'var(--font-display)', fontSize: '1.75rem',
              borderBottom: '1px solid color-mix(in srgb, var(--color-muted) 20%, transparent)',
              paddingBottom: '1.25rem',
            }}>
              {l.label}
            </Link>
          ))}
          <a href={`tel:${phone}`} style={{
            marginTop: '0.75rem', background: 'var(--color-accent)', color: 'var(--color-bg)',
            padding: '1rem', borderRadius: '6px', textAlign: 'center',
            fontFamily: 'var(--font-body)', fontWeight: 700, textDecoration: 'none', fontSize: '1.1rem',
          }}>
            Call {phone}
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
