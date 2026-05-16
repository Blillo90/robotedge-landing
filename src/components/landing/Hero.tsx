function Scorecard() {
  return (
    <div style={{ background: '#111114', border: '1px solid #27272A', overflow: 'hidden' }}>
      <div
        className="flex items-center justify-between px-5 py-3"
        style={{ background: '#18181C', borderBottom: '1px solid #27272A' }}
      >
        <span
          className="text-xs tracking-[0.08em] uppercase"
          style={{ fontFamily: 'var(--font-mono)', color: '#52525B' }}
        >
          NQ1! · Backtest 2021–2024 · 5min
        </span>
        <span
          className="text-xs px-2.5 py-1 tracking-[0.08em]"
          style={{
            fontFamily: 'var(--font-mono)',
            background: 'rgba(188,255,94,0.1)',
            border: '1px solid rgba(188,255,94,0.25)',
            color: '#BCFF5E',
          }}
        >
          EN VIVO
        </span>
      </div>

      <div className="px-5 py-6">
        {[
          { key: 'Beneficio neto',       val: '+$38.420', type: 'pos' },
          { key: 'Profit factor',        val: '1.91',     type: 'pos' },
          { key: 'Operaciones',          val: '847',      type: 'neu' },
          { key: 'Drawdown máx.',        val: '−7.8%',    type: 'neg' },
          { key: 'Intervención humana',  val: '0',        type: 'pos' },
        ].map((row) => (
          <div
            key={row.key}
            className="flex justify-between items-center py-3 text-sm"
            style={{ borderBottom: '1px solid #27272A' }}
          >
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#52525B' }}>
              {row.key}
            </span>
            <span
              className="font-bold text-[15px]"
              style={{
                color: row.type === 'pos' ? '#BCFF5E' : row.type === 'neg' ? '#F87171' : '#FAFAFA',
              }}
            >
              {row.val}
            </span>
          </div>
        ))}

        <div className="mt-5 pt-5" style={{ borderTop: '1px solid #27272A' }}>
          <p
            className="mb-2 tracking-[0.08em] uppercase"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#52525B' }}
          >
            Win rate
          </p>
          <div style={{ background: '#27272A', height: '4px', width: '100%' }}>
            <div style={{ height: '4px', background: '#BCFF5E', width: '63%' }} />
          </div>
          <p className="mt-1.5" style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#BCFF5E' }}>
            63.2%
          </p>
        </div>

        <p
          className="mt-4 leading-relaxed"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#52525B' }}
        >
          Ejemplo real de alumno. Los resultados pasados no garantizan rendimientos futuros.
        </p>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="pt-[60px] px-4 sm:px-6 pb-6">
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

        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 55% at 10% 50%, rgba(188,255,94,0.07) 0%, transparent 65%)',
          }}
        />

        <div className="relative z-10 px-8 md:px-14 py-16 md:py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* Left: copy */}
            <div>
              <span
                className="animate-fade-up delay-1 block mb-4 tracking-[0.12em] uppercase text-xs"
                style={{ fontFamily: 'var(--font-mono)', color: '#BCFF5E' }}
              >
                Curso de trading algorítmico con NinjaTrader
              </span>

              <h1
                className="animate-fade-up delay-2 font-display font-extrabold leading-[1.0] tracking-tight mb-6"
                style={{ fontSize: 'clamp(44px, 6vw, 84px)', color: '#FAFAFA' }}
              >
                Deja de operar<br />
                con el{' '}
                <em style={{ color: '#BCFF5E', fontWeight: 300 }}>estómago</em>
              </h1>

              <p
                className="animate-fade-up delay-3 leading-[1.75] mb-10"
                style={{ fontSize: '19px', maxWidth: '540px', color: '#A1A1AA' }}
              >
                Cada vez que cierras una operación por miedo, aguantas una pérdida
                porque &ldquo;seguro que vuelve&rdquo; o te quedas paralizado frente al gráfico,{' '}
                <strong style={{ color: '#FAFAFA' }}>
                  estás pagando el precio del trading emocional.
                </strong>{' '}
                Existe una forma de operar con reglas. Sin dudas. Sin interferencias.
              </p>

              <div className="animate-fade-up delay-4 flex flex-wrap gap-3 mb-10">
                <a
                  href="#acceso"
                  className="inline-block font-display font-bold tracking-[0.02em] text-base px-9 py-[18px] transition-all duration-150 hover:opacity-[0.88] hover:-translate-y-px"
                  style={{ background: '#BCFF5E', color: '#09090B' }}
                >
                  Quiero aprender
                </a>
                <a
                  href="#modulos"
                  className="inline-block font-display font-bold tracking-[0.02em] text-base px-9 py-[18px] transition-all duration-150"
                  style={{ background: 'transparent', color: '#A1A1AA', border: '1px solid #3F3F46' }}
                >
                  Ver el programa
                </a>
              </div>

              <div
                className="animate-fade-up delay-4 flex flex-wrap items-center gap-2"
                style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#52525B' }}
              >
                <span style={{ color: '#A1A1AA' }}>★ 4.9/5</span>
                <span style={{ color: '#A1A1AA' }}>318 alumnos</span>
                <span>·</span>
                <span>Acceso de por vida</span>
                <span>·</span>
                <span>Con o sin programación</span>
              </div>
            </div>

            {/* Right: scorecard */}
            <div className="animate-fade-in delay-3">
              <Scorecard />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
