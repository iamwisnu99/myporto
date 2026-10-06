import { useState } from 'react'
import useReveal from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'

const principlesAccents = [
  { border: 'border-primary/30', bg: 'from-primary/[0.04] to-primary/[0.01]', iconBg: 'from-primary to-primary-light' },
  { border: 'border-primary-light/30', bg: 'from-primary-light/[0.04] to-primary-light/[0.01]', iconBg: 'from-primary-light to-primary' },
  { border: 'border-outline-variant/40', bg: 'from-outline-variant/[0.04] to-outline-variant/[0.01]', iconBg: 'from-primary-dark to-primary' },
  { border: 'border-success/30', bg: 'from-success/[0.04] to-success/[0.01]', iconBg: 'from-success to-primary-light' },
]

const principleIcons = ['target', 'diamond', 'search_check', 'account_tree']

export default function Mindset() {
  const ref = useReveal()
  const { t } = useLanguage()
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section ref={ref} id="process" className="py-section-md md:py-section-lg bg-surface-container-lowest px-5 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.03] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(var(--color-primary-light), 1), transparent 70%)' }} />

      <div className="max-w-container-max mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="section-label">{t('mindset', 'label')}</span>
          <h2 className="font-display text-h2-mobile md:text-h2 font-bold text-primary-dark">
            {t('mindset', 'title')}
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Principles — Bento Grid */}
          <div className="lg:col-span-7 space-y-5">
            <h3 className="font-display text-[18px] font-bold text-primary-dark mb-5 reveal">{t('mindset', 'howIThink')}</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {t('mindset', 'principles').map((p, i) => {
                const accent = principlesAccents[i] || principlesAccents[0]
                return (
                  <div
                    key={p.title}
                    className={`reveal delay-${i * 100} group p-6 rounded-2xl border ${accent.border} bg-gradient-to-br ${accent.bg} relative overflow-hidden`}
                    style={{ transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease' }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(var(--color-primary), 0.08)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
                  >
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${accent.iconBg} flex items-center justify-center mb-4 text-white group-hover:scale-105`}
                      style={{ transition: 'transform 0.3s ease', boxShadow: '0 4px 12px rgba(var(--color-primary), 0.15)' }}>
                      <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        {principleIcons[i] || 'lightbulb'}
                      </span>
                    </div>
                    <h4 className="text-[15px] font-bold text-on-background mb-2 leading-tight">{p.title}</h4>
                    <p className="text-[13px] font-medium text-primary-light mb-1.5 italic leading-snug">"{p.quote}"</p>
                    <p className="text-[13px] text-on-surface-variant leading-relaxed">{p.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Timeline — Interactive Stepper */}
          <div className="lg:col-span-5 reveal delay-300">
            <div className="bg-background-soft p-6 md:p-7 rounded-2xl border border-outline-variant/20 soft-shadow h-full">
              <h3 className="text-[18px] font-bold text-primary-dark mb-7">{t('mindset', 'approachTitle')}</h3>

              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-outline-variant/20 rounded-full" />

                <div className="space-y-3 relative z-10">
                  {t('mindset', 'approachItems').map((s, i) => {
                    const isActive = activeStep === i
                    return (
                      <div
                        key={i}
                        className="relative pl-11 cursor-pointer group"
                        onClick={() => setActiveStep(i)}
                      >
                        {/* Dot indicator */}
                        <div
                          className={`absolute left-0 top-1.5 w-8 h-8 rounded-lg border-2 flex items-center justify-center ${
                            isActive
                              ? 'border-primary text-white'
                              : 'bg-surface-container-lowest border-outline-variant/30 group-hover:border-primary-light/50'
                          }`}
                          style={{
                            transition: 'all 0.3s ease',
                            ...(isActive ? { background: 'linear-gradient(135deg, rgba(var(--color-primary), 1), rgba(var(--color-primary-light), 1))' } : {}),
                          }}
                        >
                          <span className={`text-[11px] font-bold ${isActive ? 'text-white' : 'text-on-surface-variant'}`}>
                            {i + 1}
                          </span>
                        </div>

                        {/* Content */}
                        <div
                          className={`bg-surface-container-lowest rounded-xl border overflow-hidden ${
                            isActive
                              ? 'border-primary/30'
                              : 'border-outline-variant/20 hover:border-primary-light/30'
                          }`}
                          style={{
                            transition: 'all 0.3s ease',
                            ...(isActive ? { boxShadow: '0 4px 16px rgba(var(--color-primary), 0.08)' } : {}),
                          }}
                        >
                          <div className="p-3.5 flex justify-between items-center">
                            <h4
                              className={`text-[14px] font-bold ${
                                isActive ? 'text-primary' : 'text-on-background group-hover:text-primary-light'
                              }`}
                              style={{ transition: 'color 0.2s ease' }}
                            >
                              {s.title}
                            </h4>
                            <span
                              className={`material-symbols-outlined text-[18px] ${isActive ? 'text-primary' : 'text-outline-variant'}`}
                              style={{ transition: 'transform 0.3s ease, color 0.3s ease', transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)' }}
                            >
                              expand_more
                            </span>
                          </div>

                          {/* Expanded Description */}
                          <div
                            style={{
                              maxHeight: isActive ? '100px' : '0px',
                              opacity: isActive ? 1 : 0,
                              transition: 'max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease',
                              overflow: 'hidden',
                            }}
                          >
                            <div className="px-3.5 pb-3.5 pt-0">
                              <div className="h-px w-full bg-outline-variant/15 mb-2.5" />
                              <p className="text-[13px] text-on-surface-variant leading-relaxed">
                                {s.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
