import useReveal from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'
import TiltCard from './TiltCard'

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
    <section ref={ref} id="expertise" className="py-section-md md:py-section-lg px-5 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.03] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(var(--color-primary-light), 1), transparent 70%)' }} />

      <div className="max-w-container-max mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="section-label">{t('expertise', 'label')}</span>
          <h2 className="font-display text-h2-mobile md:text-h2 font-bold text-primary-dark">
            {t('expertise', 'title')}
          </h2>
        </div>

        {/* Cards grid with 3D Tilt */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t('expertise', 'items').map((cap, i) => (
            <TiltCard
              key={cap.title}
              maxTilt={8}
              scale={1.02}
              className={`reveal delay-${Math.min(i * 100, 500)} h-full`}
            >
              <div className="cap-card h-full flex flex-col justify-between">
                <div>
                  {/* Number + icon row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="icon-badge">
                      <span
                        className="material-symbols-outlined text-[22px]"
                        style={{ fontVariationSettings: "'FILL' 0" }}
                      >
                        {capIcons[i]}
                      </span>
                    </div>
                    <span className="font-tech text-[28px] font-extrabold text-outline-variant/30 leading-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="font-display text-[18px] font-bold text-on-background mb-3 leading-tight">
                    {cap.title}
                  </h3>
                  <p className="text-[14px] text-on-surface-variant leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
