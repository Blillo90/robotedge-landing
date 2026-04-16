const testimonials = [
  {
    quote:
      'Llevaba tres años operando de forma manual y perdiendo más de lo que ganaba. Desde que apliqué la metodología de RobotEdge, tengo un sistema con reglas claras y mi psicología ya no interfiere en las operaciones.',
    name:   'Marcos R.',
    role:   'Trader desde 2019',
    init:   'MR',
  },
  {
    quote:
      'El módulo de backtesting me abrió los ojos. Pensaba que mi estrategia funcionaba. Tras validarla con los criterios correctos, vi que era overfitting puro. Rehíce todo desde cero y los resultados son reproducibles.',
    name:   'Ana S.',
    role:   'Ingeniera de software',
    init:   'AS',
  },
  {
    quote:
      'En menos de dos meses tenía mi primer bot corriendo en live. El paso a paso de despliegue con el broker fue exactamente lo que necesitaba. Sin RobotEdge me habría llevado el doble de tiempo y muchos errores.',
    name:   'Carlos M.',
    role:   'Trader algorítmico',
    init:   'CM',
  },
]

export default function Testimonials() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-14 max-w-xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-6 h-px" style={{ background: '#148AFF' }} />
            <span
              className="text-xs tracking-[0.22em] uppercase"
              style={{ color: '#148AFF', fontFamily: 'var(--font-mono)' }}
            >
              Testimonios
            </span>
          </div>
          <h2
            className="font-display font-bold text-ink-1 leading-tight"
            style={{ fontSize: 'clamp(24px, 3vw, 40px)' }}
          >
            Traders que operaban con el instinto.<br />
            <span style={{ color: '#148AFF' }}>Ahora operan con datos.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-6 p-8 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.75)',
                border: '1px solid rgba(0,0,0,0.07)',
                boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
              }}
            >
              {/* Stars */}
              <div className="flex gap-1" aria-label="5 estrellas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#148AFF" aria-hidden>
                    <path d="M7 1l1.5 4H13l-3.5 2.5 1.5 4L7 9 3 11.5l1.5-4L1 5h4.5z" />
                  </svg>
                ))}
              </div>

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

      </div>
    </section>
  )
}
