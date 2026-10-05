import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('porto_theme')
    if (saved) return saved
    return 'light'
  })

  // Apply class to html tag and save to local storage
  useEffect(() => {
    const root = window.document.documentElement

    // Use requestAnimationFrame to batch DOM changes and prevent flash
    requestAnimationFrame(() => {
      root.classList.remove('dark', 'light')
      root.classList.add(theme)

      // Update meta theme-color for browser chrome
      const metaThemeColor = document.querySelector('meta[name="theme-color"]')
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', theme === 'dark' ? '#060e20' : '#02286d')
      }
    })

    localStorage.setItem('porto_theme', theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
