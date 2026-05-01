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
            con amplia experiencia en los mercados.
          </h2>
          <p className="text-ink-2 leading-relaxed mb-5">
            Pablo Llobregat es ingeniero de datos y lleva muchos años operando en los mercados
            con sistemas de trading algorítmico. Su formación técnica le permite construir y
            validar estrategias con rigor estadístico real. Con resultados verificados y públicos,
            ha demostrado su capacidad para dominar las herramientas más avanzadas del mercado.
            Su experiencia te guiará a lo largo del curso para que puedas dominar cada
            una de las herramientas que aprenderás.
          </p>
          <p className="text-ink-2 leading-relaxed">
            En el curso tendrás la oportunidad de participar en sesiones en directo con Pablo,
            donde podrás interactuar directamente, hacer preguntas y resolver todas tus dudas.
            No enseña teoría: enseña lo que está haciendo y lo que funciona de verdad.
            Adquirirás las habilidades para desarrollar tus propias estrategias automatizadas
            que competirán al más alto nivel.
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
