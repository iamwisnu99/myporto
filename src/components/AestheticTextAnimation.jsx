import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function AestheticTextAnimation() {
  const { lang } = useLanguage()

  const phrases = {
    en: [
      'Enterprise AI & Prompt Engineering',
      'Bridging Business Strategy & Tech',
      'Scalable Digital System Architecture',
      'Practical & Measurable Problem Solving',
    ],
    id: [
      'Pemanfaatan AI & Prompt Engineering',
      'Menghubungkan Strategi Bisnis & Teknologi',
      'Pembuatan Website & Aplikasi Praktis',
      'Solusi Nyata untuk Masalah Bisnis',
    ],
  }

  const list = phrases[lang] || phrases.en
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [blink, setBlink] = useState(true)

  // Cursor blink
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev)
    }, 500)
    return () => clearInterval(blinkInterval)
  }, [])

  // Reset when language changes
  useEffect(() => {
    setIndex(0)
    setSubIndex(0)
    setIsDeleting(false)
  }, [lang])

  // Typewriter loop
  useEffect(() => {
    const currentPhrase = list[index % list.length]

    if (!isDeleting && subIndex === currentPhrase.length) {
      // Pause at full text
      const timeout = setTimeout(() => setIsDeleting(true), 2400)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && subIndex === 0) {
      // Move to next phrase
      setIsDeleting(false)
      setIndex((prev) => (prev + 1) % list.length)
      return
    }

    const speed = isDeleting ? 30 : 55
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1))
    }, speed)

    return () => clearTimeout(timeout)
  }, [subIndex, isDeleting, index, list])

  const currentPhrase = list[index % list.length]
  const displayed = currentPhrase.substring(0, subIndex)

  return (
    <div className="inline-flex items-center gap-2.5 py-1 px-1 font-mono text-[14px] sm:text-[16px] text-primary tracking-wide">
      <span className="flex h-2 w-2 relative">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-light opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
      </span>
      <span className="font-semibold text-on-surface">
        {displayed}
      </span>
      <span
        className={`inline-block w-[2px] h-[18px] bg-primary rounded-full transition-opacity duration-100 ${
          blink ? 'opacity-100 shadow-[0_0_8px_rgba(var(--color-primary),0.8)]' : 'opacity-0'
        }`}
      />
    </div>
  )
}
