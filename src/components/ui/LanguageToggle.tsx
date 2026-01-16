'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 text-sm rounded transition-all ${
          language === 'en'
            ? 'bg-violet-500/20 text-violet-300'
            : 'text-gray-500 hover:text-gray-300'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('de')}
        className={`px-3 py-1.5 text-sm rounded transition-all ${
          language === 'de'
            ? 'bg-violet-500/20 text-violet-300'
            : 'text-gray-500 hover:text-gray-300'
        }`}
      >
        DE
      </button>
    </div>
  )
}
