'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 text-small rounded-md transition-all ${
          language === 'en'
            ? 'bg-dark-green/20 text-dark-green'
            : 'text-text-2 hover:text-text-1'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('de')}
        className={`px-3 py-1.5 text-small rounded-md transition-all ${
          language === 'de'
            ? 'bg-dark-green/20 text-dark-green'
            : 'text-text-2 hover:text-text-1'
        }`}
      >
        DE
      </button>
    </div>
  )
}
