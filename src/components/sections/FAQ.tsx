'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { Section } from '../ui/Section'
import { Container } from '../ui/Container'

export function FAQ() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    t.faq.items.q1,
    t.faq.items.q2,
    t.faq.items.q3,
    t.faq.items.q4,
    t.faq.items.q5,
    t.faq.items.q6,
  ]

  return (
    <Section id="faq">
      <Container className="max-w-4xl">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 tracking-tight">
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {t.faq.title}
            </span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-900/70 transition-colors"
              >
                <span className="font-semibold text-white pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
