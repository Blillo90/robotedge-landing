const trustPoints = [
  {
    label: 'Resultados verificables',
    value: 'Track record auditado y público',
  },
  {
    label: 'Enseña lo que aplica',
    value: 'Sistemas reales en operativa diaria',
  },
  {
    label: 'Sin promesas vacías',
    value: 'Proceso riguroso, no atajos',
  },
  {
    label: 'Acompañamiento real',
    value: 'Sesiones en directo con Pablo',
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
              Quién enseña esto
            </span>
          </div>
          <h2
            className="font-display font-bold text-ink-1 leading-tight mb-6"
            style={{ fontSize: 'clamp(26px, 3.5vw, 44px)' }}
          >
            Soy Pablo Llobregat:{' '}
            <span style={{ color: '#148AFF' }}>ingeniero de datos y trader algorítmico</span>{' '}
            con sistemas reales operando en futuros del CME.
          </h2>
          <p className="text-ink-2 leading-relaxed mb-5">
            <strong>Pablo Llobregat opera algoritmos en vivo sobre futuros NQ (Nasdaq-100), ES (S&amp;P 500) y GC (Gold) con NinjaTrader 8.</strong>{' '}
            Su formación como ingeniero de datos le permite construir y validar estrategias con rigor estadístico real,
            no con intuición. Los resultados están verificados y son públicos — no son capturas de pantalla ni backtests de escaparate.
          </p>
          <p className="text-ink-2 leading-relaxed">
            En el curso tendrás acceso a sesiones en directo con Pablo donde podrás preguntar sobre tu sistema concreto.
            No enseña teoría genérica: enseña el mismo proceso que usa para diseñar, validar con Walk-Forward Analysis
            y desplegar algoritmos con capital real. Los brokers que se trabajan en el curso incluyen
            Interactive Brokers, NinjaTrader Brokerage y Dorman Trading. Capital mínimo para empezar con micro-contratos CME: desde 500–1.000 €.
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
