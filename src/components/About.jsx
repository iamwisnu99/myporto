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
      <div className="max-w-container-max mx-auto grid md:grid-cols-12 gap-10 md:gap-16 items-start relative z-10">
        {/* Left */}
        <div className="md:col-span-5 reveal md:sticky md:top-24">
          <span className="section-label">{t('about', 'label')}</span>
          <h2 className="text-h2-mobile md:text-h2 font-semibold text-primary-dark mb-8">
            {t('about', 'title')}
          </h2>

          <div className="bg-surface-container-lowest p-8 rounded-3xl soft-shadow border border-outline-variant/20 relative overflow-hidden group">
             <div className="absolute -top-4 -right-4 p-4 opacity-5 text-primary-dark group-hover:scale-110 transition-transform duration-700">
                <span className="material-symbols-outlined text-[120px]" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
             </div>
             <p className="text-body-lg text-on-surface-variant relative z-10 leading-relaxed font-medium">
               {t('about', 'p1')}
             </p>
          </div>

          {/* Pillar pills */}
          <div className="flex flex-wrap gap-3 mt-8">
            {t('about', 'pillars').map((label, index) => (
              <div
                key={label}
                className="flex items-center gap-2.5 bg-background-blue hover:bg-primary-light/10 border border-primary-light/20 px-4 py-2.5 rounded-full cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                <span
                  className="material-symbols-outlined text-primary text-[20px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {pillarIcons[index]}
                </span>
                <span className="text-body-sm text-primary font-bold tracking-wide">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="md:col-span-7 space-y-6 reveal delay-200">
          
          {/* Question Block */}
          <div className="bg-surface-container-lowest/50 p-6 md:p-8 rounded-[2rem] border border-outline-variant/30 backdrop-blur-md">
            <div className="flex items-start gap-5 mb-8">
               <div className="w-14 h-14 bg-gradient-to-br from-primary-light to-primary rounded-2xl flex items-center justify-center text-white soft-shadow flex-shrink-0 mt-1">
                 <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>psychology_alt</span>
               </div>
               <h3 className="text-h4 font-bold text-primary-dark leading-tight pt-1">
                 {t('about', 'p2')}
               </h3>
            </div>

            {/* Question grid */}
            <div className="grid gap-3">
              {[
                t('about', 'q1'),
                t('about', 'q2'),
                t('about', 'q3'),
                t('about', 'q4'),
                t('about', 'q5'),
                t('about', 'q6'),
              ].map((q, i) => (
                <div
                  key={q}
                  className="group flex items-center gap-4 bg-surface-container-lowest p-4 md:p-5 rounded-2xl border border-outline-variant/20 soft-shadow hover:border-primary-light/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-light/0 via-primary-light/5 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out" />
                  <div className="w-8 h-8 rounded-full bg-background-blue flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span
                      className="material-symbols-outlined text-primary-light text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      help
                    </span>
                  </div>
                  <span className="text-body-md text-on-surface-variant font-medium group-hover:text-primary-dark transition-colors">{q}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Conclusion Block */}
          <div className="bg-gradient-to-br from-primary-dark to-primary text-white p-8 md:p-10 rounded-[2rem] soft-shadow relative overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:opacity-20 transition-opacity duration-500 group-hover:rotate-12 group-hover:scale-110">
              <span className="material-symbols-outlined text-[180px]" style={{ fontVariationSettings: "'FILL' 1" }}>task_alt</span>
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
