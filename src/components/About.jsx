import useReveal from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'

const pillarIcons = [
  'hub',
  'business_center',
  'smart_toy',
  'psychology',
]

export default function About() {
  const ref = useReveal()
  const { t } = useLanguage()

  return (
    <section
      ref={ref}
      id="about"
      className="py-section-md md:py-section-lg bg-background-soft px-5"
    >
      <div className="max-w-container-max mx-auto grid md:grid-cols-12 gap-12 items-start">
        {/* Left */}
        <div className="md:col-span-4 reveal">
          <span className="section-label">{t('about', 'label')}</span>
          <h2 className="text-h2-mobile md:text-h2 font-semibold text-primary-dark">
            {t('about', 'title')}
          </h2>

          {/* Pillar pills */}
          <div className="flex flex-wrap gap-2 mt-6">
            {t('about', 'pillars').map((label, index) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-background-blue border border-primary-light/20 px-3 py-1.5 rounded-full"
              >
                <span
                  className="material-symbols-outlined text-primary text-[16px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {pillarIcons[index]}
                </span>
                <span className="text-body-sm text-primary font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="md:col-span-8 space-y-6 reveal delay-200">
          <p className="text-body-lg text-on-surface-variant">
            {t('about', 'p1')}
          </p>
          <p className="text-body-lg text-on-surface-variant">
            {t('about', 'p2')}
          </p>

          {/* Question grid */}
          <div className="grid sm:grid-cols-2 gap-3 pt-2">
            {[
              t('about', 'q1'),
              t('about', 'q2'),
              t('about', 'q3'),
              t('about', 'q4'),
              t('about', 'q5'),
              t('about', 'q6'),
            ].map((q) => (
              <div
                key={q}
                className="flex items-start gap-3 bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30 soft-shadow"
              >
                <span
                  className="material-symbols-outlined text-primary-light text-[20px] mt-0.5 flex-shrink-0"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <span className="text-body-sm text-on-surface-variant">{q}</span>
              </div>
            ))}
          </div>

          <p className="text-body-lg text-on-surface-variant pt-2">
            {t('about', 'p3')}
          </p>
        </div>
      </div>
    </section>
  )
}
