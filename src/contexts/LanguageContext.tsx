'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { copyEn } from '@/content/copy.en'
import { copyDe } from '@/content/copy.de'

type Language = 'en' | 'de'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof copyEn
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    // Check localStorage or browser language
    const saved = localStorage.getItem('language') as Language
    const browserLang = navigator.language.startsWith('de') ? 'de' : 'en'
    setLanguageState(saved || browserLang)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const t = language === 'de' ? copyDe : copyEn

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
