import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Find Your Vibe. Build Sets. Create Sound.',
  description: 'A playful music app for DJs and sound explorers — discover tracks, build sets and generate your own music.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
