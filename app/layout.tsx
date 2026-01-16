import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Find Your Vibe. Build Sets. Create Sound. | Vibe',
  description: 'A playful music app for DJs and sound explorers — discover tracks, build sets and generate your own music.',
  keywords: ['DJ', 'music production', 'electronic music', 'melodic techno', 'deep house', 'AI music generation', 'music discovery'],
  authors: [{ name: 'Vibe' }],
  openGraph: {
    title: 'Find Your Vibe. Build Sets. Create Sound.',
    description: 'A playful music app for DJs and sound explorers — discover tracks, build sets and generate your own music.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'de_DE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Find Your Vibe. Build Sets. Create Sound.',
    description: 'A playful music app for DJs and sound explorers — discover tracks, build sets and generate your own music.',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  )
}
