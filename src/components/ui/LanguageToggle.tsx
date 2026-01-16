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
            ? 'bg-accent-purple/20 text-accent-purple'
            : 'text-text-2 hover:text-text-1'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('de')}
        className={`px-3 py-1.5 text-small rounded-md transition-all ${
          language === 'de'
            ? 'bg-accent-purple/20 text-accent-purple'
            : 'text-text-2 hover:text-text-1'
        }`}
      >
        DE
      </button>
    </div>
  )
}
