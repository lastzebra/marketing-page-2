'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { Section } from '../layout/Section'
import { Container } from '../layout/Container'

export function Stats() {
  const { t } = useLanguage()

  const stats = [
    {
      value: t.stats.genres.value,
      title: t.stats.genres.title,
      description: t.stats.genres.description,
      gradient: 'from-cyan to-teal',
    },
    {
      value: t.stats.tracks.value,
      title: t.stats.tracks.title,
      description: t.stats.tracks.description,
      gradient: 'from-cyan to-amber',
    },
    {
      value: t.stats.sets.value,
      title: t.stats.sets.title,
      description: t.stats.sets.description,
      gradient: 'from-amber to-violet',
    },
  ]

  return (
    <Section id="stats">
      <Container className="max-w-6xl">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="font-display text-h2 font-bold mb-5 tracking-tight">
            <span className="bg-grad-accent bg-clip-text text-transparent">
              {t.stats.title}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 bg-surface-0/60 border border-surface-1 rounded-xl">
              <div className={`text-5xl sm:text-6xl font-bold mb-3 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <h3 className="font-display text-h3 font-semibold mb-2 text-text-0">{stat.title}</h3>
              <p className="text-text-1 text-small">{stat.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
