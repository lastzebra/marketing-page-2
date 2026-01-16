'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from './ui/Button'
import { LanguageToggle } from './ui/LanguageToggle'

export function Navigation() {
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-0/80 backdrop-blur-sm border-b border-surface-1'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold bg-grad-glow bg-clip-text text-transparent"
          >
            Vibe
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-text-1 hover:text-text-0 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <LanguageToggle />
            <Button variant="primary" onClick={() => scrollToSection('hero')}>
              {t.nav.openApp}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
