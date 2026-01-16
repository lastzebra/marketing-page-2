'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from '../ui/Button'
import { Section } from '../layout/Section'
import { Container } from '../layout/Container'
import { LINKS } from '@/config/links'

export function Hero() {
  const { t } = useLanguage()

  return (
    <Section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      {/* Hero Background Gradient */}
      <div className="absolute inset-0 overflow-hidden bg-grad-hero animate-gradient"></div>

      {/* Content */}
      <Container className="relative z-10 text-center space-y-10 sm:space-y-12">
        {/* Headline */}
        <h1 className="font-display text-h1 font-bold leading-tight tracking-tight">
          <span className="block bg-grad-accent bg-clip-text text-transparent">
            {t.hero.headline.line1}
          </span>
          <span className="block mt-3 sm:mt-4 bg-grad-accent bg-clip-text text-transparent">
            {t.hero.headline.line2}
          </span>
          <span className="block mt-3 sm:mt-4 bg-grad-accent bg-clip-text text-transparent">
            {t.hero.headline.line3}
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-body-lg text-text-1 max-w-2xl mx-auto leading-body font-normal">
          {t.hero.subheadline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 pt-6">
          <Button as="link" href={LINKS.app} variant="primary">{t.hero.ctaPrimary}</Button>
          <Button as="link" href={LINKS.demo} variant="secondary">{t.hero.ctaSecondary}</Button>
        </div>
      </Container>
    </Section>
  )
}
