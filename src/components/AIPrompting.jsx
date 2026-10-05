import useReveal from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'

const flowStepConfigs = [
  { icon: 'crisis_alert', active: false },
  { icon: 'data_object', active: false },
  { icon: 'terminal', active: true },
  { icon: 'output', active: false },
  { icon: 'troubleshoot', active: false },
  { icon: 'tune', active: false },
  { icon: 'done_all', active: false, success: true },
]

export default function AIPrompting() {
  const ref = useReveal()
  const { t } = useLanguage()

  return (
    <section ref={ref} id="ai" className="py-section-md md:py-section-lg bg-background-blue px-5 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(var(--color-primary), 1), transparent 60%)' }} />

      <div className="max-w-container-max mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-12 reveal">
          <span className="section-label">{t('ai', 'label')}</span>
          <h2 className="text-h2-mobile md:text-h2 font-bold text-primary-dark leading-tight mb-4">
            {t('ai', 'title')}
          </h2>
          <p className="text-body-lg text-on-surface-variant leading-relaxed">
            {t('ai', 'desc')}
          </p>
        </div>

        {/* Flow visualization */}
        <div className="reveal delay-200 bg-surface-container-lowest rounded-2xl p-6 md:p-8 soft-shadow border border-outline-variant/15 mb-10">
          <p className="text-[11px] text-outline font-bold tracking-[0.15em] uppercase mb-6 md:mb-8 text-center md:text-left">
            {t('ai', 'processLabel')}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-2 md:gap-0">
            {t('ai', 'steps').map((stepLabel, i) => {
              const step = flowStepConfigs[i]
              return (
                <div key={i} className={`flex flex-col md:flex-row items-center ${i < flowStepConfigs.length - 1 ? 'md:flex-1' : ''}`}>
                  <div className="flex flex-col items-center text-center w-28 md:w-20 lg:w-24 gap-2">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        step.success
                          ? 'text-white'
                          : step.active
                          ? 'text-white'
                          : 'bg-surface-container text-primary-dark'
                      }`}
                      style={
                        step.success
                          ? { background: 'linear-gradient(135deg, rgba(var(--color-success), 1), rgba(var(--color-success), 0.8))' }
                          : step.active
                          ? { background: 'linear-gradient(135deg, rgba(var(--color-primary), 1), rgba(var(--color-primary-light), 1))' }
                          : undefined
                      }
                    >
                      <span
                        className="material-symbols-outlined text-[20px]"
                        style={{
                          fontVariationSettings: step.active || step.success ? "'FILL' 1" : "'FILL' 0",
                        }}
                      >
                        {step.icon}
                      </span>
                    </div>
                    <span className="text-[12px] font-semibold text-on-background leading-tight">{stepLabel}</span>
                  </div>
                  {i < flowStepConfigs.length - 1 && (
                    <div
                      className={`w-px h-6 my-1 md:w-auto md:h-px md:flex-1 md:my-0 md:mx-1.5 ${
                        i >= 4 ? 'bg-primary/40' : 'bg-outline-variant/30'
                      }`}
                    />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Two-column capabilities + quote */}
        <div className="grid md:grid-cols-2 gap-6 reveal delay-300">
          {/* Capabilities list */}
          <div>
            <h3 className="text-[17px] font-bold text-on-background mb-5">
              {t('ai', 'listTitle')}
            </h3>
            <div className="flex flex-col gap-3">
              {t('ai', 'list').map((item, idx) => (
                <div
                  key={idx}
                  className="group flex items-center gap-3.5 bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/15 hover:border-primary-light/30 relative overflow-hidden"
                  style={{ transition: 'all 0.3s ease' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/[0.02] to-transparent translate-x-[-100%] group-hover:translate-x-0" style={{ transition: 'transform 0.6s ease' }} />
                  <div
                    className="w-9 h-9 rounded-lg border border-primary-light/15 text-primary flex items-center justify-center flex-shrink-0 group-hover:border-primary/30"
                    style={{ transition: 'all 0.3s ease' }}
                  >
                    <span className="text-[13px] font-bold">{idx + 1}</span>
                  </div>
                  <span className="text-[15px] text-on-surface-variant font-medium group-hover:text-primary-dark relative z-10 leading-snug" style={{ transition: 'color 0.3s ease' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quote card */}
          <div className="rounded-2xl p-7 md:p-8 text-white flex flex-col justify-center relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(var(--color-primary-dark), 1) 0%, rgba(var(--color-primary), 1) 100%)' }}>
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-[0.06] grid-pattern pointer-events-none" />
            <span
              className="material-symbols-outlined text-[36px] text-white/20 mb-4"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              format_quote
            </span>
            <p className="text-[22px] md:text-[24px] font-semibold leading-snug mb-5 relative z-10">
              {t('ai', 'quote')}
            </p>
            <div className="h-1 w-16 rounded-full" style={{ background: 'linear-gradient(90deg, rgba(var(--color-primary-light), 1), transparent)' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
