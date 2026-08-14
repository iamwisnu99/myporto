import useReveal from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'

const capIcons = [
  'domain',
  'extension',
  'smart_toy',
  'psychology',
  'inventory_2',
]

export default function Expertise() {
  const ref = useReveal()
  const { t } = useLanguage()

  return (
    <section ref={ref} id="expertise" className="py-section-md md:py-section-lg px-5">
      <div className="max-w-container-max mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-label">{t('expertise', 'label')}</span>
          <h2 className="text-h2-mobile md:text-h2 font-semibold text-primary-dark">
            {t('expertise', 'title')}
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t('expertise', 'items').map((cap, i) => (
            <div
              key={cap.title}
              className={`cap-card reveal delay-${Math.min(i * 100, 500)}`}
            >
              {/* Number + icon row */}
              <div className="flex items-center gap-3 mb-6">
                <div className="icon-badge">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    {capIcons[i]}
                  </span>
                </div>
                <span className="text-label-caps font-bold text-outline-variant tracking-widest">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="text-body-lg font-bold text-on-background mb-3">
                {cap.title}
              </h3>
              <p className="text-body-sm text-on-surface-variant">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
