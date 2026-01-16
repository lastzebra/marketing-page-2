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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
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
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('hero')
            }}
            className="font-display text-h3 font-bold bg-grad-accent bg-clip-text text-transparent cursor-pointer"
          >
            Vibe
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.id)
                }}
                className="text-small text-text-1 hover:text-text-0 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <LanguageToggle />
            <Button as="link" href={LINKS.app} variant="primary">
              {t.nav.openApp}
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}
