import { useEffect, useState } from 'react'
import useReveal from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'
import Lightweight3DHero from './Lightweight3DHero'
import TiltCard from './TiltCard'
import AestheticTextAnimation from './AestheticTextAnimation'

export default function Hero() {
  const ref = useReveal()
  const { t, lang } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <header
      ref={ref}
      className="relative min-h-[100svh] flex items-center overflow-hidden px-5 sm:px-8 bg-background hero-gradient pt-24 pb-16 lg:py-0"
    >
      {/* Lightweight & Smooth 3D Canvas Background */}
      <div className="absolute inset-0 z-0 opacity-70 pointer-events-none">
        <Lightweight3DHero />
      </div>

      {/* Modern Grid & Ambient Glow */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-40" />

      {/* Ambient Radial Lighting */}
      <div
        className="gradient-orb pointer-events-none"
        style={{
          width: '650px',
          height: '650px',
          background: 'radial-gradient(circle, rgba(var(--color-primary), 0.28), transparent 70%)',
          top: '-15%',
          right: '5%',
        }}
      />
      <div
        className="gradient-orb pointer-events-none"
        style={{
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(var(--color-primary-light), 0.2), transparent 70%)',
          bottom: '5%',
          left: '-10%',
          animationDelay: '3.5s',
        }}
      />

      {/* Top subtle light accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-container-max mx-auto relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        {/* Left Column — Aesthetic Typography & Content */}
        <div className="lg:col-span-7 space-y-6">
          {/* Headline Name — Full PRIMA WISNU ABROR AZMI */}
          <div
            className={`space-y-1.5 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s' }}
          >
            <p className="font-tech text-[12px] uppercase tracking-[0.25em] text-primary font-bold">
              {t('hero', 'label')}
            </p>
            <h1 className="font-display font-extrabold text-[clamp(2.4rem,5.2vw,4.1rem)] text-primary-dark leading-[1.06] tracking-tight">
              PRIMA WISNU
              <br />
              <span className="text-primary">ABROR AZMI</span>
            </h1>
          </div>

          {/* Dynamic Tech Text Animation */}
          <div
            className={`p-3 bg-surface-container-lowest/70 border border-outline-variant/20 rounded-xl backdrop-blur-md inline-block max-w-full ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.35s' }}
          >
            <AestheticTextAnimation />
          </div>

          {/* Tagline & Statement */}
          <p
            className={`text-body-lg sm:text-[20px] font-medium text-on-surface-variant max-w-xl leading-relaxed ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.45s' }}
          >
            {t('hero', 'desc')}
          </p>

          {/* Key Value Micro-metrics */}
          <div
            className={`grid grid-cols-3 gap-3 pt-1 max-w-md ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.55s' }}
          >
            <div className="bg-surface-container-lowest/60 border border-outline-variant/15 p-2.5 rounded-xl backdrop-blur-sm">
              <span className="font-tech text-[16px] sm:text-[18px] font-bold text-primary block leading-none">
                10+
              </span>
              <span className="text-[11px] font-medium text-on-surface-variant block mt-1">
                {lang === 'id' ? 'Solusi Selesai' : 'Shipped Solutions'}
              </span>
            </div>
            <div className="bg-surface-container-lowest/60 border border-outline-variant/15 p-2.5 rounded-xl backdrop-blur-sm">
              <span className="font-tech text-[16px] sm:text-[18px] font-bold text-primary block leading-none">
                100%
              </span>
              <span className="text-[11px] font-medium text-on-surface-variant block mt-1">
                {lang === 'id' ? 'Solusi Tepat Guna' : 'Business Utility'}
              </span>
            </div>
            <div className="bg-surface-container-lowest/60 border border-outline-variant/15 p-2.5 rounded-xl backdrop-blur-sm">
              <span className="font-tech text-[16px] sm:text-[18px] font-bold text-primary block leading-none">
                AI+
              </span>
              <span className="text-[11px] font-medium text-on-surface-variant block mt-1">
                {lang === 'id' ? 'Integrasi AI' : 'AI Integrated'}
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div
            className={`flex flex-wrap items-center gap-4 pt-2 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.65s' }}
          >
            <a
              href="#expertise"
              className="btn-primary group relative overflow-hidden shadow-lg shadow-primary/20"
            >
              <span className="relative z-10 flex items-center">
                {t('hero', 'explore')}
                <span
                  className="material-symbols-outlined ml-2 text-[18px] group-hover:translate-x-1.5 transition-transform duration-300"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  arrow_forward
                </span>
              </span>
            </a>

            <a
              href="#contact"
              className="btn-outline backdrop-blur-sm hover:border-primary-light"
            >
              {t('hero', 'connect')}
            </a>
          </div>
        </div>

        {/* Right Column — Minimalist 3D Tilt Profile Card (No extra text) */}
        <div className="lg:col-span-5 flex justify-center relative">
          <div
            className={`relative w-full max-w-[310px] sm:max-w-[350px] ${
              mounted ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-8'
            }`}
            style={{ transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s' }}
          >
            {/* Ambient Background Aura behind photo */}
            <div
              className="absolute -inset-6 rounded-3xl opacity-25 pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle, rgba(var(--color-primary), 0.25) 0%, rgba(var(--color-primary-light), 0.08) 60%, transparent 80%)',
                filter: 'blur(30px)',
              }}
            />

            {/* 3D Tilt Card — Clean, Pure & Minimalist */}
            <TiltCard maxTilt={10} scale={1.02} className="relative z-10">
              <div className="relative rounded-3xl overflow-hidden border border-outline-variant/30 elevated-shadow bg-surface-container-lowest/80 backdrop-blur-md p-2 sm:p-2.5">
                <div
                  className="relative rounded-2xl overflow-hidden bg-background-soft"
                  style={{ aspectRatio: '1122/1402' }}
                >
                  <img
                    src="/profile.png"
                    alt="Prima Wisnu Abror Azmi"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transition: 'opacity 1s ease 1.2s' }}
      >
        <span className="font-tech text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-[0.25em]">
          Scroll
        </span>
        <div className="w-5 h-8 border border-on-surface-variant/30 rounded-full flex justify-center pt-1.5 backdrop-blur-sm">
          <div
            className="w-1 h-2 bg-primary rounded-full"
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
