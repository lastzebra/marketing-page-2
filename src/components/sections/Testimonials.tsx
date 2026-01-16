'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { Section } from '../ui/Section'
import { Container } from '../ui/Container'
import { Card } from '../ui/Card'

export function Testimonials() {
  const { t } = useLanguage()

  const testimonials = [
    {
      quote: t.testimonials.items.dj.quote,
      name: t.testimonials.items.dj.name,
      location: t.testimonials.items.dj.location,
      color: 'violet',
    },
    {
      quote: t.testimonials.items.producer.quote,
      name: t.testimonials.items.producer.name,
      location: t.testimonials.items.producer.location,
      color: 'cyan',
    },
    {
      quote: t.testimonials.items.beginner.quote,
      name: t.testimonials.items.beginner.name,
      location: t.testimonials.items.beginner.location,
      color: 'amber',
    },
  ]

  const colors = {
    violet: {
      icon: 'text-violet-400',
      bg: 'bg-violet-500/20',
      initial: 'V',
    },
    cyan: {
      icon: 'text-cyan-400',
      bg: 'bg-cyan-500/20',
      initial: 'P',
    },
    amber: {
      icon: 'text-amber-400',
      bg: 'bg-amber-500/20',
      initial: 'M',
    },
  }

  return (
    <Section id="testimonials">
      <Container className="max-w-6xl">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="font-display text-h2 font-bold mb-5 tracking-tight">
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {t.testimonials.title}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => {
            const color = colors[testimonial.color as keyof typeof colors]
            return (
              <Card key={index}>
                <div className="mb-4">
                  <svg className={`w-8 h-8 ${color.icon}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-text-1 mb-6 text-small leading-body">{testimonial.quote}</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${color.bg} rounded-full flex items-center justify-center`}>
                    <span className={`${color.icon} font-semibold`}>{color.initial}</span>
                  </div>
                  <div>
                    <div className="text-small font-semibold text-text-0">{testimonial.name}</div>
                    <div className="text-small text-text-2">{testimonial.location}</div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
