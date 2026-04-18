import Link from 'next/link'

const testimonials = [
  {
    quote:
      'He aprendido a utilizar las herramientas necesarias para automatizar el trading algorítmico de forma muy accesible, demostrando que no se necesita ser programador para lograrlo. Ahora tengo la libertad de invertir sin tener que pasar horas frente al ordenador. Es una de las maneras más fiables de invertir en bolsa, enfocándose en una excelente gestión de riesgo para limitar las pérdidas.',
    name:  'Bernardo Aguayo',
    role:  'Alumno de RobotEdge',
    init:  'BA',
    title: 'Mi experiencia como alumno ha sido extremadamente positiva',
  },
  {
    quote:
      'No suelo escribir reseñas, pero después de ver el nivel medio que hay en formación de trading, creo que aquí merece la pena matizar. RobotEdge no es la típica academia que promete rentabilidades absurdas ni vende señales milagro. Lo que me encontré fue un enfoque bastante más estructurado de lo habitual, centrado en entender el mercado. Hay lógica detrás de lo que explican, y eso no es tan común como debería.',
    name:  'Mariano',
    role:  'Alumno de RobotEdge',
    init:  'M',
    title: 'Entré con dudas y, sorprendentemente, tiene sentido',
  },
  {
    quote:
      'Llevo un par de años haciendo trading manual y gastando muchas horas viendo velas, hasta que me decidí a entrar en RobotEdge. Pablo va al grano y no hay paja, demuestra el movimiento andando y probando. Ahora tengo más tiempo y no necesito seguir las velas todo el rato.',
    name:  'Miguel B. Aguado',
    role:  'Trader manual reconvertido · Madrid',
    init:  'MA',
    title: 'RobotEdge funciona',
  },
]

export default function Testimonials() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-6 h-px" style={{ background: '#148AFF' }} />
              <span
                className="text-xs tracking-[0.22em] uppercase"
                style={{ color: '#148AFF', fontFamily: 'var(--font-mono)' }}
              >
                Opiniones reales
              </span>
            </div>
            <h2
              className="font-display font-bold text-ink-1 leading-tight"
              style={{ fontSize: 'clamp(24px, 3vw, 40px)' }}
            >
              Lo que dicen los alumnos de RobotEdge.<br />
              <span style={{ color: '#148AFF' }}>En sus propias palabras.</span>
            </h2>
          </div>

          {/* Trustpilot link */}
          <Link
            href="https://es.trustpilot.com/review/robotedge.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs shrink-0 transition-opacity hover:opacity-70"
            style={{ fontFamily: 'var(--font-mono)', color: '#5A7A95' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#00B67A" aria-hidden>
              <path d="M12 2l2.9 6 6.6.9-4.8 4.6 1.1 6.5L12 17l-5.8 3 1.1-6.5L2.5 9l6.6-.9z"/>
            </svg>
            Ver todas en Trustpilot →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-5 p-8 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.75)',
                border: '1px solid rgba(0,0,0,0.07)',
                boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
              }}
            >
              {/* Stars */}
              <div className="flex gap-1" aria-label="5 estrellas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#00B67A" aria-hidden>
                    <path d="M7 1l1.5 4H13l-3.5 2.5 1.5 4L7 9 3 11.5l1.5-4L1 5h4.5z" />
                  </svg>
                ))}
              </div>

              {/* Review title */}
              <p className="text-sm font-semibold text-ink-1 leading-snug">{t.title}</p>

              {/* Quote */}
              <blockquote className="text-sm text-ink-2 leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                  style={{ background: '#0C1521', letterSpacing: '0.05em' }}
                  aria-hidden
                >
                  {t.init}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-1">{t.name}</p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ fontFamily: 'var(--font-mono)', color: '#148AFF' }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Trustpilot link */}
        <div className="mt-8 flex justify-center sm:hidden">
          <Link
            href="https://es.trustpilot.com/review/robotedge.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs transition-opacity hover:opacity-70"
            style={{ fontFamily: 'var(--font-mono)', color: '#5A7A95' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#00B67A" aria-hidden>
              <path d="M12 2l2.9 6 6.6.9-4.8 4.6 1.1 6.5L12 17l-5.8 3 1.1-6.5L2.5 9l6.6-.9z"/>
            </svg>
            Ver todas en Trustpilot →
          </Link>
        </div>

      </div>
    </section>
  )
}
