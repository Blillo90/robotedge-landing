const problems = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z" fill="#EF4444" fillOpacity="0.8"/>
      </svg>
    ),
    title: 'Trading emocional',
    description:
      'Las decisiones se toman en caliente: por miedo, por euforia, por ego. Aguantas más de lo que deberías porque "seguro que rebota". Cierras con pérdida mayor de la prevista. Luego el precio va exactamente donde pensabas.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z" fill="#EF4444" fillOpacity="0.8"/>
      </svg>
    ),
    title: 'Sin sistema validado',
    description:
      'Una idea sobre el mercado no es una estrategia. Sin reglas claras, sin backtesting, sin datos históricos, estás improvisando. Y la improvisación tiene un coste. Racha buena un mes, mala el siguiente, sin saber por qué.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 14l-3-3 1.41-1.41L11 12.17l4.59-4.58L17 9l-6 6z" fill="#EF4444" fillOpacity="0.8"/>
      </svg>
    ),
    title: 'Sin gestión de riesgo real',
    description:
      'No saber exactamente cuánto arriesgar en cada operación es la forma más rápida de destruir una cuenta. La posición correcta no es intuición, es matemática. Y sin esa matemática, un mes borra lo que tardaste un año en ganar.',
  },
]

export default function Problem() {
  return (
    <section
      className="py-28 px-4 sm:px-6 relative overflow-hidden"
      style={{ background: '#0C1521' }}
    >
      {/* Grid lines — same as Hero */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Subtle red glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(239,68,68,0.05) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-6 h-px" style={{ background: '#EF4444', opacity: 0.6 }} />
            <span
              className="text-xs tracking-[0.22em] uppercase"
              style={{ fontFamily: 'var(--font-mono)', color: '#EF4444', opacity: 0.8 }}
            >
              El problema
            </span>
          </div>
          <h2
            className="font-display font-bold leading-tight mb-5"
            style={{ fontSize: 'clamp(26px, 3.5vw, 44px)', color: '#F0F4F8' }}
          >
            Por qué la mayoría pierde dinero en trading
            <br />
            <span style={{ fontSize: '0.85em', fontWeight: 500, color: '#5A7A95' }}>
              — y no es por falta de esfuerzo
            </span>
          </h2>
          <p className="leading-relaxed" style={{ maxWidth: '56ch', color: '#5A7A95' }}>
            Si llevas tiempo operando en los mercados, probablemente ya conoces este
            patrón. No es mala suerte. Es el sistema roto con el que opera la mayoría
            de traders.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px" style={{ background: 'rgba(255,255,255,0.05)' }}>
          {problems.map((p) => (
            <div
              key={p.title}
              className="p-8 flex flex-col gap-4"
              style={{ background: '#111C28' }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.15)' }}
              >
                {p.icon}
              </div>
              <h3 className="text-sm font-semibold" style={{ color: '#F0F4F8' }}>{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#5A7A95' }}>{p.description}</p>
            </div>
          ))}
        </div>

        <div
          className="mt-6 px-8 py-5"
          style={{ background: 'rgba(20,138,255,0.05)', border: '1px solid rgba(20,138,255,0.1)' }}
        >
          <p className="text-sm leading-relaxed" style={{ color: '#5A7A95' }}>
            <span className="font-semibold" style={{ color: '#F0F4F8' }}>El problema no eres tú.</span>{' '}
            El problema es que nadie te enseñó a operar como un sistema, no como una
            persona que reacciona a los movimientos del mercado.
          </p>
        </div>
      </div>
    </section>
  )
}
