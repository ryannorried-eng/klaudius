import type { Metadata } from 'next'
import './globals.css'
import Nav from '../components/Nav'
import MobileCTABar from '../components/MobileCTABar'

export const metadata: Metadata = {
  title: 'Rodriguez Construction & Remodeling | Waco, TX',
  description: 'Rodriguez Construction & Remodeling — trusted contractor in Waco, TX. Home builds, additions, remodeling, painting. 4.9 stars. Free estimates. Call (254) 447-7325.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const businessName = 'Rodriguez Construction & Remodeling'
  const phone = '(254) 447-7325'
  const tagline = 'Waco, TX'
  const ctaText = 'Call Now — Free Estimate'

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
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
