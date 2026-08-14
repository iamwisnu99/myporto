import useReveal from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'

export default function Business() {
  const ref = useReveal()
  const { t } = useLanguage()

  return (
    <section ref={ref} id="business" className="py-section-md md:py-section-lg px-5 relative overflow-hidden">
      <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left — content */}
        <div className="reveal">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-background-blue px-4 py-2 rounded-full mb-6 border border-primary-light/20">
            <span
              className="material-symbols-outlined text-primary text-[18px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              business
            </span>
            <span className="text-label-caps font-semibold text-primary uppercase tracking-widest">
              {t('business', 'label')}
            </span>
          </div>

          <span className="section-label">{t('business', 'title')}</span>

          <h2 className="text-h1-mobile md:text-h1 font-bold text-primary-dark mb-6 leading-tight">
            PT Primadev Digital Technology
          </h2>

          <p className="text-body-lg text-on-surface-variant mb-8">
            {t('business', 'desc')}
          </p>

          {/* Services grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {t('business', 'services').map((s) => (
              <div key={s} className="flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-primary-light text-[20px] flex-shrink-0"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <span className="text-body-md text-on-background">{s}</span>
              </div>
            ))}
          </div>

          <a
            href="https://apps-primadev.netlify.app/"
            className="btn-outline"
          >
            {t('business', 'exploreBtn')}
          </a>
        </div>

        {/* Right — visual card */}
        <div className="relative reveal delay-200">
          {/* Shadow offset */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl translate-x-4 translate-y-4" />

          <div className="bg-surface-container-lowest p-6 sm:p-10 rounded-2xl soft-shadow border border-outline-variant/30 relative z-10">
            {/* Primadev logo */}
            <div className="w-full bg-background-soft rounded-xl mb-6 flex items-center justify-center border border-outline-variant/20 py-6 px-4 sm:py-10 sm:px-8">
              <img
                src="/primadev.png"
                alt="PT Primadev Digital Technology"
                className="w-full max-w-[200px] sm:max-w-[260px] h-auto object-contain dark:brightness-0 dark:invert"
                loading="lazy"
              />
            </div>

            {/* Value stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {t('business', 'stats').map((item) => (
                <div key={item.val} className="text-center p-3 bg-background-blue rounded-lg">
                  <p className="text-body-md font-bold text-primary">{item.val}</p>
                  <p className="text-body-sm text-on-surface-variant">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
