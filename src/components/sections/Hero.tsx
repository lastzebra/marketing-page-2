'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from '../ui/Button'
import { Section } from '../ui/Section'
import { Container } from '../ui/Container'

export function Hero() {
  const { t } = useLanguage()

  return (
    <Section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-violet-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <Container className="relative z-10 text-center space-y-10 sm:space-y-12">
        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight">
          <span className="block bg-gradient-to-r from-violet-400 via-cyan-400 to-amber-400 bg-clip-text text-transparent">
            {t.hero.headline.line1}
          </span>
          <span className="block mt-3 sm:mt-4 bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-400 bg-clip-text text-transparent">
            {t.hero.headline.line2}
          </span>
          <span className="block mt-3 sm:mt-4 bg-gradient-to-r from-amber-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
            {t.hero.headline.line3}
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-normal">
          {t.hero.subheadline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 pt-6">
          <Button variant="primary">{t.hero.ctaPrimary}</Button>
          <Button variant="secondary">{t.hero.ctaSecondary}</Button>
        </div>
      </Container>
    </Section>
  )
}
