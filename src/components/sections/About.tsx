'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { Section } from '../ui/Section'
import { Container } from '../ui/Container'
import { Card } from '../ui/Card'

export function About() {
  const { t } = useLanguage()

  const features = [
    {
      icon: (
        <svg className="w-5 h-5 text-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      bgColor: 'bg-violet/10',
      ...t.about.features.discover,
    },
    {
      icon: (
        <svg className="w-5 h-5 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
      bgColor: 'bg-cyan/10',
      ...t.about.features.buildSets,
    },
    {
      icon: (
        <svg className="w-5 h-5 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      bgColor: 'bg-amber/10',
      ...t.about.features.generate,
    },
    {
      icon: (
        <svg className="w-5 h-5 text-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      bgColor: 'bg-violet/10',
      ...t.about.features.stayInspired,
    },
  ]

  return (
    <Section id="about">
      <Container>
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 tracking-tight">
            <span className="bg-grad-glow bg-clip-text text-transparent">
              {t.about.title}
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-text-1 max-w-2xl mx-auto leading-relaxed">
            {t.about.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card key={index}>
              <div className={`w-10 h-10 mb-5 ${feature.bgColor} rounded-md flex items-center justify-center`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-text-0">{feature.title}</h3>
              <p className="text-text-1 leading-relaxed text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
