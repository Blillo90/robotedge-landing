const specs = [
  { label: 'Enfoque',  value: 'Trading Algorítmico & Cuantitativo' },
  { label: 'Formato',  value: 'Guías Prácticas & Artículos Técnicos' },
  { label: 'Idioma',   value: 'Español & English' },
  { label: 'Temas',    value: 'Bots, Backtesting, Riesgo, Python, Automatización' },
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
              Quiénes somos
            </span>
          </div>
          <h2
            className="font-display font-bold text-ink-1 leading-tight mb-6"
            style={{ fontSize: 'clamp(26px, 3.5vw, 44px)' }}
          >
            Una academia de trading construida para traders sistemáticos
          </h2>
          <p className="text-ink-2 leading-relaxed mb-5">
            RobotEdge es una academia de trading dedicada al trading algorítmico
            y cuantitativo. Ayudamos a traders a sustituir decisiones basadas en
            el instinto por estrategias sistemáticas y basadas en reglas,
            respaldadas por datos reales.
          </p>
          <p className="text-ink-2 leading-relaxed">
            Nuestras guías cubren desde el diseño de tu primera estrategia
            automatizada hasta el despliegue de bots de trading totalmente
            operativos — escritas por traders algorítmicos activos, para traders
            que se toman su ventaja en serio.
          </p>
        </div>

        {/* Right: spec table */}
        <dl
          className="rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.75)',
            border: '1px solid rgba(0,0,0,0.07)',
            boxShadow: '0 2px 20px rgba(0,0,0,0.05)',
          }}
        >
          {specs.map((s, i) => (
            <div
              key={s.label}
              className="flex items-start justify-between gap-8 px-8 py-5"
              style={{
                borderBottom:
                  i < specs.length - 1 ? '1px solid rgba(0,0,0,0.06)' : undefined,
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
