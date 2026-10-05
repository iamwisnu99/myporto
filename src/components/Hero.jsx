import { useEffect, useState } from 'react'
import useReveal from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const ref = useReveal()
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Trigger entrance animation after mount
    const timer = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <header
      ref={ref}
      className="relative min-h-[100svh] flex items-center overflow-hidden px-5 bg-background hero-gradient"
    >
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" />

      {/* Animated gradient orbs */}
      <div
        className="gradient-orb"
        style={{
          width: '600px',
          height: '600px',
          background: 'linear-gradient(135deg, rgba(var(--color-primary), 0.5), rgba(var(--color-primary-light), 0.3))',
          top: '-10%',
          right: '-5%',
        }}
      />
      <div
        className="gradient-orb"
        style={{
          width: '400px',
          height: '400px',
          background: 'linear-gradient(225deg, rgba(var(--color-primary-light), 0.4), rgba(var(--color-primary), 0.2))',
          bottom: '10%',
          left: '-5%',
          animationDelay: '3s',
        }}
      />

      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-light/20 to-transparent" />

      <div className="max-w-container-max mx-auto relative z-10 grid md:grid-cols-12 gap-gutter items-center w-full pt-20 pb-16 md:py-0">
        {/* Left — text */}
        <div className="md:col-span-7 lg:col-span-8 space-y-7">
          {/* Label pill */}
          <div
            className={`inline-flex items-center gap-2.5 bg-background-blue/80 border border-primary-light/20 px-5 py-2.5 rounded-full backdrop-blur-sm ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s' }}
          >
            <span
              className="material-symbols-outlined text-primary text-[16px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
            <span className="text-[11px] font-bold text-primary uppercase tracking-[0.15em]">
              {t('hero', 'label')}
            </span>
          </div>

          {/* Name */}
          <h1
            className={`font-extrabold text-[clamp(2.5rem,6vw,4rem)] text-primary-dark leading-[1.05] tracking-tight ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.35s' }}
          >
            PRIMA WISNU
            <br />
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text" style={{ WebkitTextFillColor: 'transparent' }}>
              ABROR AZMI
            </span>
          </h1>

          {/* Tagline */}
          <p
            className={`text-[clamp(1.25rem,3vw,1.75rem)] font-semibold text-on-surface-variant leading-snug ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.5s' }}
          >
            {t('hero', 'tagline1')}
            <br className="hidden sm:block" /> {t('hero', 'tagline2')}
          </p>

          {/* Description */}
          <p
            className={`text-body-lg text-on-surface-variant/80 max-w-xl leading-relaxed ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.65s' }}
          >
            {t('hero', 'desc')}
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 pt-2 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.8s' }}
          >
            <a href="#expertise" className="btn-primary group">
              {t('hero', 'explore')}
              <span
                className="material-symbols-outlined ml-2 group-hover:translate-x-1"
                style={{ fontVariationSettings: "'FILL' 0", transition: 'transform 0.2s ease' }}
              >
                arrow_forward
              </span>
            </a>
            <a href="#contact" className="btn-outline">
              {t('hero', 'connect')}
            </a>
          </div>
        </div>

        {/* Right — profile photo */}
        <div className="md:col-span-5 lg:col-span-4 flex justify-center mt-14 md:mt-0">
          <div
            className={`relative ${
              mounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}
            style={{ transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s' }}
          >
            {/* Decorative glow */}
            <div
              className="absolute -inset-4 rounded-3xl opacity-30"
              style={{
                background: 'linear-gradient(135deg, rgba(var(--color-primary), 0.15), rgba(var(--color-primary-light), 0.08))',
                filter: 'blur(30px)',
              }}
            />
            {/* Decorative offset shadow */}
            <div
              className="absolute inset-0 rounded-2xl translate-x-3 translate-y-3"
              style={{ background: 'linear-gradient(135deg, rgba(var(--color-primary), 0.1), rgba(var(--color-primary-light), 0.06))' }}
            />
            {/* Photo frame */}
            <div
              className="relative rounded-2xl overflow-hidden border border-outline-variant/20 elevated-shadow"
              style={{ width: 'min(320px, 80vw)', aspectRatio: '1122/1402' }}
            >
              <img
                src="/profile.png"
                alt="Prima Wisnu Abror Azmi"
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Name badge */}
            <div className="absolute -bottom-4 -left-4 bg-surface-container-lowest rounded-2xl px-5 py-3 elevated-shadow border border-outline-variant/15">
              <p className="text-[14px] font-bold text-primary-dark leading-tight">Prima Wisnu</p>
              <p className="text-[11px] text-on-surface-variant mt-0.5">{t('hero', 'company')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transition: 'opacity 1s ease 1.2s' }}
      >
        <span className="text-[11px] font-medium text-on-surface-variant/50 uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-8 border-2 border-on-surface-variant/20 rounded-full flex justify-center pt-1.5">
          <div
            className="w-1 h-2 bg-primary-light/50 rounded-full"
            style={{ animation: 'scrollBounce 1.5s ease-in-out infinite' }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(6px); opacity: 0.3; }
        }
      `}</style>
    </header>
  )
}
