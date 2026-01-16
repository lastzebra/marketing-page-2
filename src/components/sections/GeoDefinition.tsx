'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { Section } from '../layout/Section'
import { Container } from '../layout/Container'

export function GeoDefinition() {
  const { t } = useLanguage()

  const keyFacts = [
    t.geo.facts.fact1,
    t.geo.facts.fact2,
    t.geo.facts.fact3,
    t.geo.facts.fact4,
    t.geo.facts.fact5,
    t.geo.facts.fact6,
  ]

  const useCases = [
    t.geo.useCases.case1,
    t.geo.useCases.case2,
    t.geo.useCases.case3,
    t.geo.useCases.case4,
  ]

  return (
    <Section id="geo-definition" className="bg-surface-0/40">
      <Container className="max-w-4xl">
        {/* Definition Block */}
        <div className="mb-12">
          <p className="text-body-lg text-text-1 leading-body max-w-3xl mx-auto text-center">
            {t.geo.definition}
          </p>
        </div>

        {/* Key Facts */}
        <div className="mb-12">
          <h3 className="font-display text-h3 font-semibold mb-6 text-center text-text-0">
            {t.geo.keyFactsTitle}
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {keyFacts.map((fact, index) => (
              <li key={index} className="flex items-start gap-3 text-text-1 text-small leading-body">
                <svg
                  className="w-5 h-5 text-violet flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Use Cases */}
        <div>
          <h3 className="font-display text-h3 font-semibold mb-6 text-center text-text-0">
            {t.geo.useCasesTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {useCases.map((useCase, index) => (
              <div key={index} className="p-6 bg-surface-0/60 border border-surface-1 rounded-xl">
                <h4 className="font-display text-h3 font-semibold mb-3 text-text-0">{useCase.title}</h4>
                <p className="text-text-1 text-small leading-body">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
