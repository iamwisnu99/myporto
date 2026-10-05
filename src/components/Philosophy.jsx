import { useLanguage } from '../context/LanguageContext'

export default function Philosophy() {
  const { t } = useLanguage()

  return (
    <section className="py-section-lg text-white px-5 text-center relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, rgba(var(--color-primary-dark), 1) 0%, rgba(var(--color-primary), 1) 50%, rgba(var(--color-primary-light), 0.8) 100%)' }}>
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.04] flex items-center justify-center pointer-events-none">
        <span
          className="material-symbols-outlined"
          style={{ fontSize: '320px', fontVariationSettings: "'FILL' 0" }}
        >
          format_quote
        </span>
      </div>

      {/* Subtle rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
        <div className="w-[500px] h-[500px] border border-white rounded-full" />
        <div className="absolute w-[350px] h-[350px] border border-white rounded-full" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <p className="text-[11px] font-bold text-white/40 uppercase tracking-[0.2em] mb-8">
          {t('philosophy', 'label') || 'Professional Philosophy'}
        </p>
        <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-extrabold leading-tight text-white mb-8">
          {t('philosophy', 'quote')}
        </h2>
        <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, rgba(var(--color-primary-light), 1), transparent)' }} />
      </div>
    </section>
  )
}
