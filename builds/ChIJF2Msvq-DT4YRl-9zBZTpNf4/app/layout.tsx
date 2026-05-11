import './globals.css'

export const metadata = {
  title: 'Declan & Sons Plumbing | Waco, TX',
  description: 'Waco\'s trusted 24/7 plumber. Boilers, water heaters, pipe replacement, drain cleaning. Call (254) 294-3299.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
