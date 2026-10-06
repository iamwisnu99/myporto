import { useLanguage } from '../context/LanguageContext'

export default function TechMarquee() {
  const { lang } = useLanguage()

  const itemsEn = [
    'AI PROMPTING & WORKFLOWS',
    'STRATEGIC TECH ADVISORY',
    'BUSINESS PROBLEM SOLVING',
    'PRIMADEV DIGITAL TECHNOLOGY',
    'ENTERPRISE ARCHITECTURE',
    'DIGITAL TRANSFORMATION',
    'MEASURABLE ROI & UTILITY',
  ]

  const itemsId = [
    'PEMANFAATAN & INTEGRASI AI',
    'KONSULTASI TEKNOLOGI BISNIS',
    'SOLUSI MASALAH OPERASIONAL',
    'PRIMADEV DIGITAL TECHNOLOGY',
    'PENGEMBANGAN SISTEM DIGITAL',
    'SOLUSI PRAKTIS & TEPAT GUNA',
    'DAMPAK BISNIS NYATA',
  ]

  const items = lang === 'id' ? itemsId : itemsEn

  return (
    <div className="relative w-full overflow-hidden border-y border-outline-variant/15 bg-surface-container-lowest/60 backdrop-blur-md py-4 select-none z-20">
      {/* Edge gradient masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex w-max animate-marquee space-x-8 items-center">
        {[...items, ...items, ...items].map((text, i) => (
          <div key={i} className="flex items-center space-x-8 flex-shrink-0">
            <span className="font-tech text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.2em] text-on-surface-variant/80 hover:text-primary transition-colors">
              {text}
            </span>
            <span className="text-primary text-[10px] opacity-40">◆</span>
          </div>
        ))}
      </div>
    </div>
  )
}
