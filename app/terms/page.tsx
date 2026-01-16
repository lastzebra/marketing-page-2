import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/layout/Container'
import { LegalContent } from '@/components/legal/LegalContent'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata: Metadata = {
  title: 'Terms of Service | Vibe',
  description: 'Terms of Service for Vibe - Music discovery app for DJs and producers.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-bg-0 text-text-0">
        <Header />
        <div className="pt-16 pb-20">
          <Container className="max-w-4xl">
            <LegalContent type="terms" />
          </Container>
        </div>
        <Footer />
      </main>
    </LanguageProvider>
  )
}
