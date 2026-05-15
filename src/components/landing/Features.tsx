const features = [
  {
    number: '01',
    title: 'Basado en Datos',
    description:
      'Cada decisión tiene un fundamento histórico. Antes de arriesgar un euro real, sabes cómo se habría comportado tu estrategia en miles de escenarios pasados. Sin suposiciones, solo evidencia.',
    tag: 'Data-driven',
  },
  {
    number: '02',
    title: 'Probabilístico',
    description:
      'No buscamos certezas. Buscamos ventaja estadística: estrategias con esperanza matemática positiva, ejecutadas con la disciplina suficiente para que el edge se materialice en el tiempo.',
    tag: 'Estadística aplicada',
  },
  {
    number: '03',
    title: 'Automatizado',
    description:
      'Una vez validado, el sistema opera solo. Sin necesidad de estar pegado a la pantalla ni tomar decisiones bajo presión. El robot ejecuta las reglas; tú supervisas el proceso.',
    tag: 'Sin intervención manual',
  },
  {
    number: '04',
    title: 'Replicable y Escalable',
    description:
      'Un sistema bien construido puede gestionarse, duplicarse y mejorarse con el tiempo. Aprendes a operar como un negocio, no como un apostador con suerte variable.',
    tag: 'Proceso sistematizado',
  },
]

/* Decorative OHLC/candlestick SVG */
function CandleChart() {
  const candles = [
    { x: 12,  open: 62, close: 42, high: 35, low: 70, bull: true  },
    { x: 36,  open: 52, close: 58, high: 48, low: 65, bull: false },
    { x: 60,  open: 48, close: 30, high: 24, low: 55, bull: true  },
    { x: 84,  open: 38, close: 44, high: 34, low: 50, bull: false },
    { x: 108, open: 32, close: 16, high: 10, low: 38, bull: true  },
    { x: 132, open: 22, close: 28, high: 18, low: 33, bull: false },
    { x: 156, open: 18, close: 8,  high: 4,  low: 22, bull: true  },
  ]

  return (
    <svg
      viewBox="0 0 176 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-44 h-20 opacity-20"
      aria-hidden
    >
      {candles.map((c) => {
        const color = c.bull ? '#10B981' : '#6A8FAA'
        const bodyTop = Math.min(c.open, c.close)
        const bodyH = Math.abs(c.open - c.close)
        return (
          <g key={c.x}>
            {/* Wick */}
            <line
              x1={c.x} y1={c.high} x2={c.x} y2={c.low}
              stroke={color} strokeWidth="1.5"
            />
            {/* Body */}
            <rect
              x={c.x - 6} y={bodyTop}
              width={12} height={Math.max(bodyH, 2)}
              fill={color} rx="1"
            />
          </g>
        )
      })}
    </svg>
  )
}

export default function Features() {
  return (
    <section
      id="curso"
      className="py-28 px-6 relative overflow-hidden"
      style={{ background: '#0C1521' }}
    >
      {/* Subtle top glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(16,185,129,0.05) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-6 h-px" style={{ background: '#10B981' }} />
              <span
                className="text-xs tracking-[0.22em] uppercase"
                style={{ fontFamily: 'var(--font-mono)', color: '#10B981' }}
              >
                El Método
              </span>
            </div>
            <h2
              className="font-display font-bold leading-tight mb-4"
              style={{ fontSize: 'clamp(26px, 3.5vw, 44px)', color: '#F0F4F8' }}
            >
              Este es el método. Y funciona porque{' '}
              <span style={{ color: '#10B981' }}>los números no mienten.</span>
            </h2>
            <p className="leading-relaxed" style={{ maxWidth: '52ch', color: '#5A7A95' }}>
              <strong style={{ color: '#F0F4F8' }}>No es intuición ni señales: es un robot construido en NinjaTrader 8 que opera futuros NQ, ES o GC con reglas matemáticas exactas</strong>{' '}
              — las mismas que defines y validas tú con backtesting tick-by-tick antes de arriesgar un euro real.
            </p>
          </div>
          {/* Decorative candles */}
          <CandleChart />
        </div>

        {/* Feature grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ background: 'rgba(255,255,255,0.05)' }}
        >
          {features.map((f) => (
            <div
              key={f.number}
              className="feature-card p-8 relative overflow-hidden"
              style={{ background: '#0C1521' }}
            >
              {/* Number */}
              <p
                className="feature-num font-mono text-2xl font-medium mb-6 transition-colors"
              >
                {f.number}
              </p>
              {/* Tag badge */}
              <span
                className="inline-block text-[10px] tracking-[0.12em] uppercase px-2 py-1 mb-4 rounded-sm"
                style={{
                  fontFamily: 'var(--font-mono)',
                  background: 'rgba(16,185,129,0.1)',
                  color: '#10B981',
                  border: '1px solid rgba(16,185,129,0.2)',
                }}
              >
                {f.tag}
              </span>
              <h3
                className="text-sm font-semibold mb-3 leading-snug"
                style={{ color: '#F0F4F8' }}
              >
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#5A7A95' }}>
                {f.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
