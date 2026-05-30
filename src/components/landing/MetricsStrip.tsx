const metrics = [
  {
    value: '+190',
    suffix: '',
    label: 'Estudiantes activos',
    sub: 'traders formados en el método',
  },
  {
    value: '+8',
    suffix: ' años',
    label: 'En los mercados',
    sub: 'experiencia real en trading',
  },
  {
    value: '6–8',
    suffix: ' sem.',
    label: 'Al primer backtest',
    sub: 'con dedicación de 2–3 h diarias',
  },
  {
    value: '0 €',
    suffix: '',
    label: 'Coste de la plataforma base',
    sub: 'NinjaTrader gratuito para empezar',
  },
]

export default function MetricsStrip() {
  return (
    <section
      className="px-6 py-14"
      style={{ background: '#0C1521', borderTop: '1px solid rgba(255,255,255,0.04)' }}
    >
      <div
        className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-px"
        style={{ background: 'rgba(255,255,255,0.06)' }}
      >
        {metrics.map((m) => (
          <div
            key={m.label}
            className="px-8 py-10 flex flex-col gap-2"
            style={{ background: '#0C1521' }}
          >
            <p
              className="font-display font-extrabold leading-none"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#148AFF' }}
            >
              {m.value}
              {m.suffix && (
                <span
                  className="font-display font-bold"
                  style={{ fontSize: '0.5em', color: '#148AFF', opacity: 0.75, marginLeft: '0.15em' }}
                >
                  {m.suffix}
                </span>
              )}
            </p>
            <p
              className="text-sm font-semibold leading-snug"
              style={{ color: '#F0F4F8' }}
            >
              {m.label}
            </p>
            <p
              className="text-xs leading-relaxed"
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
