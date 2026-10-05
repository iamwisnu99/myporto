import { useEffect, useRef, useCallback } from 'react'
import { useLanguage } from '../context/LanguageContext'

/**
 * useReveal — attaches Intersection Observer to trigger .reveal → .visible
 * on all .reveal elements inside the returned ref container.
 * Re-observes when language changes so new text content gets animated.
 */
export default function useReveal() {
  const containerRef = useRef(null)
  const { lang } = useLanguage()

  const observe = useCallback(() => {
    const container = containerRef.current
    if (!container) return

    const elements = container.querySelectorAll('.reveal')

    // Respect reduced-motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add('visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  // Re-run observer when language changes to handle new DOM content
  useEffect(() => {
    const cleanup = observe()
    return cleanup
  }, [observe, lang])

  return containerRef
}
