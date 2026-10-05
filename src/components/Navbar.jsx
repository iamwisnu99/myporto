import { useState, useEffect, useCallback, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'

const sectionConfigs = [
  { id: 'about', href: '#about' },
  { id: 'expertise', href: '#expertise' },
  { id: 'ai', href: '#ai' },
  { id: 'business', href: '#business' },
  { id: 'contact', href: '#contact' },
]

function getActiveSection() {
  const OFFSET = 130
  const sectionIds = sectionConfigs.map((l) => l.href.replace('#', ''))
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
  const langRef = useRef(null)

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20)
    setActiveSection(getActiveSection())
  }, [])

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize, { passive: true })
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Close lang dropdown on click outside
  useEffect(() => {
    if (!langDropdownOpen) return
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [langDropdownOpen])

  const handleLinkClick = (id) => {
    setActiveSection(id)
    setMenuOpen(false)
    setLangDropdownOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 glass-nav ${
          isScrolled
            ? 'bg-surface-container-lowest/90 shadow-sm border-b border-outline-variant/15'
            : 'bg-transparent'
        }`}
        style={{ transition: 'background-color 350ms ease, box-shadow 350ms ease, border-color 350ms ease' }}
      >
        <div className="flex justify-between items-center max-w-container-max mx-auto px-5 h-[72px]">
          {/* Logo */}
          <a
            href="#"
            className="font-extrabold text-[22px] text-primary tracking-tight hover:opacity-80"
            style={{ transition: 'opacity 0.2s ease' }}
          >
            Prima Wisnu<span className="text-primary-light">.</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {sectionConfigs.map((link) => {
              const id = link.href.replace('#', '')
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleLinkClick(id)}
                  className={`relative px-3 lg:px-4 py-2 text-[14px] font-medium rounded-lg ${
                    activeSection === id
                      ? 'text-primary bg-background-blue'
                      : 'text-on-surface-variant hover:text-primary hover:bg-background-blue/50'
                  }`}
                  style={{ transition: 'color 0.2s ease, background-color 0.2s ease' }}
                >
                  {t('nav', link.id)}
                </a>
              )
            })}
          </div>

          {/* Desktop CTA & Language Dropdown & Theme Toggle */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <button
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center text-primary bg-background-blue border border-outline-variant/20 rounded-xl hover:bg-primary hover:text-white hover:border-primary"
              style={{ transition: 'all 0.2s ease' }}
              aria-label="Toggle Theme"
            >
              <span className="material-symbols-outlined text-[18px]">
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            </button>

            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex h-10 items-center gap-2 text-[13px] font-bold text-primary bg-background-blue border border-outline-variant/20 px-3 rounded-xl hover:bg-primary hover:text-white hover:border-primary"
                style={{ transition: 'all 0.2s ease' }}
              >
                <img
                  src={lang === 'en' ? 'https://flagcdn.com/w20/us.png' : 'https://flagcdn.com/w20/id.png'}
                  alt={lang}
                  className="w-5 h-auto rounded-[2px]"
                />
                <span className="uppercase">{lang}</span>
                <span
                  className="material-symbols-outlined text-[16px]"
                  style={{ transition: 'transform 0.2s ease', transform: langDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  expand_more
                </span>
              </button>

              <div
                className={`absolute top-full right-0 mt-2 w-40 bg-surface-container-lowest border border-outline-variant/20 rounded-xl overflow-hidden py-1 ${
                  langDropdownOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
                style={{ transition: 'opacity 0.2s ease, transform 0.2s ease', boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
              >
                <button
                  onClick={() => { setLanguage('en'); setLangDropdownOpen(false) }}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-left text-[13px] hover:bg-background-blue ${lang === 'en' ? 'bg-background-blue font-bold text-primary' : 'text-on-surface-variant'}`}
                  style={{ transition: 'background-color 0.15s ease' }}
                >
                  <img src="https://flagcdn.com/w20/us.png" alt="English" className="w-5 h-auto rounded-[2px]" />
                  English
                </button>
                <button
                  onClick={() => { setLanguage('id'); setLangDropdownOpen(false) }}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-left text-[13px] hover:bg-background-blue ${lang === 'id' ? 'bg-background-blue font-bold text-primary' : 'text-on-surface-variant'}`}
                  style={{ transition: 'background-color 0.15s ease' }}
                >
                  <img src="https://flagcdn.com/w20/id.png" alt="Indonesia" className="w-5 h-auto rounded-[2px]" />
                  Indonesia
                </button>
              </div>
            </div>

            <a
              href="#contact"
              onClick={() => handleLinkClick('contact')}
              className="btn-primary !py-2.5 !px-5 !text-[14px] !rounded-xl"
            >
              {t('nav', 'connect')}
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 text-primary rounded-xl hover:bg-background-blue"
            style={{ transition: 'background-color 0.2s ease' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 0" }}>
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay + drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30 mobile-overlay"
            onClick={() => setMenuOpen(false)}
          />
          {/* Drawer */}
          <div className="absolute top-[72px] left-0 right-0 bg-surface-container-lowest/98 glass-nav border-t border-outline-variant/15 px-5 py-6 space-y-1 mobile-drawer"
            style={{ maxHeight: 'calc(100vh - 72px)', overflowY: 'auto' }}
          >
            {sectionConfigs.map((link) => {
              const id = link.href.replace('#', '')
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleLinkClick(id)}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-[15px] font-medium ${
                    activeSection === id
                      ? 'text-primary bg-background-blue'
                      : 'text-on-surface-variant hover:text-primary hover:bg-background-blue/50'
                  }`}
                  style={{ transition: 'all 0.15s ease' }}
                >
                  {t('nav', link.id)}
                </a>
              )
            })}

            <div className="pt-4 mt-4 border-t border-outline-variant/15 space-y-3">
              <div className="flex gap-3">
                <button
                  onClick={toggleTheme}
                  className="flex h-12 w-12 shrink-0 items-center justify-center text-primary bg-background-blue border border-outline-variant/20 rounded-xl"
                  aria-label="Toggle Theme"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                  </span>
                </button>

                <div className="relative flex-1" ref={!langDropdownOpen ? undefined : langRef}>
                  <button
                    onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                    className="flex h-12 w-full items-center justify-between text-[15px] font-bold text-primary bg-background-blue border border-outline-variant/20 px-4 rounded-xl"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={lang === 'en' ? 'https://flagcdn.com/w20/us.png' : 'https://flagcdn.com/w20/id.png'}
                        alt={lang}
                        className="w-6 h-auto rounded-[2px]"
                      />
                      <span>{lang === 'en' ? 'English' : 'Indonesia'}</span>
                    </div>
                    <span
                      className="material-symbols-outlined"
                      style={{ transition: 'transform 0.2s ease', transform: langDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                      expand_more
                    </span>
                  </button>

                  {langDropdownOpen && (
                    <div className="absolute bottom-full mb-2 left-0 w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl overflow-hidden py-1"
                      style={{ boxShadow: '0 -8px 30px rgba(0,0,0,0.12)' }}
                    >
                      <button
                        onClick={() => { setLanguage('en'); setLangDropdownOpen(false) }}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left text-[15px] hover:bg-background-blue ${lang === 'en' ? 'bg-background-blue font-bold text-primary' : 'text-on-surface-variant'}`}
                      >
                        <img src="https://flagcdn.com/w20/us.png" alt="English" className="w-6 h-auto rounded-[2px]" />
                        English
                      </button>
                      <button
                        onClick={() => { setLanguage('id'); setLangDropdownOpen(false) }}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left text-[15px] hover:bg-background-blue ${lang === 'id' ? 'bg-background-blue font-bold text-primary' : 'text-on-surface-variant'}`}
                      >
                        <img src="https://flagcdn.com/w20/id.png" alt="Indonesia" className="w-6 h-auto rounded-[2px]" />
                        Indonesia
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <a
                href="#contact"
                onClick={() => handleLinkClick('contact')}
                className="btn-primary w-full !py-3.5"
              >
                {t('nav', 'connect')}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
