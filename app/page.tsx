'use client'

import { LanguageProvider } from '@/contexts/LanguageContext'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { ForWhom } from '@/components/sections/ForWhom'
import { Benefits } from '@/components/sections/Benefits'
import { Features } from '@/components/sections/Features'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Community } from '@/components/sections/Community'
import { Stats } from '@/components/sections/Stats'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { FinalCTA } from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-bg-0 text-text-0 overflow-hidden relative">
        <Header />
        <Hero />
        <About />
        <ForWhom />
        <Benefits />
        <Features />
        <HowItWorks />
        <Community />
        <Stats />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
