import './globals.css'

export const metadata = {
  title: "White's Plumbing | Waco, TX",
  description: 'Fast, honest, fair. White\'s Plumbing serves Waco and surrounding areas 24/7. Call (254) 716-8849.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
