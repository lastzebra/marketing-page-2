'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { Container } from './ui/Container'

export function Footer() {
  const { t } = useLanguage()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="border-t border-gray-800 bg-black py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Vibe
            </h3>
            <p className="text-sm text-gray-400">
              {t.hero.subheadline}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {t.footer.links.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {t.footer.links.features}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('community')}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {t.footer.links.community}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {t.footer.links.faq}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {t.footer.legal.privacy}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {t.footer.legal.terms}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Connect</h4>
            <p className="text-sm text-gray-400 mb-4">
              Join the community and start creating.
            </p>
            <button
              onClick={() => scrollToSection('hero')}
              className="text-sm text-violet-400 hover:text-violet-300 transition-colors"
            >
              {t.nav.openApp} →
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">{t.footer.copyright}</p>
        </div>
      </Container>
    </footer>
  )
}
