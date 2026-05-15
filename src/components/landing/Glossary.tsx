const terms = [
  {
    term: 'Trading algorítmico',
    definition:
      'Automatización de operaciones en mercados financieros mediante reglas matemáticas programadas. Elimina el sesgo emocional y permite validar la estrategia sobre datos históricos antes de arriesgar capital real. En RobotEdge se implementa con NinjaTrader 8.',
  },
  {
    term: 'NinjaTrader 8',
    definition:
      'Plataforma de trading y desarrollo de algoritmos basada en NinjaScript (C#). Gratuita para backtesting y paper trading ilimitado. Conectividad nativa con Interactive Brokers, NinjaTrader Brokerage y Dorman Trading, entre otros 50+ brokers.',
  },
  {
    term: 'NinjaScript',
    definition:
      'Lenguaje de programación de NinjaTrader basado en C# para crear estrategias automatizadas e indicadores personalizados. Es el lenguaje principal del curso de RobotEdge — no requiere experiencia previa en programación para empezar.',
  },
  {
    term: 'Backtesting',
    definition:
      'Validación de una estrategia sobre datos históricos reales antes de operar con capital. NinjaTrader 8 ofrece backtesting tick-by-tick — el más preciso — incluyendo comisiones y slippage reales para obtener resultados fiables.',
  },
  {
    term: 'Drawdown',
    definition:
      'Caída máxima del capital desde un pico hasta el valle siguiente. Es la métrica de riesgo más importante de un sistema algorítmico. Un drawdown diseñado y conocido de antemano diferencia una estrategia robusta de una improvisada.',
  },
  {
    term: 'Sharpe ratio',
    definition:
      'Rentabilidad ajustada al riesgo: compara el exceso de retorno de una estrategia frente a su volatilidad. Un Sharpe superior a 1 indica que el sistema genera más retorno por unidad de riesgo, señal de una ventaja estadística real.',
  },
  {
    term: 'Profit factor',
    definition:
      'Cociente entre ganancias brutas y pérdidas brutas de una estrategia. Un profit factor superior a 1.5 indica ventaja estadística sólida. Es una de las métricas clave para evaluar la viabilidad de un algoritmo antes de pasarlo a vivo.',
  },
  {
    term: 'Walk-Forward Analysis',
    definition:
      'Método de validación que divide los datos históricos en períodos de entrenamiento y prueba sucesivos. Detecta el overfitting y confirma que la ventaja estadística es real, no un artefacto de los datos pasados.',
  },
  {
    term: 'Overfitting',
    definition:
      'Sobreoptimización de una estrategia a los datos históricos: resultados excelentes en backtest que fallan en operativa real. El error más común en trading algorítmico. El Walk-Forward Analysis es la herramienta principal para detectarlo y evitarlo.',
  },
  {
    term: 'Paper trading',
    definition:
      'Operativa simulada con datos en tiempo real sin capital real. Permite validar el comportamiento de un algoritmo en condiciones reales antes de activarlo en cuenta live. NinjaTrader 8 incluye un simulador de paper trading completamente gratuito.',
  },
]

export default function Glossary() {
  return (
    <section
      id="glosario"
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
            Glosario
          </span>
        </div>

        <h2
          className="font-display font-bold text-ink-1 leading-tight mb-3"
          style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}
        >
          Términos clave del trading algorítmico
        </h2>
        <p className="text-sm text-ink-2 leading-relaxed mb-12" style={{ maxWidth: '52ch' }}>
          <strong>Entender el vocabulario es el primer paso para construir sistemas sólidos.</strong>{' '}
          Estos son los conceptos que usarás a diario en el curso y en tu operativa real con NinjaTrader 8.
        </p>

        <dl className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'rgba(0,0,0,0.06)' }}>
          {terms.map((t) => (
            <div key={t.term} className="bg-white p-6 flex flex-col gap-2">
              <dt className="font-display font-bold text-ink-1 text-sm">
                <strong>{t.term}</strong>
              </dt>
              <dd className="text-sm text-ink-2 leading-relaxed">{t.definition}</dd>
            </div>
          ))}
        </dl>

      </div>
    </section>
  )
}
