'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from '../ui/Button'
import { LanguageToggle } from '../ui/LanguageToggle'
import { Container } from './Container'
import { LINKS } from '@/config/links'

export function Header() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Close mobile menu on scroll
    if (mobileMenuOpen) {
      const handleScroll = () => setMobileMenuOpen(false)
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const scrollToSection = (id: string) => {
    // Check if we're on the homepage
    const isHomepage = window.location.pathname === '/' || window.location.pathname === ''
    
    if (isHomepage) {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      // Navigate to homepage with anchor
      window.location.href = `/#${id}`
    }
    setMobileMenuOpen(false)
  }

  const navItems = [
    { id: 'about', label: t.nav.about },
    { id: 'for-whom', label: t.nav.forWhom },
    { id: 'benefits', label: t.nav.benefits },
    { id: 'features', label: t.nav.features },
    { id: 'how-it-works', label: t.nav.howItWorks },
    { id: 'community', label: t.nav.community },
    { id: 'testimonials', label: t.nav.testimonials },
    { id: 'faq', label: t.nav.faq },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-0/80 backdrop-blur-sm border-b border-surface-1'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          <a
            href="/"
            onClick={(e) => {
              const isHomepage = window.location.pathname === '/' || window.location.pathname === ''
              if (isHomepage) {
                e.preventDefault()
                scrollToSection('hero')
              }
              // Otherwise, let the link navigate normally to homepage
            }}
            className="font-display text-h3 font-bold bg-grad-accent bg-clip-text text-transparent cursor-pointer focus:outline-none focus:ring-2 focus:ring-violet/50 focus:ring-offset-2 focus:ring-offset-bg-0 rounded flex-shrink-0"
            aria-label="Vibe - Home"
          >
            Vibe
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center flex-1 justify-center mx-6" aria-label="Main navigation">
            <div className="flex items-center w-full max-w-5xl justify-between">
              {navItems.map((item) => {
                const isHomepage = typeof window !== 'undefined' && (window.location.pathname === '/' || window.location.pathname === '')
                return (
                  <a
                    key={item.id}
                    href={isHomepage ? `#${item.id}` : `/#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item.id)
                    }}
                    className="text-small text-text-1 hover:text-text-0 transition-colors focus:outline-none focus:ring-2 focus:ring-violet/50 focus:ring-offset-2 focus:ring-offset-bg-0 rounded px-2 py-1 flex-1 text-center"
                  >
                    {item.label}
                  </a>
                )
              })}
            </div>
          </nav>

          <div className="flex items-center gap-3 lg:gap-4 flex-shrink-0">
            <LanguageToggle />
            <Button 
              as="link" 
              href={LINKS.app} 
              variant="primary"
              className="hidden sm:inline-flex"
            >
              {t.nav.openApp}
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-text-1 hover:text-text-0 transition-colors focus:outline-none focus:ring-2 focus:ring-violet/50 focus:ring-offset-2 focus:ring-offset-bg-0 rounded"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className={`w-6 h-6 transition-transform ${mobileMenuOpen ? 'rotate-90' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav
            className="lg:hidden absolute top-16 left-0 right-0 bg-bg-0/95 backdrop-blur-sm border-b border-surface-1"
            aria-label="Mobile navigation"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => {
                const isHomepage = typeof window !== 'undefined' && (window.location.pathname === '/' || window.location.pathname === '')
                return (
                  <a
                    key={item.id}
                    href={isHomepage ? `#${item.id}` : `/#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item.id)
                    }}
                    className="block text-body text-text-1 hover:text-text-0 transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-violet/50 focus:ring-offset-2 focus:ring-offset-bg-0 rounded px-2"
                  >
                    {item.label}
                  </a>
                )
              })}
              <div className="pt-4 border-t border-surface-1">
                <Button
                  as="link"
                  href={LINKS.app}
                  variant="primary"
                  className="w-full justify-center"
                >
                  {t.nav.openApp}
                </Button>
              </div>
            </div>
          </nav>
        )}
      </Container>
    </header>
  )
}
