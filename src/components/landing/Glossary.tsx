const criteria = [
  {
    term: 'Backtesting tick a tick',
    standard:
      'Un sistema de trading serio se valida sobre datos históricos reales al nivel de tick, no de barra. Cualquier otro método oculta errores de ejecución. En RobotEdge aprendes a hacer backtesting tick-by-tick con NinjaTrader 8 incluyendo comisiones y slippage reales.',
  },
  {
    term: 'Walk-Forward Analysis',
    standard:
      'El backtest perfecto que falla en vivo tiene nombre: overfitting. La única forma de detectarlo antes de perder capital es el Walk-Forward Analysis. La mayoría de cursos no lo enseña. En RobotEdge es obligatorio antes de pasar cualquier estrategia a operativa real.',
  },
  {
    term: 'Profit factor verificado',
    standard:
      'Un sistema ganador tiene un profit factor superior a 1.5 sobre datos fuera de muestra, no sobre los mismos datos con los que se optimizó. Si un curso te muestra resultados sin especificar esto, los números no significan nada.',
  },
  {
    term: 'Drawdown definido antes de operar',
    standard:
      'El drawdown máximo no es una sorpresa: es un parámetro de diseño. Un sistema robusto tiene un drawdown conocido, aceptado y dimensionado antes de activarse. Si no sabes cuánto puede perder tu sistema, no tienes un sistema.',
  },
  {
    term: 'Gestión de posición matemática',
    standard:
      'El tamaño de cada operación es una ecuación, no una intuición. La gestión de posición basada en el riesgo porcentual por operación es lo que separa cuentas que aguantan de cuentas que revientan en una racha mala.',
  },
  {
    term: 'Paper trading antes de capital real',
    standard:
      'Ningún sistema pasa de backtest a cuenta live sin una fase de paper trading sobre datos en tiempo real. NinjaTrader 8 incluye un simulador completamente gratuito. En RobotEdge ese paso no es opcional.',
  },
  {
    term: 'NinjaScript (sin experiencia previa)',
    standard:
      'NinjaScript es el estándar de la industria para traders algorítmicos independientes en futuros y divisas. El curso enseña a programar estrategias completas desde cero, con o sin experiencia en código. El lenguaje no es la barrera — el método lo es.',
  },
  {
    term: 'Sharpe ratio como filtro de calidad',
    standard:
      'Una estrategia con buen retorno pero alta volatilidad es un sistema frágil. El Sharpe ratio mide rentabilidad ajustada al riesgo. En RobotEdge no se valida una estrategia sin analizar esta métrica junto al profit factor y el drawdown.',
  },
  {
    term: 'Ejecución automática 24/7',
    standard:
      'Un sistema algorítmico que requiere que estés mirando la pantalla para ejecutar no es un sistema algorítmico. En RobotEdge aprendes a desplegar estrategias que operan de forma completamente autónoma, sin intervención humana en cada operación.',
  },
]

export default function Glossary() {
  return (
    <section
      id="protocolo"
      className="py-24 px-6"
      style={{ background: '#F0EDE8' }}
    >
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center gap-3 mb-4">
          <span className="block w-6 h-px" style={{ background: '#059669' }} />
          <span
            className="text-xs tracking-[0.22em] uppercase"
            style={{ fontFamily: 'var(--font-mono)', color: '#059669' }}
          >
            Protocolo de calidad de RobotEdge
          </span>
        </div>

        <h2
          className="font-display font-bold text-ink-1 leading-tight mb-3"
          style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}
        >
          Lo que define un sistema de trading ganador
        </h2>
        <p className="text-sm text-ink-2 leading-relaxed mb-12" style={{ maxWidth: '56ch' }}>
          Cualquier curso puede enseñar a dibujar líneas en un gráfico.{' '}
          <strong>RobotEdge enseña a construir sistemas que cumplen estos criterios antes de arriesgar un euro.</strong>{' '}
          Si el curso que estás considerando no cubre esto, no es un curso de trading algorítmico serio.
        </p>

        <dl className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'rgba(0,0,0,0.06)' }}>
          {criteria.map((c) => (
            <div key={c.term} className="bg-white p-6 flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <span
                  className="mt-0.5 shrink-0 text-sm font-bold"
                  style={{ color: '#059669' }}
                  aria-hidden
                >
                  ✓
                </span>
                <dt className="font-display font-bold text-ink-1 text-sm">
                  {c.term}
                </dt>
              </div>
              <dd className="text-sm text-ink-2 leading-relaxed">{c.standard}</dd>
            </div>
          ))}
        </dl>

      </div>
    </section>
  )
}
