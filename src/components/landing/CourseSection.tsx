import Link from 'next/link'

const modules = [
  { n: '01', title: 'Qué es el trading algorítmico y por qué NinjaTrader',    desc: 'Fundamentos del trading sistemático. Por qué NinjaTrader 8 es el estándar para traders independientes en futuros y divisas.' },
  { n: '02', title: 'Diseña tu primera estrategia sin escribir código',         desc: 'Lógica de entrada, salida y gestión de posición. Construyes la estructura de tu sistema antes de tocar NinjaScript.' },
  { n: '03', title: 'Backtesting tick a tick con datos históricos reales',      desc: 'Validas la estrategia con la máxima precisión posible: tick a tick, con comisiones y slippage incluidos.' },
  { n: '04', title: 'Cómo detectar overfitting antes de ir a vivo',            desc: 'Walk-Forward Analysis y técnicas de validación fuera de muestra. El paso que la mayoría de cursos se salta.' },
  { n: '05', title: 'Automatización completa con NinjaScript',                  desc: 'Programas tu estrategia en NinjaScript (basado en C#) desde cero. Sin experiencia previa en programación requerida.' },
  { n: '06', title: 'Despliegue, supervisión y cartera de sistemas',            desc: 'Conectas el robot a tu bróker y lo pones en operativa real. Aprendes a monitorizar y gestionar varios sistemas en paralelo.' },
]

export default function CourseSection() {
  return (
    <section
      id="curso"
      className="py-28 px-6 relative overflow-hidden"
      style={{ background: '#0A111A' }}
      aria-labelledby="curso-heading"
    >
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 45% at 75% 50%, rgba(20,138,255,0.06) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_360px] gap-16 xl:gap-24 items-start">

          {/* Left: course content */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-6 h-px" style={{ background: '#148AFF', opacity: 0.7 }} />
              <span
                className="text-xs tracking-[0.22em] uppercase"
                style={{ fontFamily: 'var(--font-mono)', color: '#148AFF', opacity: 0.9 }}
              >
                Curso de trading algorítmico con NinjaTrader
              </span>
            </div>

            <h2
              id="curso-heading"
              className="font-display font-bold leading-tight mb-5"
              style={{ fontSize: 'clamp(26px, 3.5vw, 48px)', color: '#F0F4F8' }}
            >
              Descarga la guía de iniciación al trading algorítmico con NinjaTrader
            </h2>

            <p
              className="leading-relaxed mb-12"
              style={{ maxWidth: '58ch', color: '#5A7A95', fontSize: '1rem' }}
            >
              Una guía práctica para pasar del trading emocional a un sistema automático
              verificado. Cubre desde los conceptos básicos del trading algorítmico hasta
              el despliegue de tu primera estrategia en NinjaTrader 8 —{' '}
              <strong style={{ color: '#A8C4D8' }}>sin experiencia previa en programación.</strong>
            </p>

            {/* Module list */}
            <ol className="space-y-0.5" aria-label="Contenidos del curso de trading algorítmico">
              {modules.map((m) => (
                <li
                  key={m.n}
                  className="flex gap-5 p-5"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <span
                    className="shrink-0 font-bold text-xs pt-0.5"
                    style={{ fontFamily: 'var(--font-mono)', color: '#148AFF', opacity: 0.5, minWidth: '20px' }}
                  >
                    {m.n}
                  </span>
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ color: '#F0F4F8' }}>{m.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: '#5A7A95' }}>{m.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Right: download card */}
          <div className="lg:sticky lg:top-24">
            <div
              className="overflow-hidden"
              style={{ background: '#111C28', border: '1px solid rgba(20,138,255,0.15)' }}
            >
              {/* Card header */}
              <div
                className="px-7 py-5"
                style={{ background: 'rgba(20,138,255,0.07)', borderBottom: '1px solid rgba(20,138,255,0.12)' }}
              >
                <span
                  className="text-xs tracking-[0.14em] uppercase"
                  style={{ fontFamily: 'var(--font-mono)', color: '#148AFF' }}
                >
                  Acceso gratuito
                </span>
                <p
                  className="mt-2 font-display font-bold leading-snug"
                  style={{ fontSize: '1.15rem', color: '#F0F4F8' }}
                >
                  Guía de iniciación al trading algorítmico
                </p>
              </div>

              {/* What's included */}
              <div className="px-7 py-6">
                <p
                  className="text-xs tracking-[0.1em] uppercase mb-4"
                  style={{ fontFamily: 'var(--font-mono)', color: '#3A5270' }}
                >
                  Incluye
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    '6 módulos paso a paso',
                    'Configuración de NinjaTrader 8',
                    'Plantilla de backtesting',
                    'Checklist de validación de estrategias',
                    'Glosario de métricas clave',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm" style={{ color: '#A8C4D8' }}>
                      <span style={{ color: '#148AFF', marginTop: '2px' }} aria-hidden>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/guia"
                  className="block w-full text-center font-display font-bold text-sm py-4 px-6 transition-opacity duration-150 hover:opacity-90"
                  style={{ background: '#148AFF', color: '#fff', letterSpacing: '0.02em' }}
                >
                  Descargar guía gratuita →
                </Link>

                <p
                  className="mt-4 text-center text-xs"
                  style={{ fontFamily: 'var(--font-mono)', color: '#3A5270' }}
                >
                  Sin tarjeta. Sin compromiso.
                </p>
              </div>
            </div>

            {/* Social proof */}
            <div
              className="mt-4 px-5 py-4 flex items-center gap-3"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <span style={{ color: '#F59E0B', fontSize: '13px' }}>★★★★★</span>
              <p className="text-xs" style={{ color: '#5A7A95' }}>
                <strong style={{ color: '#A8C4D8' }}>4.9/5</strong> · 318 traders formados con este método
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
