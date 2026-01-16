'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { Section } from '../layout/Section'
import { Container } from '../layout/Container'

export function Benefits() {
  const { t } = useLanguage()

  const benefits = [
    { icon: 'dark-green', ...t.benefits.items.discover },
    { icon: 'cyan', ...t.benefits.items.buildSets },
    { icon: 'amber', ...t.benefits.items.generate },
    { icon: 'dark-green', ...t.benefits.items.workflows },
    { icon: 'cyan', ...t.benefits.items.filters },
    { icon: 'amber', ...t.benefits.items.export },
  ]

  const iconColors = {
    dark-green: 'text-dark-green-400',
    cyan: 'text-cyan-400',
    amber: 'text-amber-400',
  }

  return (
    <Section id="benefits">
      <Container>
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="font-display text-h2 font-bold mb-5 tracking-tight">
            <span className="bg-gradient-to-r from-dark-green-400 to-cyan-400 bg-clip-text text-transparent">
              {t.benefits.title}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4 p-6 bg-gray-900/30 border border-gray-800 rounded-xl">
              <div className="w-6 h-6 mt-0.5 flex-shrink-0">
                <svg className={`w-8 h-8 ${iconColors[benefit.icon as keyof typeof iconColors]}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-h3 font-semibold mb-2 text-text-0">{benefit.title}</h3>
                <p className="text-text-1 text-small">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
