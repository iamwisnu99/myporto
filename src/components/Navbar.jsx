import { useState, useEffect, useCallback } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'

const sectionConfigs = [
  { id: 'about', href: '#about' },
  { id: 'expertise', href: '#expertise' },
  { id: 'ai', href: '#ai' },
  { id: 'business', href: '#business' },
  { id: 'contact', href: '#contact' },
]

// Detect active section based on actual DOM scroll position
function getActiveSection() {
  const OFFSET = 130
  const sectionIds = sectionConfigs.map((l) => l.href.replace('#', ''))

  // Sort by actual DOM position (top to bottom)
  const positions = sectionIds
    .map((id) => ({ id, el: document.getElementById(id) }))
    .filter(({ el }) => el !== null)
    .sort((a, b) => a.el.offsetTop - b.el.offsetTop)

  let current = ''
  for (const { id, el } of positions) {
    if (window.scrollY >= el.offsetTop - OFFSET) {
      current = id
    }
  }
  return current
}

export default function Navbar() {
  const { lang, setLanguage, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20)
    setActiveSection(getActiveSection())
  }, [])

  useEffect(() => {
    // Run once on mount to set initial state
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const handleLinkClick = (id) => {
    setActiveSection(id)
    setMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 glass-nav transition-all duration-300 ${isScrolled
          ? 'bg-surface-container-lowest/90 shadow-sm border-b border-outline-variant/20'
          : 'bg-transparent'
        }`}
    >
      <div className="flex justify-between items-center max-w-container-max mx-auto px-5 h-20">
        {/* Logo */}
        <a
          href="#"
          className="font-bold text-h2-mobile text-primary tracking-tight hover:text-primary-light transition-colors duration-300"
        >
          Prima Wisnu
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {sectionConfigs.map((link) => {
            const id = link.href.replace('#', '')
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(id)}
                className={`text-body-md transition-colors duration-200 hover:text-primary ${activeSection === id
                    ? 'text-primary font-semibold'
                    : 'text-on-surface-variant'
                  }`}
              >
                {t('nav', link.id)}
              </a>
            )
          })}
        </div>

        {/* Desktop CTA & Language Dropdown & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4 ml-4">
          <button
            onClick={toggleTheme}
            className="flex h-11 w-11 items-center justify-center text-primary bg-background-soft border border-outline-variant/30 rounded-lg hover:bg-background-blue transition-colors"
            aria-label="Toggle Theme"
          >
            <span className="material-symbols-outlined text-[20px]">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex h-11 items-center gap-2 text-body-sm font-bold text-primary bg-background-soft border border-outline-variant/30 px-3 rounded-lg hover:bg-background-blue transition-colors"
            >
              <img 
                src={lang === 'en' ? 'https://flagcdn.com/w20/us.png' : 'https://flagcdn.com/w20/id.png'} 
                alt={lang} 
                className="w-5 h-auto rounded-[2px] shadow-sm" 
              />
              <span className="uppercase">{lang}</span>
              <span className="material-symbols-outlined text-[18px]">
                {langDropdownOpen ? 'expand_less' : 'expand_more'}
              </span>
            </button>
            
            {langDropdownOpen && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setLangDropdownOpen(false)} 
                />
                <div className="absolute top-full right-0 mt-2 w-40 bg-surface-container-lowest border border-outline-variant/20 rounded-xl shadow-lg z-50 overflow-hidden py-1">
                  <button
                    onClick={() => { setLanguage('en'); setLangDropdownOpen(false); }}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-left text-body-sm hover:bg-background-soft transition-colors ${lang === 'en' ? 'bg-background-blue font-bold text-primary' : 'text-on-surface-variant'}`}
                  >
                    <img src="https://flagcdn.com/w20/us.png" alt="English" className="w-5 h-auto rounded-[2px] shadow-sm" />
                    English
                  </button>
                  <button
                    onClick={() => { setLanguage('id'); setLangDropdownOpen(false); }}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-left text-body-sm hover:bg-background-soft transition-colors ${lang === 'id' ? 'bg-background-blue font-bold text-primary' : 'text-on-surface-variant'}`}
                  >
                    <img src="https://flagcdn.com/w20/id.png" alt="Indonesia" className="w-5 h-auto rounded-[2px] shadow-sm" />
                    Indonesia
                  </button>
                </div>
              </>
            )}
          </div>

          <a
            href="#contact"
            onClick={() => handleLinkClick('contact')}
            className="inline-flex h-11 items-center justify-center px-6 bg-button-primary text-white text-body-md font-semibold rounded-lg hover:bg-primary-dark active:scale-95 transition-all duration-300"
          >
            {t('nav', 'connect')}
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-primary p-2 rounded-lg hover:bg-background-blue transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface-container-lowest/95 border-t border-outline-variant/20 px-5 py-6 space-y-4 shadow-lg">

          {sectionConfigs.map((link) => {
            const id = link.href.replace('#', '')
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(id)}
                className={`block text-body-md transition-colors py-2 border-b border-outline-variant/10 ${activeSection === id
                    ? 'text-primary font-semibold'
                    : 'text-on-surface-variant hover:text-primary'
                  }`}
              >
                {t('nav', link.id)}
              </a>
            )
          })}
          
          {/* Mobile CTA & Language & Theme Toggle */}
          <div className="pt-4 border-t border-outline-variant/10 space-y-4">
            <div className="flex gap-3">
              <button
                onClick={toggleTheme}
                className="flex h-12 w-12 shrink-0 items-center justify-center text-primary bg-background-soft border border-outline-variant/30 rounded-lg hover:bg-background-blue transition-colors"
                aria-label="Toggle Theme"
              >
                <span className="material-symbols-outlined text-[20px]">
                  {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                </span>
              </button>

              <div className="relative flex-1">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex h-12 w-full items-center justify-between text-body-md font-bold text-primary bg-background-soft border border-outline-variant/30 px-4 rounded-lg hover:bg-background-blue transition-colors"
              >
                <div className="flex items-center gap-3">
                  <img 
                    src={lang === 'en' ? 'https://flagcdn.com/w20/us.png' : 'https://flagcdn.com/w20/id.png'} 
                    alt={lang} 
                    className="w-6 h-auto rounded-[2px] shadow-sm" 
                  />
                  <span>{lang === 'en' ? 'English' : 'Indonesia'}</span>
                </div>
                <span className="material-symbols-outlined">
                  {langDropdownOpen ? 'expand_less' : 'expand_more'}
                </span>
              </button>
              
              {langDropdownOpen && (
                <div className="absolute bottom-full mb-2 left-0 w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl shadow-lg z-50 overflow-hidden py-1">
                  <button
                    onClick={() => { setLanguage('en'); setLangDropdownOpen(false); }}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left text-body-md hover:bg-background-soft transition-colors ${lang === 'en' ? 'bg-background-blue font-bold text-primary' : 'text-on-surface-variant'}`}
                  >
                    <img src="https://flagcdn.com/w20/us.png" alt="English" className="w-6 h-auto rounded-[2px] shadow-sm" />
                    English
                  </button>
                  <button
                    onClick={() => { setLanguage('id'); setLangDropdownOpen(false); }}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left text-body-md hover:bg-background-soft transition-colors ${lang === 'id' ? 'bg-background-blue font-bold text-primary' : 'text-on-surface-variant'}`}
                  >
                    <img src="https://flagcdn.com/w20/id.png" alt="Indonesia" className="w-6 h-auto rounded-[2px] shadow-sm" />
                    Indonesia
                  </button>
                </div>
              )}
            </div>
            </div>

            <a
              href="#contact"
              onClick={() => handleLinkClick('contact')}
              className="flex h-12 w-full items-center justify-center px-6 bg-button-primary text-white text-body-md font-semibold rounded-lg hover:bg-primary-dark transition-colors"
            >
              {t('nav', 'connect')}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
