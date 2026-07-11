import { sanityFetch } from '@/sanity/client'
import { glossaryQuery } from '@/sanity/queries'

type Criterio = { termino: string; estandar: string }
type GlossaryData = { badge: string; titulo: string; parrafo: string; criterios: Criterio[] }

const FB_CRITERIOS: Criterio[] = [
  { termino: 'Backtesting tick a tick', estandar: 'Un sistema de trading serio se valida sobre datos históricos reales al nivel de tick, no de barra. Cualquier otro método oculta errores de ejecución. En RobotEdge aprendes a hacer backtesting tick-by-tick con NinjaTrader 8 incluyendo comisiones y slippage reales.' },
  { termino: 'Walk-Forward Analysis', estandar: 'El backtest perfecto que falla en vivo tiene nombre: overfitting. La única forma de detectarlo antes de perder capital es el Walk-Forward Analysis. La mayoría de cursos no lo enseña. En RobotEdge es obligatorio antes de pasar cualquier estrategia a operativa real.' },
  { termino: 'Profit factor verificado', estandar: 'Un sistema ganador tiene un profit factor superior a 1.5 sobre datos fuera de muestra, no sobre los mismos datos con los que se optimizó. Si un curso te muestra resultados sin especificar esto, los números no significan nada.' },
  { termino: 'Drawdown definido antes de operar', estandar: 'El drawdown máximo no es una sorpresa: es un parámetro de diseño. Un sistema robusto tiene un drawdown conocido, aceptado y dimensionado antes de activarse. Si no sabes cuánto puede perder tu sistema, no tienes un sistema.' },
  { termino: 'Gestión de posición matemática', estandar: 'El tamaño de cada operación es una ecuación, no una intuición. La gestión de posición basada en el riesgo porcentual por operación es lo que separa cuentas que aguantan de cuentas que revientan en una racha mala.' },
  { termino: 'Paper trading antes de capital real', estandar: 'Ningún sistema pasa de backtest a cuenta live sin una fase de paper trading sobre datos en tiempo real. NinjaTrader 8 incluye un simulador completamente gratuito. En RobotEdge ese paso no es opcional.' },
  { termino: 'NinjaScript (sin experiencia previa)', estandar: 'NinjaScript es el estándar de la industria para traders algorítmicos independientes en futuros y divisas. El curso enseña a programar estrategias completas desde cero, con o sin experiencia en código. El lenguaje no es la barrera — el método lo es.' },
  { termino: 'Sharpe ratio como filtro de calidad', estandar: 'Una estrategia con buen retorno pero alta volatilidad es un sistema frágil. El Sharpe ratio mide rentabilidad ajustada al riesgo. En RobotEdge no se valida una estrategia sin analizar esta métrica junto al profit factor y el drawdown.' },
  { termino: 'Ejecución automática 24/7', estandar: 'Un sistema algorítmico que requiere que estés mirando la pantalla para ejecutar no es un sistema algorítmico. En RobotEdge aprendes a desplegar estrategias que operan de forma completamente autónoma, sin intervención humana en cada operación.' },
]

export default async function Glossary() {
  let data: GlossaryData | null = null
  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    data = await sanityFetch<GlossaryData>(glossaryQuery, ['glossary'])
  }
  const badge     = data?.badge             ?? 'Protocolo de calidad de RobotEdge'
  const titulo    = data?.titulo            ?? 'Lo que define un sistema de trading ganador'
  const parrafo   = data?.parrafo           ?? 'Cualquier curso puede enseñar a dibujar líneas en un gráfico. RobotEdge enseña a construir sistemas que cumplen estos criterios antes de arriesgar un euro. Si el curso que estás considerando no cubre esto, no es un curso de trading algorítmico serio.'
  const criterios = data?.criterios?.length ? data.criterios : FB_CRITERIOS

  return (
    <section id="protocolo" className="py-24 px-6" style={{ background: '#F0EDE8' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="block w-6 h-px" style={{ background: '#059669' }} />
          <span className="text-xs tracking-[0.22em] uppercase" style={{ fontFamily: 'var(--font-mono)', color: '#059669' }}>{badge}</span>
        </div>
        <h2 className="font-display font-bold text-ink-1 leading-tight mb-3" style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}>{titulo}</h2>
        <p className="text-sm text-ink-2 leading-relaxed mb-12" style={{ maxWidth: '56ch' }}>{parrafo}</p>
        <dl className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'rgba(0,0,0,0.06)' }}>
          {criterios.map((c, i) => (
            <div key={i} className="bg-white p-6 flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0 text-sm font-bold" style={{ color: '#059669' }} aria-hidden>✓</span>
                <dt className="font-display font-bold text-ink-1 text-sm">{c.termino}</dt>
              </div>
              <dd className="text-sm text-ink-2 leading-relaxed">{c.estandar}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
