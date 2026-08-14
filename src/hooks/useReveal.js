import { useEffect, useRef } from 'react'

/**
 * useReveal — attaches Intersection Observer to trigger .reveal → .visible
 * on all .reveal elements inside the returned ref container.
 */
export default function useReveal() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const elements = container.querySelectorAll('.reveal')

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

  return containerRef
}
