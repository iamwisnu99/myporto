import { useState } from 'react'
import useReveal from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'

const principlesAccents = [
  'border-primary bg-primary/5',
  'border-primary-light bg-primary-light/5',
  'border-outline-variant bg-surface-container',
  'border-success bg-success/5',
]

const principleIcons = ['target', 'diamond', 'search_check', 'account_tree']

export default function Mindset() {
  const ref = useReveal()
  const { t } = useLanguage()
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section ref={ref} id="process" className="py-section-md md:py-section-lg bg-surface-container-lowest px-5">
      <div className="max-w-container-max mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-label">{t('mindset', 'label')}</span>
          <h2 className="text-h2-mobile md:text-h2 font-semibold text-primary-dark">
            {t('mindset', 'title')}
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Principles — Bento Grid */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-body-xl font-bold text-primary-dark mb-6 reveal">How I Think</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {t('mindset', 'principles').map((p, i) => (
                <div
                  key={p.title}
                  className={`reveal delay-${i * 100} group p-6 rounded-3xl soft-shadow border-t-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${principlesAccents[i] || 'border-outline-variant bg-surface-container'}`}
                >
                  <div className="w-12 h-12 rounded-full bg-white/80 dark:bg-black/20 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {principleIcons[i] || 'lightbulb'}
                    </span>
                  </div>
                  <h4 className="text-body-md font-bold text-on-background mb-3 leading-tight">{p.title}</h4>
                  <p className="text-body-sm font-semibold text-primary-light mb-2 italic">"{p.quote}"</p>
                  <p className="text-body-sm text-on-surface-variant opacity-90">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline — Interactive Stepper */}
          <div className="lg:col-span-5 reveal delay-300">
            <div className="bg-background-soft p-6 md:p-8 rounded-[2rem] border border-outline-variant/30 soft-shadow h-full">
              <h3 className="text-body-xl font-bold text-primary-dark mb-8">{t('mindset', 'approachTitle')}</h3>
              
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-outline-variant/30" />

                <div className="space-y-4 relative z-10">
                  {t('mindset', 'approachItems').map((s, i) => {
                    const isActive = activeStep === i
                    return (
                      <div 
                        key={s.title} 
                        className="relative pl-12 cursor-pointer group"
                        onClick={() => setActiveStep(i)}
                      >
                        {/* Dot indicator */}
                        <div className={`absolute left-0 top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors duration-300 ${isActive ? 'bg-primary border-primary' : 'bg-surface-container-lowest border-outline-variant group-hover:border-primary-light'}`}>
                          <span className={`text-[12px] font-bold ${isActive ? 'text-white' : 'text-on-surface-variant'}`}>
                            {i + 1}
                          </span>
                        </div>
                        
                        {/* Content */}
                        <div className={`bg-surface-container-lowest rounded-2xl border transition-all duration-300 overflow-hidden ${isActive ? 'border-primary shadow-md' : 'border-outline-variant/30 hover:border-primary-light/50'}`}>
                          <div className="p-4 flex justify-between items-center">
                            <h4 className={`text-body-md font-bold transition-colors ${isActive ? 'text-primary' : 'text-on-background group-hover:text-primary-light'}`}>
                              {s.title}
                            </h4>
                            <span className={`material-symbols-outlined text-outline-variant transition-transform duration-300 ${isActive ? 'rotate-180 text-primary' : ''}`}>
                              expand_more
                            </span>
                          </div>
                          
                          {/* Expanded Description */}
                          <div className={`transition-all duration-500 ease-in-out ${isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="px-4 pb-4 pt-0">
                              <div className="h-px w-full bg-outline-variant/20 mb-3" />
                              <p className="text-body-sm text-on-surface-variant leading-relaxed">
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
