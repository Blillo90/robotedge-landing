import Link from 'next/link'

function EquityCurve() {
  return (
    <svg
      viewBox="0 0 320 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden
    >
      <defs>
        <linearGradient id="eq-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#059669" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#059669" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Area fill */}
      <path
        d="M0 110 C25 105 45 96 65 84 C80 75 85 82 100 70 C118 56 130 48 152 38 C165 32 170 40 184 30 C200 19 220 13 242 8 C262 4 285 3 320 1 L320 130 L0 130 Z"
        fill="url(#eq-fill)"
      />
      {/* Line */}
      <path
        d="M0 110 C25 105 45 96 65 84 C80 75 85 82 100 70 C118 56 130 48 152 38 C165 32 170 40 184 30 C200 19 220 13 242 8 C262 4 285 3 320 1"
        stroke="#059669"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* End dot */}
      <circle cx="320" cy="1" r="3.5" fill="#059669" />
    </svg>
  )
}

function PerformanceCard() {
  const rows = [
    { label: 'Rentabilidad acum.',  value: '+34.7%', positive: true },
    { label: 'Drawdown máx.',       value: '-8.2%',  positive: false },
    { label: 'Win rate',            value: '58.4%',  positive: null },
    { label: 'Operaciones',         value: '847',    positive: null },
  ]

  return (
    <div
      className="w-full max-w-[320px] rounded-sm overflow-hidden shadow-xl"
      style={{
        background: '#FFFFFF',
        border: '1px solid rgba(0,0,0,0.09)',
      }}
    >
      {/* Header */}
      <div
        className="px-5 py-3.5 flex items-center justify-between"
        style={{ borderBottom: '1px solid rgba(0,0,0,0.07)', background: '#F7F5F2' }}
      >
        <span
          className="text-xs tracking-[0.16em] uppercase text-ink-1 font-medium"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Estrategia Demo
        </span>
        <span className="flex items-center gap-1.5">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: '#10B981', boxShadow: '0 0 6px #10B981' }}
          />
          <span
            className="text-xs"
            style={{ fontFamily: 'var(--font-mono)', color: '#10B981' }}
          >
            Live
          </span>
        </span>
      </div>

      {/* Equity curve */}
      <div className="px-5 pt-4 pb-2" style={{ height: 80 }}>
        <EquityCurve />
      </div>

      {/* Metrics */}
      <div className="px-5 pb-4">
        {rows.map((r) => (
          <div
            key={r.label}
            className="flex items-center justify-between py-2"
            style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}
          >
            <span
              className="text-xs text-ink-2"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {r.label}
            </span>
            <span
              className="text-xs font-semibold"
              style={{
                fontFamily: 'var(--font-mono)',
                color:
                  r.positive === true
                    ? '#059669'
                    : r.positive === false
                    ? '#DC2626'
                    : '#141412',
              }}
            >
              {r.value}
            </span>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="px-5 py-3" style={{ background: '#F7F5F2', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <p className="text-[10px] text-ink-3" style={{ fontFamily: 'var(--font-mono)' }}>
          Resultados simulados. No constituye asesoramiento financiero.
        </p>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center hero-grid bg-bg-base overflow-hidden pt-[60px]">

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 50% at 10% 50%, rgba(5,150,105,0.06) 0%, transparent 60%)',
        }}
      />

      {/* Decorative watermark number */}
      <div
        className="absolute right-0 bottom-0 select-none pointer-events-none hidden xl:block leading-none"
        style={{
          fontSize: 'clamp(200px, 30vw, 440px)',
          fontFamily: 'var(--font-mono)',
          fontWeight: 500,
          color: 'rgba(0,0,0,0.035)',
          letterSpacing: '-0.06em',
        }}
        aria-hidden
      >
        01
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">

          {/* Left: copy */}
          <div>
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
              style={{ fontSize: 'clamp(40px, 6.5vw, 86px)', maxWidth: '14ch' }}
            >
              Que tus robots de trading trabajen para{' '}
              <span className="text-edge">ti.</span>
            </h1>

            {/* Body */}
            <p
              className="animate-fade-up delay-3 text-ink-2 leading-relaxed mb-10"
              style={{ fontSize: '1.1rem', maxWidth: '46ch' }}
            >
              Estrategias de trading automatizadas basadas en datos, no en emociones.
              Aprende a diseñar, hacer backtesting y desplegar bots que operan con
              precisión — las 24 horas del día.
            </p>

            {/* CTAs */}
            <div className="animate-fade-up delay-4 flex flex-col sm:flex-row gap-3 mb-16">
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
              className="animate-fade-up delay-5 pt-8 flex flex-wrap gap-10"
              style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}
            >
              {[
                { label: 'Ejecución',          value: '24 / 7' },
                { label: 'Tipo de estrategia', value: 'Basada en reglas' },
                { label: 'Enfoque',            value: 'Sistemático' },
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

          {/* Right: performance card — hidden on mobile */}
          <div className="animate-fade-in delay-3 hidden lg:flex justify-end">
            <PerformanceCard />
          </div>

        </div>
      </div>
    </section>
  )
}
