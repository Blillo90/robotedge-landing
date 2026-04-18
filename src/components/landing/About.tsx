const trustPoints = [
  {
    label: 'Resultados verificables',
    value: 'Sistemas en activo, métricas reales',
  },
  {
    label: 'Fundamento matemático',
    value: 'Probabilidad aplicada, no opinión',
  },
  {
    label: 'Sin promesas vacías',
    value: 'Proceso riguroso, no atajos',
  },
  {
    label: 'Traders activos',
    value: 'Enseñamos lo que aplicamos',
  },
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* Left: copy */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-6 h-px" style={{ background: '#148AFF' }} />
            <span
              className="text-xs tracking-[0.22em] uppercase"
              style={{ color: '#148AFF', fontFamily: 'var(--font-mono)' }}
            >
              Por qué confiar en este método
            </span>
          </div>
          <h2
            className="font-display font-bold text-ink-1 leading-tight mb-6"
            style={{ fontSize: 'clamp(26px, 3.5vw, 44px)' }}
          >
            Fundamentado en matemáticas, no en opiniones
          </h2>
          <p className="text-ink-2 leading-relaxed mb-5">
            RobotEdge es una academia especializada en trading algorítmico y cuantitativo.
            No enseñamos indicadores genéricos ni estrategias sacadas de foros. Enseñamos
            el proceso que usan los traders sistemáticos reales: diseño, validación
            estadística, gestión de riesgo y automatización.
          </p>
          <p className="text-ink-2 leading-relaxed">
            Los sistemas que enseñamos no son teóricos. Las métricas que mostramos
            provienen de estrategias reales, ejecutadas en condiciones de mercado reales.
            Cuando una estrategia tiene ventaja estadística y se ejecuta con disciplina,
            los resultados se dan. Esto no es filosofía, es probabilidad aplicada.
          </p>
        </div>

        {/* Right: trust table */}
        <dl
          className="rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.75)',
            border: '1px solid rgba(0,0,0,0.07)',
            boxShadow: '0 2px 20px rgba(0,0,0,0.05)',
          }}
        >
          {trustPoints.map((s, i) => (
            <div
              key={s.label}
              className="flex items-start justify-between gap-8 px-8 py-5"
              style={{
                borderBottom:
                  i < trustPoints.length - 1 ? '1px solid rgba(0,0,0,0.06)' : undefined,
              }}
            >
              <dt
                className="text-xs tracking-[0.15em] uppercase shrink-0 pt-0.5"
                style={{ fontFamily: 'var(--font-mono)', color: '#148AFF' }}
              >
                {s.label}
              </dt>
              <dd className="text-sm font-medium text-ink-1 text-right leading-snug">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>

      </div>
    </section>
  )
}
