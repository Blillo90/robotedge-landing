const metrics = [
  {
    value: '< 15%',
    label: 'Drawdown máximo objetivo',
    sub: 'capital protegido',
  },
  {
    value: '24 / 7',
    label: 'Ejecución automática',
    sub: 'sin supervisión constante',
  },
  {
    value: '100%',
    label: 'Basado en reglas y datos',
    sub: 'cero improvisación',
  },
  {
    value: '0',
    label: 'Decisiones emocionales',
    sub: 'matemáticas, no instinto',
  },
]

export default function MetricsStrip() {
  return (
    <section
      className="px-6 py-14"
      style={{ background: '#0C1521', borderTop: '1px solid rgba(255,255,255,0.04)' }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-px"
        style={{ background: 'rgba(255,255,255,0.06)' }}
      >
        {metrics.map((m) => (
          <div
            key={m.label}
            className="px-8 py-8"
            style={{ background: '#0C1521' }}
          >
            <p
              className="text-3xl font-extrabold font-display mb-1"
              style={{ color: '#10B981' }}
            >
              {m.value}
            </p>
            <p
              className="text-xs font-medium mb-1"
              style={{ color: '#F0F4F8' }}
            >
              {m.label}
            </p>
            <p
              className="text-xs"
              style={{ fontFamily: 'var(--font-mono)', color: '#4A6A85' }}
            >
              {m.sub}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
