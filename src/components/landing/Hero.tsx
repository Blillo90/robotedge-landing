import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center hero-grid bg-bg-base overflow-hidden pt-[60px]">

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 55% at 15% 45%, rgba(5,150,105,0.06) 0%, transparent 65%)',
        }}
      />

      {/* Decorative background number */}
      <div
        className="absolute right-0 bottom-0 select-none pointer-events-none hidden lg:block leading-none"
        style={{
          fontSize: 'clamp(180px, 28vw, 400px)',
          fontFamily: 'var(--font-mono)',
          fontWeight: 500,
          color: 'rgba(0,0,0,0.04)',
          letterSpacing: '-0.05em',
        }}
        aria-hidden
      >
        01
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">

        {/* Eyebrow tag */}
        <div className="animate-fade-up delay-1 flex items-center gap-3 mb-8">
          <span className="block w-8 h-px bg-edge" />
          <span
            className="text-xs tracking-[0.22em] uppercase text-edge"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Trading Algorítmico &amp; Automatizado
          </span>
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up delay-2 font-display font-extrabold text-ink-1 leading-[1.05] tracking-tight mb-8"
          style={{ fontSize: 'clamp(40px, 7vw, 92px)', maxWidth: '14ch' }}
        >
          Que tus robots de trading trabajen para{' '}
          <span className="text-edge">ti.</span>
        </h1>

        {/* Body */}
        <p
          className="animate-fade-up delay-3 text-ink-2 leading-relaxed mb-10"
          style={{ fontSize: '1.1rem', maxWidth: '48ch' }}
        >
          Estrategias de trading automatizadas basadas en datos, no en emociones.
          Aprende a diseñar, hacer backtesting y desplegar bots que operan con
          precisión — las 24 horas del día.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-4 flex flex-col sm:flex-row gap-3">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-edge hover:bg-edge-dim text-white text-sm font-medium px-6 py-3.5 transition-colors"
          >
            Ver las Guías
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="#about"
            className="inline-flex items-center text-sm font-medium px-6 py-3.5 text-ink-2 hover:text-ink-1 transition-colors"
            style={{ border: '1px solid rgba(0,0,0,0.12)' }}
          >
            Sobre Nosotros
          </Link>
        </div>

        {/* Stat row */}
        <div
          className="animate-fade-up delay-5 mt-20 pt-8 flex flex-wrap gap-12"
          style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}
        >
          {[
            { label: 'Ejecución',     value: '24 / 7' },
            { label: 'Tipo de estrategia', value: 'Basada en reglas' },
            { label: 'Enfoque',       value: 'Sistemático' },
          ].map((s) => (
            <div key={s.label}>
              <p
                className="text-xs tracking-[0.15em] uppercase text-ink-3 mb-1"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {s.label}
              </p>
              <p
                className="text-sm font-medium text-ink-1"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {s.value}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
