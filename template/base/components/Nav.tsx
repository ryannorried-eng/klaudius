'use client'
import { useState } from 'react'
import Link from 'next/link'

type NavProps = {
  businessName: string
  phone: string
  tagline?: string  // e.g. "Long Beach · Est. 2011" — short city + founding info
}

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav({ businessName, phone, tagline }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'color-mix(in srgb, var(--color-bg) 97%, transparent)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid var(--color-border)',
        padding: '0 clamp(1rem, 5vw, 2.5rem)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '68px',
      }}>
        <Link href="/" style={{
          display: 'flex', flexDirection: 'column', gap: '1px',
          textDecoration: 'none',
        }}>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            color: 'var(--color-fg)',
            fontSize: 'clamp(0.9rem, 2.2vw, 1.125rem)',
            letterSpacing: '-0.01em',
            lineHeight: 1.1,
          }}>
            {businessName}
          </span>
          {tagline && (
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.6875rem',
              color: 'var(--color-accent)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontWeight: 500,
            }}>
              {tagline}
            </span>
          )}
        </Link>

        <div className="nav-desktop" style={{
          display: 'flex', gap: '1.875rem', alignItems: 'center',
        }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{
              color: 'var(--color-fg)', textDecoration: 'none',
              fontFamily: 'var(--font-body)', fontSize: '0.875rem',
              fontWeight: 400, opacity: 0.7, letterSpacing: '0.01em',
            }}>
              {l.label}
            </Link>
          ))}
          <a href={`tel:${phone}`} style={{
            background: 'var(--color-accent)',
            color: 'var(--color-bg)',
            padding: '0.5rem 1.25rem',
            borderRadius: '4px',
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            textDecoration: 'none',
            fontSize: '0.875rem',
            whiteSpace: 'nowrap',
            letterSpacing: '0.01em',
          }}>
            {phone}
          </a>
        </div>

        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none', background: 'none', border: 'none',
            cursor: 'pointer', padding: '0.5rem',
            color: 'var(--color-fg)', fontSize: '1.375rem', lineHeight: 1,
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, top: '68px', zIndex: 99,
          background: 'var(--color-bg)',
          padding: '2.5rem clamp(1rem, 5vw, 2.5rem)',
          display: 'flex', flexDirection: 'column', gap: '0',
          overflowY: 'auto',
        }}>
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: 'var(--color-fg)', textDecoration: 'none',
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 6vw, 2.25rem)',
                fontWeight: 700,
                borderBottom: '1px solid var(--color-border)',
                padding: '1.25rem 0',
                letterSpacing: '-0.01em',
              }}
            >
              <span style={{
                color: 'var(--color-accent)', fontSize: '0.75rem',
                marginRight: '0.75rem', fontFamily: 'var(--font-body)',
                letterSpacing: '0.05em',
              }}>
                0{i + 1}
              </span>
              {l.label}
            </Link>
          ))}
          <a
            href={`tel:${phone}`}
            style={{
              marginTop: '2rem',
              background: 'var(--color-accent)',
              color: 'var(--color-bg)',
              padding: '1rem 1.5rem',
              borderRadius: '4px',
              textAlign: 'center',
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              textDecoration: 'none',
              fontSize: '1.0625rem',
              letterSpacing: '0.01em',
            }}
          >
            Call {phone}
          </a>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: '0.75rem',
              border: '1px solid var(--color-border)',
              color: 'var(--color-fg)',
              padding: '1rem 1.5rem',
              borderRadius: '4px',
              textAlign: 'center',
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              textDecoration: 'none',
              fontSize: '1rem',
            }}
          >
            Free Estimate
          </Link>
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
