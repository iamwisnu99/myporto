import useReveal from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'

export default function Business() {
  const ref = useReveal()
  const { t } = useLanguage()

  return (
    <section ref={ref} id="business" className="py-section-md md:py-section-lg px-5 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.03] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(var(--color-primary), 1), transparent 70%)' }} />

      <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
        {/* Left — content */}
        <div className="reveal">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-background-blue px-4 py-2 rounded-full mb-6 border border-primary-light/15">
            <span
              className="material-symbols-outlined text-primary text-[16px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              business
            </span>
            <span className="text-[11px] font-bold text-primary uppercase tracking-[0.15em]">
              {t('business', 'label')}
            </span>
          </div>

          <span className="section-label">{t('business', 'title')}</span>

          <h2 className="text-h1-mobile md:text-h1 font-bold text-primary-dark mb-6 leading-tight">
            PT Primadev Digital Technology
          </h2>

          <p className="text-body-lg text-on-surface-variant mb-8 leading-relaxed">
            {t('business', 'desc')}
          </p>

          {/* Services grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-10">
            {t('business', 'services').map((s) => (
              <div key={s} className="flex items-center gap-2.5 group">
                <span
                  className="material-symbols-outlined text-primary-light text-[18px] flex-shrink-0"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <span className="text-[15px] text-on-background group-hover:text-primary-dark" style={{ transition: 'color 0.2s ease' }}>{s}</span>
              </div>
            ))}
          </div>

          <a
            href="https://apps-primadev.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            {t('business', 'exploreBtn')}
            <span className="material-symbols-outlined ml-2 text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>open_in_new</span>
          </a>
        </div>

        {/* Right — visual card */}
        <div className="relative reveal delay-200">
          {/* Glow */}
          <div className="absolute -inset-4 rounded-3xl opacity-20 pointer-events-none"
            style={{ background: 'linear-gradient(135deg, rgba(var(--color-primary), 0.1), rgba(var(--color-primary-light), 0.05))', filter: 'blur(30px)' }} />

          <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl elevated-shadow border border-outline-variant/15 relative z-10">
            {/* Primadev logo */}
            <div className="w-full bg-background-soft rounded-xl mb-6 flex items-center justify-center border border-outline-variant/15 py-8 px-6">
              <img
                src="/primadev.png"
                alt="PT Primadev Digital Technology"
                className="w-full max-w-[220px] sm:max-w-[260px] h-auto object-contain dark:brightness-0 dark:invert"
                loading="lazy"
              />
            </div>

            {/* Value stats */}
            <div className="grid grid-cols-3 gap-3">
              {t('business', 'stats').map((item) => (
                <div key={item.val} className="text-center p-3 bg-background-blue rounded-xl border border-primary-light/10">
                  <p className="text-[14px] font-bold text-primary">{item.val}</p>
                  <p className="text-[12px] text-on-surface-variant mt-0.5">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
