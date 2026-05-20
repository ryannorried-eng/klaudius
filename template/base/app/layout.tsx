// Overwritten per business.
// Replace: BUSINESS_NAME, CITY, CATEGORY, PHONE, GOOGLE_FONTS_URL, ctaText
// title format: "{Business Name} | {City}"
// description: local-keyword-rich, max 150 chars
import type { Metadata } from 'next'
import './globals.css'
import Nav from '../components/Nav'
import MobileCTABar from '../components/MobileCTABar'

export const metadata: Metadata = {
  title: 'BUSINESS_NAME | CITY',
  description: 'BUSINESS_NAME — professional CATEGORY services in CITY. Licensed & insured. Free estimates. Call today.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const businessName = 'BUSINESS_NAME'
  const phone = 'PHONE'
  // tagline: short city + est. year — e.g. "Long Beach · Est. 2011" (optional)
  const tagline = 'CITY'
  // ctaText: match aura tone — "Call Now — 24/7 Service" / "Call Now — Free Estimate"
  const ctaText = 'Call Now — Free Estimate'

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* Replace GOOGLE_FONTS_URL with the google_fonts value from the chosen design system JSON */}
        <link href="GOOGLE_FONTS_URL" rel="stylesheet" />
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
