import type { Metadata } from 'next'
import './globals.css'
import Nav from '../components/Nav'
import MobileCTABar from '../components/MobileCTABar'

export const metadata: Metadata = {
  title: 'Prestige Construction & Remodeling LLC | Waco, TX',
  description: 'Prestige Construction & Remodeling — general contractor in Waco, TX. Kitchen remodels, room additions, renovations. Open 7 days. Free estimates. Call (254) 981-4152.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const businessName = 'Prestige Construction & Remodeling'
  const phone = '(254) 981-4152'
  const tagline = 'Waco, TX · Open 7 Days'
  const ctaText = 'Call Now — Free Estimate'

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Nav businessName={businessName} phone={phone} tagline={tagline} />
        {children}
        <MobileCTABar phone={phone} ctaText={ctaText} />
      </body>
    </html>
  )
}
