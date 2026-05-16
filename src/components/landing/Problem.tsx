const normal = [
  {
    title: 'Operas por corazonada',
    body: 'Cada entrada depende de cómo te sientes ese día. Sin reglas claras, cada decisión es nueva y el resultado es impredecible.',
  },
  {
    title: 'Aguantas pérdidas sin criterio',
    body: '"Seguro que rebota." Y cuando no rebota, cierras tarde, con el doble de pérdida prevista. El ego manda más que el plan.',
  },
  {
    title: 'Sin historial verificable',
    body: 'No puedes medir si tu estrategia funciona. Sin backtesting, sin datos, no hay forma honesta de saber si vas bien o mal.',
  },
  {
    title: 'Dependes de estar mirando la pantalla',
    body: 'Si te despistas, te pierdes la entrada. Si te vas de vacaciones, el mercado sigue. Tú no.',
  },
  {
    title: 'Un mes bueno, tres malos, sin saber por qué',
    body: 'La inconsistencia no es mala suerte. Es ausencia de sistema. Lo que no se mide no se puede mejorar.',
  },
]

const algo = [
  {
    title: 'Cada operación sigue reglas definidas',
    body: 'La entrada, la salida, el tamaño de posición y el stop están codificados. El mercado activa la orden. Tú no intervienes.',
  },
  {
    title: 'El stop se ejecuta siempre, sin dudarlo',
    body: 'No hay negociación interna. El algoritmo no tiene ego. Cuando el precio toca el nivel, la operación se cierra.',
  },
  {
    title: 'Backtesting real sobre datos históricos',
    body: 'Antes de arriesgar un euro, puedes ver cómo habría funcionado tu estrategia en los últimos 3 años, tick a tick.',
  },
  {
    title: 'Opera 24/7 sin que estés delante',
    body: 'El sistema no duerme, no se cansa, no se distrae. Si hay una señal a las 3 de la mañana, la ejecuta.',
  },
  {
    title: 'Resultados medibles, repetibles y optimizables',
    body: 'Cada parámetro es ajustable. Cada resultado es trazable. Sabes exactamente qué está funcionando y por qué.',
  },
]

export default function Problem() {
  return (
    <section className="py-6 px-4 sm:px-6">
      <div
        className="relative max-w-[1400px] mx-auto overflow-hidden"
        style={{ background: '#0C1521', borderRadius: '12px' }}
      >
        {/* Grid lines */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(20,138,255,0.05) 0%, transparent 60%)',
          }}
        />

        <div className="relative z-10 px-8 md:px-14 py-16 md:py-20 max-w-6xl mx-auto">

          {/* Header */}
          <div className="mb-14 max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-6 h-px" style={{ background: '#148AFF', opacity: 0.6 }} />
              <span
                className="text-xs tracking-[0.22em] uppercase"
                style={{ fontFamily: 'var(--font-mono)', color: '#148AFF', opacity: 0.8 }}
              >
                Trading normal vs. trading algorítmico
              </span>
            </div>
            <h2
              className="font-display font-bold leading-tight mb-5"
              style={{ fontSize: 'clamp(26px, 3.5vw, 44px)', color: '#F0F4F8' }}
            >
              Todos estamos cansados de tener que adivinar el precio
            </h2>
            <p className="leading-relaxed" style={{ maxWidth: '60ch', color: '#5A7A95' }}>
              El trading discrecional no es una estrategia: es una apuesta con pasos extra.
              El trading algorítmico convierte tus reglas en un sistema que opera, mide y mejora
              sin que el miedo o la euforia del momento lo distorsionen.
            </p>
          </div>

          {/* Comparison grid */}
          <div className="grid md:grid-cols-2 gap-px" style={{ background: 'rgba(255,255,255,0.05)' }}>

            {/* Left: trading emocional */}
            <div style={{ background: '#111C28' }}>
              <div
                className="px-8 py-4 flex items-center gap-3"
                style={{ borderBottom: '1px solid rgba(239,68,68,0.15)', background: 'rgba(239,68,68,0.04)' }}
              >
                <span
                  className="text-xs font-semibold tracking-[0.14em] uppercase"
                  style={{ fontFamily: 'var(--font-mono)', color: '#EF4444' }}
                >
                  Trading emocional
                </span>
              </div>
              <ul className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
                {normal.map((item) => (
                  <li key={item.title} className="px-8 py-6 flex gap-4 items-start">
                    <span
                      className="mt-0.5 shrink-0 text-base leading-none"
                      style={{ color: '#EF4444', opacity: 0.7 }}
                      aria-hidden
                    >
                      ✗
                    </span>
                    <div>
                      <p className="text-sm font-semibold mb-1" style={{ color: '#F0F4F8' }}>{item.title}</p>
                      <p className="text-sm leading-relaxed" style={{ color: '#5A7A95' }}>{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: trading algorítmico */}
            <div style={{ background: '#0E1E2E' }}>
              <div
                className="px-8 py-4 flex items-center gap-3"
                style={{ borderBottom: '1px solid rgba(20,138,255,0.2)', background: 'rgba(20,138,255,0.05)' }}
              >
                <span
                  className="text-xs font-semibold tracking-[0.14em] uppercase"
                  style={{ fontFamily: 'var(--font-mono)', color: '#148AFF' }}
                >
                  Trading algorítmico con NinjaTrader
                </span>
              </div>
              <ul className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
                {algo.map((item) => (
                  <li key={item.title} className="px-8 py-6 flex gap-4 items-start">
                    <span
                      className="mt-0.5 shrink-0 text-base leading-none"
                      style={{ color: '#10B981' }}
                      aria-hidden
                    >
                      ✓
                    </span>
                    <div>
                      <p className="text-sm font-semibold mb-1" style={{ color: '#F0F4F8' }}>{item.title}</p>
                      <p className="text-sm leading-relaxed" style={{ color: '#5A7A95' }}>{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom note */}
          <div
            className="mt-6 px-8 py-5"
            style={{ background: 'rgba(20,138,255,0.05)', border: '1px solid rgba(20,138,255,0.1)' }}
          >
            <p className="text-sm leading-relaxed" style={{ color: '#5A7A95' }}>
              <span className="font-semibold" style={{ color: '#F0F4F8' }}>El trading algorítmico no elimina el riesgo.</span>{' '}
              Te da algo mejor: control real sobre él. Backtesting honesto, reglas claras y ejecución automática con NinjaTrader.
              Eso es lo que diferencia a un trader consistente del resto.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
