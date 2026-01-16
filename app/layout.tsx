import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hallo Züri! ',
  description: 'Eine einfache Hallo Welt Webseite',
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
