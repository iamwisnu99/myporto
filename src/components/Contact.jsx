import useReveal from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'

export default function Contact() {
  const ref = useReveal()
  const { t } = useLanguage()

  return (
    <footer ref={ref} id="contact" className="bg-surface-container-low relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-[0.03] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(var(--color-primary), 1), transparent 70%)' }} />

      {/* Main contact area */}
      <div className="max-w-container-max mx-auto px-5 pt-section-md pb-16 md:pt-section-lg md:pb-20 text-center relative z-10">
        <span className="section-label reveal">{t('contact', 'label')}</span>

        <h2 className="reveal font-display text-h1-mobile md:text-h1 font-bold text-primary-dark mb-6 leading-tight">
          {t('contact', 'title')}
        </h2>

        <p className="reveal delay-100 text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
          {t('contact', 'desc')}
        </p>

        <div className="reveal delay-200 flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* Email CTA */}
          <a
            href="mailto:primawisnu99@gmail.com"
            className="btn-primary w-full sm:w-auto"
          >
            <span
              className="material-symbols-outlined mr-2 text-[20px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              mail
            </span>
            {t('contact', 'emailBtn')}
          </a>

          {/* LinkedIn CTA */}
          <a
            href="https://www.linkedin.com/in/therealwisnu"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline w-full sm:w-auto"
          >
            <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            {t('contact', 'linkedinBtn')}
          </a>
        </div>
      </div>

      {/* Footer bar */}
      <div className="border-t border-outline-variant/15">
        <div className="max-w-container-max mx-auto px-5 py-8 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-12 items-center">
          {/* Brand */}
          <div className="text-center lg:text-left">
            <p className="font-display text-[20px] font-extrabold text-primary">Prima Wisnu<span className="text-primary-light">.</span></p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {[
              { id: 'about', href: '#about' },
              { id: 'expertise', href: '#expertise' },
              { id: 'business', href: '#business' },
              { id: 'ai', href: '#ai' },
              { id: 'contact', href: '#contact' },
            ].map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-[13px] text-on-surface-variant hover:text-primary"
                style={{ transition: 'color 0.2s ease' }}
              >
                {t('nav', link.id)}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="font-tech text-[12px] text-on-surface-variant/70 text-center lg:text-right">
            © {new Date().getFullYear()} PRIMA WISNU ABROR AZMI.<br className="sm:hidden" /> {t('contact', 'rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}
