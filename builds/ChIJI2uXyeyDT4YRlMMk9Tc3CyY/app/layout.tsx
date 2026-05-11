import './globals.css'

export const metadata = {
  title: 'Carlos & Sons Plumbing | Waco, TX',
  description: 'Waco\'s most-reviewed plumber. Best prices on water heaters, re-pipes, gas lines, and emergency repairs. Call (254) 277-2617.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;1,6..96,400&family=Space+Grotesk:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
