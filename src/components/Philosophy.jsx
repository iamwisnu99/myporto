import { useLanguage } from '../context/LanguageContext'

export default function Philosophy() {
  const { t } = useLanguage()

  return (
    <section className="py-section-lg bg-primary-dark text-white px-5 text-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.06] flex items-center justify-center pointer-events-none">
        <span
          className="material-symbols-outlined"
          style={{ fontSize: '380px', fontVariationSettings: "'FILL' 0" }}
        >
          format_quote
        </span>
      </div>

      {/* Subtle rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <div className="w-[600px] h-[600px] border border-primary-light rounded-full" />
        <div className="absolute w-[400px] h-[400px] border border-primary-light rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <p className="text-label-caps font-semibold text-primary-light/70 uppercase tracking-widest mb-8">
          {t('philosophy', 'label') || 'Professional Philosophy'}
        </p>
        <h2 className="text-display-mobile md:text-display font-extrabold leading-tight text-white mb-8">
          {t('philosophy', 'quote')}
        </h2>
        <div className="w-24 h-1 bg-primary-light mx-auto rounded-full" />
      </div>
    </section>
  )
}
