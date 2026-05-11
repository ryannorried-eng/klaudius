// Overwritten per business. Update businessName, phone, metadata, and Google Fonts URL.
import './globals.css'
import Nav from '../components/Nav'
import MobileCTABar from '../components/MobileCTABar'

// Set title to "{Business Name} | {City}" and description with local keywords (max 150 chars)
export const metadata = {
  title: 'BUSINESS_NAME | CITY',
  description: 'BUSINESS_NAME — professional CATEGORY services in CITY. Licensed & insured. Free estimates. Call today.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const businessName = 'BUSINESS_NAME'
  const phone = 'PHONE'
  // ctaText should match aura tone (e.g. "Call Now — Free Estimate" / "Call Now — 24/7 Service")
  const ctaText = 'Call Now — Free Estimate'

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* Replace GOOGLE_FONTS_URL with the google_fonts value from the chosen design system JSON */}
        <link href="https://fonts.googleapis.com/css2?family=GOOGLE_FONTS_URL&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Nav businessName={businessName} phone={phone} />
        {children}
        <MobileCTABar phone={phone} ctaText={ctaText} />
      </body>
    </html>
  )
}
