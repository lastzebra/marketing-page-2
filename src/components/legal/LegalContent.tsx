'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { legalEn } from '@/content/legal.en'
import { legalDe } from '@/content/legal.de'

interface LegalContentProps {
  type: 'terms' | 'privacy'
}

export function LegalContent({ type }: LegalContentProps) {
  const { language } = useLanguage()
  const content = language === 'de' ? legalDe[type] : legalEn[type]

  return (
    <article className="prose prose-invert max-w-none">
      <header className="mb-12">
        <h1 className="font-display text-h1 font-bold mb-4 tracking-tight">
          <span className="bg-grad-accent bg-clip-text text-transparent">
            {content.title}
          </span>
        </h1>
        <p className="text-small text-text-2">{content.lastUpdated}</p>
      </header>

      <div className="space-y-10">
        {Object.values(content.sections).map((section, index) => (
          <section key={index} className="space-y-4">
            <h2 className="font-display text-h2 font-semibold text-text-0 mb-4">
              {section.title}
            </h2>
            <div className="space-y-3">
              {section.content.map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  className="text-body text-text-1 leading-body"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  )
}
