'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { Section } from '../layout/Section'
import { Container } from '../layout/Container'
import { Button } from '../ui/Button'
import { LINKS } from '@/config/links'

export function FinalCTA() {
  const { t } = useLanguage()

  return (
    <Section className="relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-violet/5 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="font-display text-h1 font-bold mb-6 tracking-tight">
          <span className="bg-grad-accent bg-clip-text text-transparent">
            {t.cta.title}
          </span>
        </h2>
        <p className="text-body-lg text-text-1 mb-10 max-w-2xl mx-auto leading-body">
          {t.cta.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <Button as="link" href={LINKS.app} variant="primary">{t.cta.buttons.openApp}</Button>
          <Button as="link" href={LINKS.community} variant="secondary">{t.cta.buttons.joinCommunity}</Button>
          <Button as="link" href={LINKS.earlyAccess} variant="secondary">{t.cta.buttons.earlyAccess}</Button>
        </div>
      </Container>
    </Section>
  )
}
