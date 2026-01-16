'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { Section } from '../layout/Section'
import { Container } from '../layout/Container'

export function HowItWorks() {
  const { t } = useLanguage()

  const steps = [
    {
      number: 1,
      color: 'violet',
      ...t.howItWorks.steps.step1,
    },
    {
      number: 2,
      color: 'cyan',
      ...t.howItWorks.steps.step2,
    },
    {
      number: 3,
      color: 'amber',
      ...t.howItWorks.steps.step3,
    },
  ]

  const colors = {
    violet: {
      bg: 'bg-violet-500/10',
      border: 'border-violet-500/20',
      text: 'text-violet-400',
    },
    cyan: {
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/20',
      text: 'text-cyan-400',
    },
    amber: {
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/20',
      text: 'text-amber-400',
    },
  }

  return (
    <Section id="how-it-works">
      <Container className="max-w-6xl">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="font-display text-h2 font-bold mb-5 tracking-tight">
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {t.howItWorks.title}
            </span>
          </h2>
          <p className="text-body-lg text-text-1 max-w-2xl mx-auto leading-body">
            {t.howItWorks.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const color = colors[step.color as keyof typeof colors]
            return (
              <div key={step.number} className="text-center">
                <div className={`w-16 h-16 mx-auto mb-6 ${color.bg} rounded-full flex items-center justify-center border ${color.border}`}>
                  <span className={`text-2xl font-bold ${color.text}`}>{step.number}</span>
                </div>
                <h3 className="font-display text-h3 font-semibold mb-4 text-text-0">{step.title}</h3>
                <p className="text-text-1 text-small leading-body">{step.description}</p>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
