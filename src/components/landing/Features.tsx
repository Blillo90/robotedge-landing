const features = [
  {
    number: '01',
    title: 'Sistemas Basados en Reglas',
    description:
      'Cada estrategia de trading automatizado funciona con lógica explícita y verificable — sin improvisación, sin decisiones emocionales. Solo ejecución consistente y repetible.',
  },
  {
    number: '02',
    title: 'Backtesting con Datos Reales',
    description:
      'Antes de que un bot opere en vivo, se somete a pruebas rigurosas contra datos históricos con métodos estadísticos serios. Conoce tu ventaja antes de arriesgar un euro.',
  },
  {
    number: '03',
    title: 'Gestión de Riesgo Integrada',
    description:
      'Tamaño de posición, límites de drawdown y gestión de capital integrados directamente en tus algoritmos — porque proteger el capital es tan crítico como generar retornos.',
  },
  {
    number: '04',
    title: 'Despliegue del Bot en Vivo',
    description:
      'De la estrategia con backtesting al bot operativo: conexión con brokers, monitorización en tiempo real y optimización continua — explicado paso a paso.',
  },
]

export default function Features() {
  return (
    <section className="py-28 px-6 bg-bg-surface">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-6 h-px bg-edge" />
            <span
              className="text-xs tracking-[0.22em] uppercase text-edge"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Metodología
            </span>
          </div>
          <h2
            className="font-display font-bold text-ink-1 leading-tight mb-4"
            style={{ fontSize: 'clamp(26px, 3.5vw, 44px)' }}
          >
            Los pilares del trading algorítmico
          </h2>
          <p className="text-ink-2 leading-relaxed" style={{ maxWidth: '52ch' }}>
            El trading automatizado no tiene por qué ser una caja negra. Desglosamos
            cada componente — desde la lógica de la estrategia hasta el despliegue del
            bot — para que entiendas exactamente cómo funciona tu sistema.
          </p>
        </div>

        {/* Feature grid — hairline borders via gap-px */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ background: 'rgba(0,0,0,0.07)' }}
        >
          {features.map((f) => (
            <div key={f.number} className="feature-card p-8 bg-bg-surface">
              <p className="feature-num font-mono text-2xl font-medium mb-6">
                {f.number}
              </p>
              <h3 className="text-sm font-semibold text-ink-1 mb-3 leading-snug">
                {f.title}
              </h3>
              <p className="text-sm text-ink-2 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
