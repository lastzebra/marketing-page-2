'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { Container } from './Container'
import { LINKS } from '@/config/links'

export function Footer() {
  const { t } = useLanguage()

  const scrollToSection = (id: string) => {
    // Check if we're on the homepage
    const isHomepage = typeof window !== 'undefined' && (window.location.pathname === '/' || window.location.pathname === '')
    
    if (isHomepage) {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      // Navigate to homepage with anchor
      window.location.href = `/#${id}`
    }
  }

  return (
    <footer
      role="contentinfo" className="border-t border-surface-1 bg-bg-0 py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-display text-h3 font-bold mb-4 bg-grad-accent bg-clip-text text-transparent">
              Vibe
            </h3>
            <p className="text-small text-text-1">
              {t.hero.subheadline}
            </p>
          </div>

          <div>
            <h4 className="text-small font-semibold mb-4 text-text-0">Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/#about"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('about')
                  }}
                  className="text-small text-text-1 hover:text-text-0 transition-colors"
                >
                  {t.footer.links.about}
                </a>
              </li>
              <li>
                <a
                  href="/#features"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('features')
                  }}
                  className="text-small text-text-1 hover:text-text-0 transition-colors"
                >
                  {t.footer.links.features}
                </a>
              </li>
              <li>
                <a
                  href="/#community"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('community')
                  }}
                  className="text-small text-text-1 hover:text-text-0 transition-colors"
                >
                  {t.footer.links.community}
                </a>
              </li>
              <li>
                <a
                  href="/#faq"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('faq')
                  }}
                  className="text-small text-text-1 hover:text-text-0 transition-colors"
                >
                  {t.footer.links.faq}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-small font-semibold mb-4 text-text-0">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={LINKS.privacy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-small text-text-1 hover:text-text-0 transition-colors"
                >
                  {t.footer.legal.privacy}
                </a>
              </li>
              <li>
                <a
                  href={LINKS.terms}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-small text-text-1 hover:text-text-0 transition-colors"
                >
                  {t.footer.legal.terms}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-small font-semibold mb-4 text-text-0">Connect</h4>
            <p className="text-small text-text-1 mb-4">
              Join the community and start creating.
            </p>
            <a
              href={LINKS.app}
              target="_blank"
              rel="noopener noreferrer"
              className="text-small text-violet hover:text-violet/80 transition-colors"
            >
              {t.nav.openApp} →
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-surface-1 text-center">
          <p className="text-small text-text-2">{t.footer.copyright}</p>
        </div>
      </Container>
    </footer>
  )
}
