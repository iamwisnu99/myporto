import useReveal from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const ref = useReveal()
  const { t } = useLanguage()

  return (
    <header
      ref={ref}
      className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-5 bg-background"
    >
      {/* Abstract geometric accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-end opacity-20">
        <div className="w-[800px] h-[800px] border border-primary-light rounded-full absolute -right-[400px] top-0" />
        <div className="w-[600px] h-[600px] border border-primary-light rounded-full absolute -right-[200px] top-[100px]" />
        <div className="w-[1000px] h-px bg-gradient-to-r from-transparent via-primary-light to-transparent absolute top-1/2 -rotate-45 origin-right" />
      </div>

      <div className="max-w-container-max mx-auto relative z-10 grid md:grid-cols-12 gap-gutter items-center">
        {/* Left — text */}
        <div className="md:col-span-8 space-y-8">
          {/* Label pill */}
          <div className="reveal inline-flex items-center gap-2 bg-background-blue border border-primary-light/30 px-4 py-2 rounded-full">
            <span
              className="material-symbols-outlined text-primary text-[18px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
            <span className="text-label-caps font-semibold text-primary uppercase tracking-widest">
              {t('hero', 'label')}
            </span>
          </div>

          {/* Name */}
          <h1 className="reveal delay-100 font-extrabold text-display-mobile md:text-display text-primary-dark leading-tight tracking-tight">
            PRIMA WISNU<br />ABROR AZMI
          </h1>

          {/* Tagline */}
          <p className="reveal delay-200 text-h1-mobile md:text-h1 font-bold text-primary leading-snug">
            {t('hero', 'tagline1')}<br className="hidden sm:block" /> {t('hero', 'tagline2')}
          </p>

          {/* Description */}
          <p className="reveal delay-300 text-body-lg text-on-surface-variant max-w-2xl">
            {t('hero', 'desc')}
          </p>

          {/* CTAs */}
          <div className="reveal delay-400 flex flex-col sm:flex-row gap-4 pt-2">
            <a href="#expertise" className="btn-primary group">
              {t('hero', 'explore')}
              <span
                className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform"
                style={{ fontVariationSettings: "'FILL' 0" }}
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
        <div className="md:col-span-4 flex justify-center mt-12 md:mt-0">
          <div className="reveal delay-300 relative">
            {/* Decorative offset shadow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-primary-light/10 rounded-2xl translate-x-3 translate-y-3" />
            {/* Photo frame */}
            <div className="relative rounded-2xl overflow-hidden soft-shadow border border-outline-variant/20" style={{ width: '320px', aspectRatio: '1122/1402' }}>
              <img
                src="/profile.png"
                alt="Prima Wisnu Abror Azmi"
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
            </div>
            {/* Name badge */}
            <div className="absolute -bottom-4 -left-4 bg-surface-container-lowest rounded-xl px-4 py-2.5 soft-shadow border border-outline-variant/20">
              <p className="text-body-sm font-bold text-primary-dark leading-tight">Prima Wisnu</p>
              <p className="text-[11px] text-on-surface-variant">{t('hero', 'company')}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
