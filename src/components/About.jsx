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
      className="py-section-md md:py-section-lg bg-background-soft px-5 relative overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.03] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(var(--color-primary), 1), transparent 70%)' }} />

      <div className="max-w-container-max mx-auto grid md:grid-cols-12 gap-10 md:gap-14 items-start relative z-10">
        {/* Left */}
        <div className="md:col-span-5 reveal md:sticky md:top-24">
          <span className="section-label">{t('about', 'label')}</span>
          <h2 className="font-display text-h2-mobile md:text-h2 font-bold text-primary-dark mb-8 leading-tight">
            {t('about', 'title')}
          </h2>

          <div className="bg-surface-container-lowest p-7 md:p-8 rounded-2xl soft-shadow border border-outline-variant/15 relative overflow-hidden group">
             <div className="absolute -top-4 -right-4 p-4 opacity-[0.04] text-primary-dark group-hover:scale-110" style={{ transition: 'transform 0.7s ease' }}>
                <span className="material-symbols-outlined text-[120px]" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
             </div>
             <p className="text-body-lg text-on-surface-variant relative z-10 leading-relaxed font-medium">
               {t('about', 'p1')}
             </p>
          </div>

          {/* Pillar pills */}
          <div className="flex flex-wrap gap-2.5 mt-7">
            {t('about', 'pillars').map((label, index) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-background-blue hover:bg-primary/5 border border-primary-light/15 px-4 py-2.5 rounded-xl cursor-default group"
                style={{ transition: 'all 0.3s ease' }}
              >
                <span
                  className="material-symbols-outlined text-primary text-[18px] group-hover:scale-110"
                  style={{ fontVariationSettings: "'FILL' 1", transition: 'transform 0.3s ease' }}
                >
                  {pillarIcons[index]}
                </span>
                <span className="text-[13px] text-primary font-bold tracking-wide">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="md:col-span-7 space-y-6 reveal delay-200">

          {/* Question Block */}
          <div className="bg-surface-container-lowest/60 p-6 md:p-8 rounded-2xl border border-outline-variant/20 backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-7">
               <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white flex-shrink-0"
                 style={{ background: 'linear-gradient(135deg, rgba(var(--color-primary), 1), rgba(var(--color-primary-light), 1))' }}>
                 <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>psychology_alt</span>
               </div>
               <h3 className="text-[18px] md:text-[20px] font-bold text-primary-dark leading-snug pt-0.5">
                 {t('about', 'p2')}
               </h3>
            </div>

            {/* Question grid */}
            <div className="grid gap-2.5">
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
                  className="group flex items-center gap-3.5 bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/15 hover:border-primary-light/30 relative overflow-hidden cursor-default"
                  style={{ transition: 'all 0.3s ease' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/[0.02] to-transparent translate-x-[-100%] group-hover:translate-x-0" style={{ transition: 'transform 0.6s ease' }} />
                  <div className="w-7 h-7 rounded-lg bg-background-blue flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10" style={{ transition: 'background-color 0.3s ease' }}>
                    <span
                      className="material-symbols-outlined text-primary-light text-[16px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      help
                    </span>
                  </div>
                  <span className="text-[15px] text-on-surface-variant font-medium group-hover:text-primary-dark relative z-10" style={{ transition: 'color 0.3s ease' }}>{q}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Conclusion Block */}
          <div className="text-white p-7 md:p-9 rounded-2xl relative overflow-hidden group"
            style={{ background: 'linear-gradient(135deg, rgba(var(--color-primary-dark), 1), rgba(var(--color-primary), 1))' }}>
            <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:opacity-15 group-hover:rotate-6 group-hover:scale-110"
              style={{ transition: 'all 0.6s ease' }}>
              <span className="material-symbols-outlined text-[160px]" style={{ fontVariationSettings: "'FILL' 1" }}>task_alt</span>
            </div>
            <p className="text-body-lg relative z-10 leading-relaxed font-medium">
              {t('about', 'p3')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
