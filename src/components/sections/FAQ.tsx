'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { Section } from '../layout/Section'
import { Container } from '../layout/Container'
import { FAQSchema } from '../seo/FAQSchema'

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
    <>
      <FAQSchema />
      <Section id="faq">
        <Container className="max-w-4xl">
          <div itemScope itemType="https://schema.org/FAQPage">
            <div className="text-center mb-16 sm:mb-20">
              <h2 className="font-display text-h2 font-bold mb-5 tracking-tight">
                <span className="bg-grad-accent bg-clip-text text-transparent">
                  {t.faq.title}
                </span>
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <article
                  key={index}
                  itemScope
                  itemType="https://schema.org/Question"
                  className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-900/70 transition-colors"
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <h3 className="font-semibold text-white pr-4" itemProp="name">
                      {faq.question}
                    </h3>
                    <svg
                      className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openIndex === index && (
                    <div
                      id={`faq-answer-${index}`}
                      className="px-6 pb-4"
                      itemScope
                      itemType="https://schema.org/Answer"
                    >
                      <p className="text-text-1 text-small leading-body" itemProp="text">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
