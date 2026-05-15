const steps = [
  {
    number: '01',
    title: 'Diseñas la estrategia',
    description:
      'Defines las reglas con claridad, sin presión de mercado. Entradas, salidas, gestión de riesgo: todo por escrito antes de que el precio se mueva.',
  },
  {
    number: '02',
    title: 'La validas en el pasado',
    description:
      'El backtesting te muestra cómo se habría comportado tu estrategia en miles de escenarios reales. Sabes qué esperar antes de arriesgar un euro.',
  },
  {
    number: '03',
    title: 'La ejecutas sin interferirla',
    description:
      'El robot opera exactamente lo que tú decidiste en frío. Sin excepciones, sin dudas, sin que el miedo o la euforia cambien el plan.',
  },
]

export default function Bridge() {
  return (
    <section className="py-6 px-4 sm:px-6">
      <div
        className="relative max-w-[1400px] mx-auto overflow-hidden"
        style={{
          background: '#F7F5F2',
          borderRadius: '12px',
          border: '1px solid rgba(0,0,0,0.07)',
        }}
      >
        {/* Green accent top line */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, #059669 50%, transparent 100%)',
          }}
          aria-hidden
        />

        <div className="px-8 md:px-14 py-16 md:py-20 max-w-6xl mx-auto">
          {/* Blockquote */}
          <blockquote className="mb-16 max-w-3xl">
            <span
              className="block font-display font-black leading-none mb-5 select-none"
              style={{ fontSize: '5rem', color: '#059669', opacity: 0.18, lineHeight: 1 }}
              aria-hidden
            >
              &ldquo;
            </span>
            <p
              className="font-display font-bold leading-tight mb-6"
              style={{ fontSize: 'clamp(22px, 3vw, 38px)', color: '#141412' }}
            >
              Un algoritmo no tiene miedo.{' '}
              <span style={{ color: '#059669' }}>No tiene ego. No duda.</span>
              <br className="hidden sm:block" />
              {' '}Ejecuta exactamente lo que tú decides cuando estás tranquilo,
              <br className="hidden sm:block" />
              {' '}no lo que haces cuando el mercado se mueve.
            </p>
            <footer
              className="flex items-center gap-3"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              <span className="block w-6 h-px" style={{ background: '#059669', opacity: 0.5 }} />
              <span className="text-xs tracking-[0.14em] uppercase" style={{ color: '#6B7280' }}>
                El principio del trading sistemático
              </span>
            </footer>
          </blockquote>

          {/* Step cards */}
          <div
            className="grid md:grid-cols-3 gap-px"
            style={{ background: 'rgba(0,0,0,0.06)' }}
          >
            {steps.map((step) => (
              <div
                key={step.number}
                className="p-8 flex flex-col gap-4"
                style={{ background: '#FFFFFF' }}
              >
                <div className="flex items-center gap-3 mb-1">
                  <span
                    className="font-display font-extrabold"
                    style={{
                      fontSize: '1.5rem',
                      color: '#059669',
                      opacity: 0.3,
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {step.number}
                  </span>
                  <div
                    className="flex-1 h-px"
                    style={{ background: 'rgba(5,150,105,0.15)' }}
                  />
                </div>
                <h3
                  className="font-display font-semibold leading-snug"
                  style={{ fontSize: '1.0625rem', color: '#141412' }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#4B5563' }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
