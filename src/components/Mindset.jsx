import useReveal from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'

const principlesAccents = [
  'border-primary',
  'border-primary-light',
  'border-outline-variant',
  'border-outline-variant',
]

export default function Mindset() {
  const ref = useReveal()
  const { t } = useLanguage()

  return (
    <section ref={ref} id="process" className="py-section-md md:py-section-lg bg-background-soft px-5">
      <div className="max-w-container-max mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-label">{t('mindset', 'label')}</span>
          <h2 className="text-h2-mobile md:text-h2 font-semibold text-primary-dark">
            {t('mindset', 'title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-12">
          {/* Principles — left */}
          <div className="md:col-span-5 space-y-5">
            <h3 className="text-body-lg font-bold text-primary-dark mb-6 reveal">How I Think</h3>
            {t('mindset', 'principles').map((p, i) => (
              <div
                key={p.title}
                className={`reveal delay-${i * 100} bg-surface-container-lowest p-6 rounded-xl soft-shadow border-l-4 ${principlesAccents[i] || 'border-outline-variant'}`}
              >
                <h4 className="text-body-md font-bold text-on-background mb-1">{p.title}</h4>
                <p className="text-body-sm text-primary-light italic mb-2">"{p.quote}"</p>
                <p className="text-body-sm text-on-surface-variant">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Timeline — right */}
          <div className="md:col-span-7 pl-4 md:pl-10 relative timeline-line">
            <h3 className="text-body-lg font-bold text-primary-dark mb-8 reveal">{t('mindset', 'approachTitle')}</h3>
            {t('mindset', 'approachItems').map((s, i) => (
              <div key={s.title} className={`reveal delay-${i * 100} relative z-10 mb-8 pl-8`}>
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-surface-container-lowest border-2 border-primary flex items-center justify-center -translate-x-[2px]">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <h4 className="text-body-lg font-bold text-primary-dark mb-1">
                  {i + 1}. {s.title}
                </h4>
                <p className="text-body-sm text-on-surface-variant">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
