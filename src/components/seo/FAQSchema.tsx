'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { useEffect } from 'react'

export function FAQSchema() {
  const { language, t } = useLanguage()

  useEffect(() => {
    // Wait for client-side hydration
    if (typeof window === 'undefined') return

    const faqItems = [
      t.faq.items.q1,
      t.faq.items.q2,
      t.faq.items.q3,
      t.faq.items.q4,
      t.faq.items.q5,
      t.faq.items.q6,
    ]

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    }

    // Remove existing FAQ schema if present
    const existingSchema = document.querySelector('script[data-faq-schema]')
    if (existingSchema) {
      existingSchema.remove()
    }

    // Add new FAQ schema
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-faq-schema', 'true')
    script.textContent = JSON.stringify(faqSchema)
    document.head.appendChild(script)

    return () => {
      const schema = document.querySelector('script[data-faq-schema]')
      if (schema) {
        schema.remove()
      }
    }
  }, [language, t])

  return null
}
