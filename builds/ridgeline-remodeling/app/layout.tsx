import type { Metadata } from 'next'
import './globals.css'
import Nav from '../components/Nav'
import MobileCTABar from '../components/MobileCTABar'

export const metadata: Metadata = {
  title: 'Ridgeline Remodeling | Waco, TX',
  description: 'Waco\'s trusted remodeling contractor since 2009. Kitchen remodels, bathroom renovations, whole-home remodels. Licensed & insured. Free estimates. (254) 401-7820.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const phone = '(254) 401-7820'

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Nav phone={phone} />
        {children}
        <MobileCTABar phone={phone} />
      </body>
    </html>
  )
}
