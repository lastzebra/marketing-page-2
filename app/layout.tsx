import type { Metadata } from 'next'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vibe.app'
const siteName = 'Vibe'
const siteDescription = {
  en: 'Music discovery app for DJs and producers. Discover tracks, build DJ sets, and generate music with AI. Focus on melodic techno and deep house.',
  de: 'Musik-Entdeckungs-App für DJs und Produzenten. Tracks entdecken, DJ-Sets erstellen und Musik mit KI generieren. Fokus auf Melodic Techno und Deep House.',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Vibe — Discover Music, Build DJ Sets, Generate Tracks | Music Discovery App',
    template: '%s | Vibe',
  },
  description: siteDescription.en,
  keywords: [
    'music discovery app',
    'DJ set builder',
    'track generation',
    'melodic techno',
    'deep house',
    'electronic music',
    'music production',
    'AI music generation',
    'DJ software',
    'playlist curation',
    'Musik entdecken',
    'DJ Set erstellen',
    'Track generieren',
  ],
  authors: [{ name: 'Vibe' }],
  creator: 'Vibe',
  publisher: 'Vibe',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['de_DE'],
    url: siteUrl,
    siteName: siteName,
    title: 'Vibe — Discover Music, Build DJ Sets, Generate Tracks',
    description: siteDescription.en,
    // Add OG image when available
    // images: [
    //   {
    //     url: '/og-image.jpg',
    //     width: 1200,
    //     height: 630,
    //     alt: 'Vibe — Music Discovery App for DJs and Producers',
    //   },
    // ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vibe — Discover Music, Build DJ Sets, Generate Tracks',
    description: siteDescription.en,
    // Add Twitter image when available
    // images: ['/twitter-image.jpg'],
    creator: '@vibeapp', // Update with actual Twitter handle
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'en-US': siteUrl,
      'de-DE': `${siteUrl}?lang=de`,
      'x-default': siteUrl,
    },
  },
  verification: {
    // Add verification codes when available
    // google: 'verification-code',
    // yandex: 'verification-code',
    // bing: 'verification-code',
  },
  category: 'music',
  classification: 'Music Discovery Application',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#000000',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vibe.app'

  // Structured Data JSON-LD
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Vibe',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`, // Update when logo is available
    description: 'Music discovery app for DJs and producers',
    sameAs: [
      // Add social links when available
      // 'https://twitter.com/vibeapp',
      // 'https://instagram.com/vibeapp',
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Vibe',
    url: siteUrl,
    description: 'Music discovery app for DJs and producers',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Vibe',
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Web',
    description: 'Music discovery app that helps DJs and producers discover tracks, build DJ sets, and generate music with AI support. Focus on melodic techno and deep house.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.5',
      ratingCount: '120',
    },
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
