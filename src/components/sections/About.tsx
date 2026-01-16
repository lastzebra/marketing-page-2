'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { Section } from '../layout/Section'
import { Container } from '../layout/Container'
import { Card } from '../ui/Card'

export function About() {
  const { t } = useLanguage()

  const features = [
    {
      icon: (
        <svg className="w-7 h-7 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z M10.5 7.5v6m3-3h-6" />
        </svg>
      ),
      bgColor: 'bg-accent-purple/10',
      ...t.about.features.discover,
    },
    {
      icon: (
        <svg className="w-7 h-7 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
        </svg>
      ),
      bgColor: 'bg-cyan/10',
      ...t.about.features.buildSets,
    },
    {
      icon: (
        <svg className="w-7 h-7 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      ),
      bgColor: 'bg-amber/10',
      ...t.about.features.generate,
    },
    {
      icon: (
        <svg className="w-7 h-7 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      bgColor: 'bg-accent-purple/10',
      ...t.about.features.stayInspired,
    },
  ]

  return (
    <Section id="about">
      <Container>
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="font-display text-h2 font-bold mb-5 tracking-tight">
            <span className="bg-grad-accent bg-clip-text text-transparent">
              {t.about.title}
            </span>
          </h2>
          <p className="text-body-lg text-text-1 max-w-2xl mx-auto leading-body">
            {t.about.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card key={index}>
              <div className={`w-14 h-14 mb-5 ${feature.bgColor} rounded-lg flex items-center justify-center`}>
                {feature.icon}
              </div>
              <h3 className="font-display text-h3 font-semibold mb-3 text-text-0">{feature.title}</h3>
              <p className="text-text-1 leading-body text-small">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
