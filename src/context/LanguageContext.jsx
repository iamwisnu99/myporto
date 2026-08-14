import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from '../locales'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    // Check local storage first
    const saved = localStorage.getItem('porto_lang')
    if (saved) return saved
    
    // Check browser preference
    const browserLang = navigator.language || navigator.userLanguage
    return browserLang.toLowerCase().includes('id') ? 'id' : 'en'
  })

  // Save to local storage on change
  useEffect(() => {
    localStorage.setItem('porto_lang', lang)
  }, [lang])

  const t = (section, key) => {
    // If key is provided, access nested object. If not, just return the whole section object.
    if (!key) return translations[lang][section]
    return translations[lang][section][key]
  }

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'id' : 'en'))
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, setLanguage: setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
