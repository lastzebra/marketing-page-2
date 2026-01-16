'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { Section } from '../ui/Section'
import { Container } from '../ui/Container'
import { Card } from '../ui/Card'

export function ForWhom() {
  const { t } = useLanguage()

  const groups = [
    {
      icon: (
        <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
      bgColor: 'bg-violet-500/10',
      hoverBorder: 'hover:border-violet-500/50',
      ...t.forWhom.djs,
    },
    {
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      bgColor: 'bg-cyan-500/10',
      hoverBorder: 'hover:border-cyan-500/50',
      ...t.forWhom.producers,
    },
    {
      icon: (
        <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      bgColor: 'bg-amber-500/10',
      hoverBorder: 'hover:border-amber-500/50',
      ...t.forWhom.musicLovers,
    },
    {
      icon: (
        <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      bgColor: 'bg-violet-500/10',
      hoverBorder: 'hover:border-violet-500/50',
      ...t.forWhom.beginners,
    },
  ]

  return (
    <Section id="for-whom">
      <Container>
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="font-display text-h2 font-bold mb-5 tracking-tight">
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {t.forWhom.title}
            </span>
          </h2>
          <p className="text-body-lg text-text-1 max-w-2xl mx-auto leading-body">
            {t.forWhom.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((group, index) => (
            <Card key={index} className={group.hoverBorder}>
              <div className={`w-12 h-12 mb-5 ${group.bgColor} rounded-lg flex items-center justify-center`}>
                {group.icon}
              </div>
              <h3 className="font-display text-h3 font-semibold mb-3 text-text-0">{group.title}</h3>
              <p className="text-text-1 leading-body text-small">{group.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
