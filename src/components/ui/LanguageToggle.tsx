'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-2 text-small rounded-md transition-all min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-violet/50 focus:ring-offset-2 focus:ring-offset-bg-0 ${
          language === 'en'
            ? 'bg-violet/20 text-violet'
            : 'text-text-2 hover:text-text-1'
        }`}
        aria-label="Switch to English"
        aria-pressed={language === 'en'}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('de')}
        className={`px-3 py-2 text-small rounded-md transition-all min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-violet/50 focus:ring-offset-2 focus:ring-offset-bg-0 ${
          language === 'de'
            ? 'bg-violet/20 text-violet'
            : 'text-text-2 hover:text-text-1'
        }`}
        aria-label="Switch to German"
        aria-pressed={language === 'de'}
      >
        DE
      </button>
    </div>
  )
}
