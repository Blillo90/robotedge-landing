import { sanityFetch } from '@/sanity/client'
import { featuresQuery } from '@/sanity/queries'

type Feature = { titulo: string; descripcion: string; etiqueta: string }
type FeaturesData = { badge: string; titulo: string; parrafo: string; features: Feature[] }

const FB_FEATURES: Feature[] = [
  { titulo: 'Basado en Datos', descripcion: 'Cada decisión tiene un fundamento histórico. Antes de arriesgar un euro real, sabes cómo se habría comportado tu estrategia en miles de escenarios pasados. Sin suposiciones, solo evidencia.', etiqueta: 'Data-driven' },
  { titulo: 'Probabilístico', descripcion: 'No buscamos certezas. Buscamos ventaja estadística: estrategias con esperanza matemática positiva, ejecutadas con la disciplina suficiente para que el edge se materialice en el tiempo.', etiqueta: 'Estadística aplicada' },
  { titulo: 'Automatizado', descripcion: 'Una vez validado, el sistema opera solo. Sin necesidad de estar pegado a la pantalla ni tomar decisiones bajo presión. El robot ejecuta las reglas; tú supervisas el proceso.', etiqueta: 'Sin intervención manual' },
  { titulo: 'Replicable y Escalable', descripcion: 'Un sistema bien construido puede gestionarse, duplicarse y mejorarse con el tiempo. Aprendes a operar como un negocio, no como un apostador con suerte variable.', etiqueta: 'Proceso sistematizado' },
]

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
    <svg viewBox="0 0 176 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-44 h-20 opacity-20" aria-hidden>
      {candles.map((c) => {
        const color = c.bull ? '#10B981' : '#6A8FAA'
        const bodyTop = Math.min(c.open, c.close)
        const bodyH = Math.abs(c.open - c.close)
        return (
          <g key={c.x}>
            <line x1={c.x} y1={c.high} x2={c.x} y2={c.low} stroke={color} strokeWidth="1.5" />
            <rect x={c.x - 6} y={bodyTop} width={12} height={Math.max(bodyH, 2)} fill={color} rx="1" />
          </g>
        )
      })}
    </svg>
  )
}

export default async function Features() {
  let data: FeaturesData | null = null
  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    data = await sanityFetch<FeaturesData>(featuresQuery, ['features'])
  }
  const badge    = data?.badge    ?? 'El Método'
  const titulo   = data?.titulo   ?? 'Este es el método. Y funciona porque los números no mienten.'
  const parrafo  = data?.parrafo  ?? 'No es intuición ni señales: es un robot construido en NinjaTrader 8 que opera futuros NQ, ES o GC con reglas matemáticas exactas — las mismas que defines y validas tú con backtesting tick-by-tick antes de arriesgar un euro real.'
  const features = data?.features?.length ? data.features : FB_FEATURES

  return (
    <section id="curso" className="py-28 px-6 relative overflow-hidden" style={{ background: '#0C1521' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(16,185,129,0.05) 0%, transparent 60%)' }} />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-6 h-px" style={{ background: '#10B981' }} />
              <span className="text-xs tracking-[0.22em] uppercase" style={{ fontFamily: 'var(--font-mono)', color: '#10B981' }}>{badge}</span>
            </div>
            <h2 className="font-display font-bold leading-tight mb-4" style={{ fontSize: 'clamp(26px, 3.5vw, 44px)', color: '#F0F4F8' }}>{titulo}</h2>
            <p className="leading-relaxed" style={{ maxWidth: '52ch', color: '#5A7A95' }}>{parrafo}</p>
          </div>
          <CandleChart />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(255,255,255,0.05)' }}>
          {features.map((f, i) => (
            <div key={i} className="feature-card p-8 relative overflow-hidden" style={{ background: '#0C1521' }}>
              <p className="feature-num font-mono text-2xl font-medium mb-6 transition-colors">{String(i + 1).padStart(2, '0')}</p>
              <span className="inline-block text-[10px] tracking-[0.12em] uppercase px-2 py-1 mb-4 rounded-sm" style={{ fontFamily: 'var(--font-mono)', background: 'rgba(16,185,129,0.1)', color: '#10B981', border: '1px solid rgba(16,185,129,0.2)' }}>{f.etiqueta}</span>
              <h3 className="text-sm font-semibold mb-3 leading-snug" style={{ color: '#F0F4F8' }}>{f.titulo}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#5A7A95' }}>{f.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
