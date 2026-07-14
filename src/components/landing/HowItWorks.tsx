import { sanityFetch } from '@/sanity/client'
import { howItWorksQuery } from '@/sanity/queries'

type Fase = { titulo: string; duracion: string; descripcion: string }
type HowItWorksData = { badge: string; titulo: string; parrafo: string; fases: Fase[] }

const FB_FASES: Fase[] = [
  { titulo: 'La clave para ser un RobotEdger rentable', duracion: 'Semana 1', descripcion: 'Deja de hacer lo que te hace perder y aprende a ganar con robots. Qué es el trading algorítmico y por qué supera al discrecional, el lenguaje esencial del trader, tus primeros pasos en NinjaTrader y cómo usar el interés compuesto para multiplicar capital.' },
  { titulo: 'Teoría probabilística', duracion: 'Semana 2', descripcion: 'Usa las matemáticas para operar con ventaja. Esperanza matemática, ratios clave (Profit Factor, Sharpe, Sortino, Drawdown), simulaciones Montecarlo y gestión del riesgo con position sizing para crecer de forma segura.' },
  { titulo: 'Indicadores y análisis técnico', duracion: 'Semana 3', descripcion: 'Identifica los indicadores que realmente te hacen ganar dinero. Instalación de NinjaTrader, lectura de velas japonesas, indicadores clave (SMA, EMA, RSI, DM, Estocástico, Bollinger) y cómo combinarlos sin sobrecargar la estrategia.' },
  { titulo: 'Crea y backtestea tu primera estrategia', duracion: 'Semana 4', descripcion: 'Monta tu robot en minutos sin programar. Uso del Strategy Builder paso a paso, las entradas y salidas más efectivas, y cómo hacer un backtest en NinjaTrader — con una primera estrategia rentable lista para usar.' },
  { titulo: 'Estrategia avanzada en NinjaTrader', duracion: 'Semana 5', descripcion: 'Saca todo el potencial del backtest profesional. Cómo medir la rentabilidad real de tu estrategia, patrones estructurales y correlaciones entre activos, y salidas avanzadas con variables, breakeven y stops inteligentes.' },
  { titulo: 'Optimiza tu estrategia sin cagarla', duracion: 'Semana 6', descripcion: 'Aumenta beneficios evitando el overfitting. Qué es el sobreajuste y cómo evitarlo, qué parámetros optimizar (indicadores, stops, instrumentos, horarios) y las señales que confirman que tu estrategia es sólida.' },
  { titulo: 'Gestión del riesgo y puesta en marcha en real', duracion: 'Semana 7', descripcion: 'Opera en vivo con control total y sin sustos. Position sizing aplicado a estrategias reales, horarios y márgenes de futuros, montaje de servidor y activación en tiempo real — con tu trabajo final: una estrategia validada con Montecarlo.' },
  { titulo: 'Domina las Prop Firms', duracion: 'Bonus', descripcion: 'Aprende a exprimir a las casas de fondeo con un sistema matemático que calcula exactamente tu tasa de retiro en piloto automático.' },
  { titulo: 'Correlación entre estrategias', duracion: 'Bonus', descripcion: 'Aprende a combinar tus estrategias — no para hacer multiestrategia, sino para maximizar tus ganancias y minimizar tus pérdidas combinándolas entre ellas.' },
]

export default async function HowItWorks() {
  let data: HowItWorksData | null = null
  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    data = await sanityFetch<HowItWorksData>(howItWorksQuery, ['howItWorks'])
  }
  const badge   = data?.badge   ?? 'De BoboTrader a RobotEdger'
  const titulo  = data?.titulo  ?? 'Pasarás de cero a sistema operativo en vivo'
  const parrafo = data?.parrafo ?? 'El proceso de construir un robot de trading sigue una secuencia lógica. No hay atajos, pero hay un camino claro. Esto es lo que recorrerás.'
  const fases   = data?.fases?.length ? data.fases : FB_FASES

  return (
    <section id="metodo" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 40% at 20% 50%, rgba(20,138,255,0.04) 0%, transparent 60%)' }} />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 max-w-xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-6 h-px" style={{ background: '#148AFF' }} />
            <span className="text-xs tracking-[0.22em] uppercase" style={{ fontFamily: 'var(--font-mono)', color: '#148AFF' }}>{badge}</span>
          </div>
          <h2 className="font-display font-bold text-ink-1 leading-tight mb-5" style={{ fontSize: 'clamp(26px, 3.5vw, 44px)' }}>{titulo}</h2>
          <p className="text-ink-2 leading-relaxed" style={{ maxWidth: '52ch' }}>{parrafo}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'rgba(0,0,0,0.06)' }}>
          {fases.map((phase, i) => (
            <div key={i} className="p-8 flex flex-col gap-4" style={{ background: 'rgba(255,255,255,0.72)' }}>
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-bold" style={{ color: '#148AFF', opacity: 0.4 }}>{String(i + 1).padStart(2, '0')}</span>
                <span className="text-[10px] tracking-[0.12em] uppercase px-2 py-1 rounded-sm" style={{ fontFamily: 'var(--font-mono)', background: 'rgba(20,138,255,0.08)', color: '#148AFF', border: '1px solid rgba(20,138,255,0.15)' }}>{phase.duracion}</span>
              </div>
              <h3 className="text-sm font-semibold text-ink-1 leading-snug">{phase.titulo}</h3>
              <p className="text-sm text-ink-2 leading-relaxed">{phase.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
