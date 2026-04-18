const metrics = [
  {
    value: '+48.26%',
    label: 'Rentabilidad acumulada',
    sub: 'estrategia demo en activo',
  },
  {
    value: '64.94%',
    label: 'Operaciones ganadoras',
    sub: 'win rate histórico',
  },
  {
    value: '< 15%',
    label: 'Drawdown máximo',
    sub: 'capital siempre protegido',
  },
  {
    value: '3 meses',
    label: 'Primer sistema en live',
    sub: 'con dedicación consistente',
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
              style={{ color: '#148AFF' }}
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
