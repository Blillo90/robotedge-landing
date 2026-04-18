const phases = [
  {
    number: '01',
    title: 'Fundamentos del trading algorítmico',
    duration: 'Semanas 1 – 4',
    description:
      'Antes de programar nada, entiendes cómo funcionan los mercados desde una perspectiva cuantitativa: qué es un sistema de trading, qué lo diferencia del trading discrecional y por qué la validación estadística lo cambia todo.',
  },
  {
    number: '02',
    title: 'Diseño de la estrategia',
    duration: 'Semanas 3 – 5',
    description:
      'Aprendes a construir hipótesis operables: condiciones de entrada, condiciones de salida, filtros y gestión de posición. Sin código todavía. Solo lógica, estructura y criterio.',
  },
  {
    number: '03',
    title: 'Backtesting con datos reales',
    duration: 'Semanas 4 – 8',
    description:
      'Pruebas la estrategia sobre datos históricos para medir su comportamiento real. Aprendes a interpretar métricas clave: profit factor, drawdown, Sharpe ratio, curva de equity. Y a detectar overfitting antes de que te cueste dinero.',
  },
  {
    number: '04',
    title: 'Optimización y robustez',
    duration: 'Semanas 7 – 10',
    description:
      'Una estrategia que funciona en un solo periodo no es robusta. Validarás que tu sistema es sólido en distintas condiciones de mercado, no solo en el rango donde lo diseñaste.',
  },
  {
    number: '05',
    title: 'Automatización y despliegue',
    duration: 'Semanas 9 – 12',
    description:
      'Con la estrategia validada, pasas al código. Conectas el sistema a tu bróker y lo pones en funcionamiento. A partir de aquí, el robot opera siguiendo las reglas que tú definiste.',
  },
  {
    number: '06',
    title: 'Supervisión y cartera de sistemas',
    duration: 'Mes 3 en adelante',
    description:
      'Un sistema algorítmico no es "ponlo y olvídalo". Aprendes a monitorizar el rendimiento, detectar señales de degradación y gestionar una cartera de sistemas diversificados para mayor estabilidad.',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="curso"
      className="py-28 px-6 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 20% 50%, rgba(20,138,255,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 max-w-xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-6 h-px" style={{ background: '#148AFF' }} />
            <span
              className="text-xs tracking-[0.22em] uppercase"
              style={{ fontFamily: 'var(--font-mono)', color: '#148AFF' }}
            >
              Cómo funciona
            </span>
          </div>
          <h2
            className="font-display font-bold text-ink-1 leading-tight mb-5"
            style={{ fontSize: 'clamp(26px, 3.5vw, 44px)' }}
          >
            De cero a sistema operativo en vivo
          </h2>
          <p className="text-ink-2 leading-relaxed" style={{ maxWidth: '52ch' }}>
            El proceso de construir un robot de trading sigue una secuencia lógica.
            No hay atajos, pero hay un camino claro. Esto es lo que recorrerás.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'rgba(0,0,0,0.06)' }}>
          {phases.map((phase) => (
            <div
              key={phase.number}
              className="p-8 flex flex-col gap-4"
              style={{ background: 'rgba(255,255,255,0.72)' }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="font-mono text-2xl font-bold"
                  style={{ color: '#148AFF', opacity: 0.4 }}
                >
                  {phase.number}
                </span>
                <span
                  className="text-[10px] tracking-[0.12em] uppercase px-2 py-1 rounded-sm"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    background: 'rgba(20,138,255,0.08)',
                    color: '#148AFF',
                    border: '1px solid rgba(20,138,255,0.15)',
                  }}
                >
                  {phase.duration}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-ink-1 leading-snug">{phase.title}</h3>
              <p className="text-sm text-ink-2 leading-relaxed">{phase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
