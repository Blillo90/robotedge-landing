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

function Donut({ pct, color, size = 52 }: { pct: number; color: string; size?: number }) {
  const r = (size - 8) / 2
  const circ = 2 * Math.PI * r
  const dash = Math.min(pct / 100, 1) * circ
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="5"/>
      <circle
        cx={size/2} cy={size/2} r={r}
        fill="none" stroke={color} strokeWidth="5"
        strokeDasharray={`${dash} ${circ}`}
        strokeLinecap="round"
        transform={`rotate(-90 ${size/2} ${size/2})`}
      />
    </svg>
  )
}

function PerformanceCard() {
  const metrics = [
    { label: 'Profit',          sublabel: 'All Time', value: '+48.26%', pct: 48,   color: '#10B981', valueColor: '#10B981' },
    { label: 'Winning Trades',  sublabel: 'All Time', value: '64.94%',  pct: 64.9, color: '#10B981', valueColor: '#F0F4F8' },
    { label: 'Avg Gain in $',   sublabel: 'All Time', value: '$17',     pct: 72,   color: '#06B6D4', valueColor: '#F0F4F8' },
    { label: 'Avg Gain in %',   sublabel: 'All Time', value: '+1.34%',  pct: 68,   color: '#10B981', valueColor: '#10B981' },
  ]

  return (
    <div
      className="w-full overflow-hidden shadow-2xl"
      style={{ borderRadius: '12px', background: '#111C28', border: '1px solid rgba(255,255,255,0.08)' }}
    >
      {/* Header */}
      <div
        className="px-6 py-4 flex items-center justify-between"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', background: '#0C1521' }}
      >
        <span className="text-sm tracking-[0.16em] uppercase font-semibold" style={{ fontFamily: 'var(--font-mono)', color: '#F0F4F8' }}>
          Nuestros Resultados
        </span>
        <span className="flex items-center gap-2 px-3 py-1 rounded-full ml-auto" style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.25)' }}>
          <span className="w-2 h-2 rounded-full shrink-0" style={{ background: '#10B981', boxShadow: '0 0 6px #10B981' }} />
          <span className="text-xs font-medium" style={{ fontFamily: 'var(--font-mono)', color: '#10B981' }}>Live</span>
        </span>
      </div>

      {/* Equity curve */}
      <div className="px-6 pt-5 pb-3" style={{ height: 100 }}>
        <EquityCurve />
      </div>

      {/* Metric grid */}
      <div className="grid grid-cols-2 gap-px mx-6 mb-5" style={{ background: 'rgba(255,255,255,0.06)' }}>
        {metrics.map((m) => (
          <div key={m.label} className="flex items-center gap-3 p-4" style={{ background: '#111C28' }}>
            <div className="relative shrink-0">
              <Donut pct={m.pct} color={m.color} size={52} />
            </div>
            <div className="min-w-0">
              <p className="text-xs mb-0.5 truncate" style={{ fontFamily: 'var(--font-mono)', color: '#5A7A95' }}>{m.label}</p>
              <p className="text-xs mb-1" style={{ fontFamily: 'var(--font-mono)', color: '#3A5270' }}>{m.sublabel}</p>
              <p className="text-base font-bold leading-none" style={{ fontFamily: 'var(--font-mono)', color: m.valueColor }}>{m.value}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default function Hero() {
  return (
    <section className="pt-[60px] px-4 sm:px-6 pb-6">
      <div
        className="relative max-w-[1400px] mx-auto overflow-hidden"
        style={{
          background: '#0C1521',
          borderRadius: '12px',
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
        <div className="max-w-2xl">

          {/* Eyebrow tag */}
          <div className="animate-fade-up delay-1 flex items-center gap-3 mb-8">
            <span className="block w-8 h-px" style={{ background: '#148AFF' }} />
            <span
              className="text-xs tracking-[0.22em] uppercase"
              style={{ fontFamily: 'var(--font-mono)', color: '#148AFF' }}
            >
              Curso de Trading Algorítmico
            </span>
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-up delay-2 font-display font-extrabold leading-[1.05] tracking-tight mb-8"
            style={{ fontSize: 'clamp(34px, 5vw, 68px)', maxWidth: '18ch', color: '#F0F4F8' }}
          >
            Aprende trading algorítmico y deja que tus sistemas operen mientras{' '}
            <span style={{ color: '#148AFF' }}>tú vives tu vida.</span>
          </h1>

          {/* Body */}
          <p
            className="animate-fade-up delay-3 leading-relaxed mb-10"
            style={{ fontSize: '1.1rem', maxWidth: '48ch', color: '#5A7A95' }}
          >
            La mayoría de traders pierde porque opera con emociones. Tú vas a
            operar con datos, reglas y matemáticas. Este es el método que
            transforma cómo te relacionas con los mercados.
          </p>

          {/* Lead form */}
          <div className="animate-fade-up delay-4 mb-8">
            <div
              className="px-6 py-6"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <HeroForm />
            </div>
          </div>

          {/* Performance card */}
          <div className="animate-fade-in delay-4 mb-12">
            <PerformanceCard />
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
      </div>
      </div>
    </section>
  )
}
