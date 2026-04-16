import Link from 'next/link'
import HeroForm from './HeroForm'

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
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 110 C25 105 45 96 65 84 C80 75 85 82 100 70 C118 56 130 48 152 38 C165 32 170 40 184 30 C200 19 220 13 242 8 C262 4 285 3 320 1 L320 130 L0 130 Z"
        fill="url(#eq-fill)"
      />
      <path
        d="M0 110 C25 105 45 96 65 84 C80 75 85 82 100 70 C118 56 130 48 152 38 C165 32 170 40 184 30 C200 19 220 13 242 8 C262 4 285 3 320 1"
        stroke="#10B981"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="320" cy="1" r="3.5" fill="#10B981" />
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
      className="w-full max-w-[420px] rounded-sm overflow-hidden shadow-2xl"
      style={{
        background: '#111C28',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      {/* Header */}
      <div
        className="px-6 py-4 flex items-center justify-between"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', background: '#0C1521' }}
      >
        <span
          className="text-sm tracking-[0.16em] uppercase font-semibold"
          style={{ fontFamily: 'var(--font-mono)', color: '#F0F4F8' }}
        >
          Estrategia Demo
        </span>
        <span className="flex items-center gap-1.5">
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: '#10B981', boxShadow: '0 0 8px #10B981' }}
          />
          <span
            className="text-sm"
            style={{ fontFamily: 'var(--font-mono)', color: '#10B981' }}
          >
            Live
          </span>
        </span>
      </div>

      {/* Equity curve */}
      <div className="px-6 pt-5 pb-3" style={{ height: 110 }}>
        <EquityCurve />
      </div>

      {/* Metrics */}
      <div className="px-6 pb-5">
        {rows.map((r) => (
          <div
            key={r.label}
            className="flex items-center justify-between py-2.5"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
          >
            <span
              className="text-sm"
              style={{ fontFamily: 'var(--font-mono)', color: '#5A7A95' }}
            >
              {r.label}
            </span>
            <span
              className="text-sm font-bold"
              style={{
                fontFamily: 'var(--font-mono)',
                color:
                  r.positive === true
                    ? '#10B981'
                    : r.positive === false
                    ? '#F87171'
                    : '#F0F4F8',
              }}
            >
              {r.value}
            </span>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="px-6 py-3.5" style={{ background: '#0C1521', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <p className="text-xs" style={{ fontFamily: 'var(--font-mono)', color: '#3A5270' }}>
          Resultados simulados. No constituye asesoramiento financiero.
        </p>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="bg-bg-base pt-[60px] px-4 sm:px-6 pb-6">
      <div
        className="relative max-w-6xl mx-auto overflow-hidden"
        style={{
          background: '#0C1521',
          borderRadius: '4px',
        }}
      >

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 55% at 10% 50%, rgba(16,185,129,0.08) 0%, transparent 65%)',
        }}
      />

      {/* Decorative watermark */}
      <div
        className="absolute right-0 bottom-0 select-none pointer-events-none hidden xl:block leading-none"
        style={{
          fontSize: 'clamp(200px, 30vw, 440px)',
          fontFamily: 'var(--font-mono)',
          fontWeight: 500,
          color: 'rgba(255,255,255,0.02)',
          letterSpacing: '-0.06em',
        }}
        aria-hidden
      >
        01
      </div>

      <div className="relative z-10 px-8 md:px-14 py-16 md:py-20 w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">

          {/* Left: copy */}
          <div>
            {/* Eyebrow tag */}
            <div className="animate-fade-up delay-1 flex items-center gap-3 mb-8">
              <span className="block w-8 h-px" style={{ background: '#10B981' }} />
              <span
                className="text-xs tracking-[0.22em] uppercase"
                style={{ fontFamily: 'var(--font-mono)', color: '#10B981' }}
              >
                Trading Algorítmico &amp; Automatizado
              </span>
            </div>

            {/* Headline */}
            <h1
              className="animate-fade-up delay-2 font-display font-extrabold leading-[1.05] tracking-tight mb-8"
              style={{ fontSize: 'clamp(40px, 6.5vw, 86px)', maxWidth: '14ch', color: '#F0F4F8' }}
            >
              Que tus robots de trading trabajen para{' '}
              <span style={{ color: '#10B981' }}>ti.</span>
            </h1>

            {/* Body */}
            <p
              className="animate-fade-up delay-3 leading-relaxed mb-10"
              style={{ fontSize: '1.1rem', maxWidth: '46ch', color: '#5A7A95' }}
            >
              Estrategias de trading automatizadas basadas en datos, no en emociones.
              Aprende a diseñar, hacer backtesting y desplegar bots que operan con
              precisión — las 24 horas del día.
            </p>

            {/* Lead form */}
            <div className="animate-fade-up delay-4 mb-16">
              <div
                className="px-6 py-6"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <HeroForm />
              </div>
            </div>

            {/* Stat row */}
            <div
              className="animate-fade-up delay-5 pt-8 flex flex-wrap gap-10"
              style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
            >
              {[
                { label: 'Ejecución',          value: '24 / 7' },
                { label: 'Tipo de estrategia', value: 'Basada en reglas' },
                { label: 'Enfoque',            value: 'Sistemático' },
              ].map((s) => (
                <div key={s.label}>
                  <p
                    className="text-xs tracking-[0.15em] uppercase mb-1"
                    style={{ fontFamily: 'var(--font-mono)', color: '#3A5270' }}
                  >
                    {s.label}
                  </p>
                  <p
                    className="text-sm font-medium"
                    style={{ fontFamily: 'var(--font-mono)', color: '#F0F4F8' }}
                  >
                    {s.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: performance card */}
          <div className="animate-fade-in delay-3 hidden lg:flex justify-end">
            <PerformanceCard />
          </div>

        </div>
      </div>
      </div>
    </section>
  )
}
