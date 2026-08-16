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
    <section ref={ref} id="ai" className="py-section-md md:py-section-lg bg-background-blue px-5">
      <div className="max-w-container-max mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-14 reveal">
          <span className="section-label">{t('ai', 'label')}</span>
          <h2 className="text-h2-mobile md:text-h2 font-semibold text-primary-dark leading-tight mb-4">
            {t('ai', 'title')}
          </h2>
          <p className="text-body-lg text-on-surface-variant">
            {t('ai', 'desc')}
          </p>
        </div>

        {/* Flow visualization */}
        <div className="reveal delay-200 bg-surface-container-lowest rounded-2xl p-6 md:p-8 soft-shadow border border-primary-light/20 mb-12">
          <p className="text-label-caps text-outline font-semibold tracking-widest uppercase mb-6 md:mb-8 text-center md:text-left">
            {t('ai', 'processLabel')}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full">
            {t('ai', 'steps').map((stepLabel, i) => {
              const step = flowStepConfigs[i]
              return (
              <div key={stepLabel} className={`flex flex-col md:flex-row items-center ${i < flowStepConfigs.length - 1 ? 'md:flex-1' : ''}`}>
                <div className="flex flex-col items-center text-center w-32 md:w-24 gap-2">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                      step.success
                        ? 'bg-success text-white'
                        : step.active
                        ? 'bg-primary text-white'
                        : 'bg-surface-container text-primary-dark'
                    }`}
                  >
                    <span
                      className="material-symbols-outlined text-[22px]"
                      style={{
                        fontVariationSettings: step.active || step.success ? "'FILL' 1" : "'FILL' 0",
                      }}
                    >
                      {step.icon}
                    </span>
                  </div>
                  <span className="text-body-sm font-semibold text-on-background leading-tight">{stepLabel}</span>
                </div>
                {i < flowStepConfigs.length - 1 && (
                  <div
                    className={`w-px h-8 my-2 md:w-auto md:h-px md:flex-1 md:my-0 md:mx-2 ${
                      i >= 4 ? 'bg-primary' : 'bg-outline-variant'
                    }`}
                  />
                )}
              </div>
              )
            })}
          </div>
        </div>

        {/* Two-column capabilities + quote */}
        <div className="grid md:grid-cols-2 gap-8 reveal delay-300">
          {/* Capabilities list */}
          <div>
            <h3 className="text-body-lg font-bold text-on-background mb-5">
              {t('ai', 'listTitle')}
            </h3>
            <div className="flex flex-col gap-3.5">
              {t('ai', 'list').map((item, idx) => (
                <div 
                  key={idx} 
                  className="group flex items-center gap-4 bg-surface-container-lowest p-4 md:p-5 rounded-2xl border border-outline-variant/20 soft-shadow hover:-translate-y-1 hover:shadow-lg hover:border-primary-light/50 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-light/0 via-primary-light/5 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out" />
                  <div className="w-10 h-10 rounded-full bg-background-blue border border-primary-light/20 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 shadow-sm">
                    <span className="text-body-md font-bold">{idx + 1}</span>
                  </div>
                  <span className="text-body-md text-on-surface-variant font-medium group-hover:text-primary-dark transition-colors relative z-10 leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quote card */}
          <div className="bg-primary-dark rounded-2xl p-8 text-white flex flex-col justify-center">
            <span
              className="material-symbols-outlined text-[40px] text-primary-light/40 mb-4"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              format_quote
            </span>
            <p className="text-h2-mobile font-semibold leading-snug mb-4">
              {t('ai', 'quote')}
            </p>
            <div className="h-1 w-16 bg-primary-light rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
