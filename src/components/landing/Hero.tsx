import Image from 'next/image'
import HeroForm from './HeroForm'

function PerformanceCard() {
  return (
    <div
      className="w-full overflow-hidden shadow-2xl"
      style={{ borderRadius: '12px', background: '#111C28', border: '1px solid rgba(255,255,255,0.08)' }}
    >
      {/* Header */}
      <div
        className="px-6 py-4 flex items-center justify-between"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', background: '#0C1521' }}
      >
        <span className="text-sm tracking-[0.16em] uppercase font-semibold" style={{ fontFamily: 'var(--font-mono)', color: '#F0F4F8' }}>
          Nuestros Resultados
        </span>
        <span className="flex items-center gap-2 px-3 py-1 rounded-full ml-auto" style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.25)' }}>
          <span className="w-2 h-2 rounded-full shrink-0" style={{ background: '#10B981', boxShadow: '0 0 6px #10B981' }} />
          <span className="text-xs font-medium" style={{ fontFamily: 'var(--font-mono)', color: '#10B981' }}>Verificado</span>
        </span>
      </div>

      {/* Results image */}
      <div className="relative w-full">
        <Image
          src="/images/resultados.jpg"
          alt="Resultados verificados de trading algorítmico — Pablo, RobotEdge"
          width={1024}
          height={768}
          className="w-full h-auto"
          priority
        />
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="pt-[60px] px-4 sm:px-6 pb-6">
      <div
        className="relative max-w-[1400px] mx-auto overflow-hidden"
        style={{
          background: '#0C1521',
          borderRadius: '12px',
        }}
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
            'radial-gradient(ellipse 60% 55% at 10% 50%, rgba(16,185,129,0.08) 0%, transparent 65%)',
        }}
      />

      {/* Decorative watermark */}
      <div
        className="absolute right-0 bottom-0 select-none pointer-events-none hidden xl:block leading-none"
        style={{
          fontSize: 'clamp(200px, 30vw, 440px)',
          fontFamily: 'var(--font-mono)',
          fontWeight: 500,
          color: 'rgba(255,255,255,0.02)',
          letterSpacing: '-0.06em',
        }}
        aria-hidden
      >
        01
      </div>

      <div className="relative z-10 px-8 md:px-14 py-16 md:py-20 w-full">

        {/* Top: copy + performance card */}
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center mb-10">

          {/* Left: copy */}
          <div>
            {/* Eyebrow tag */}
            <div className="animate-fade-up delay-1 flex items-center gap-3 mb-8">
              <span className="block w-8 h-px" style={{ background: '#148AFF' }} />
              <span
                className="text-xs tracking-[0.22em] uppercase"
                style={{ fontFamily: 'var(--font-mono)', color: '#148AFF' }}
              >
                El Curso de Trading Algorítmico de RobotEdge
              </span>
            </div>

            {/* Headline */}
            <h1
              className="animate-fade-up delay-2 font-display font-extrabold leading-[1.05] tracking-tight mb-8"
              style={{ fontSize: 'clamp(34px, 4.5vw, 64px)', color: '#F0F4F8' }}
            >
              Siéntate cara a cara{' '}
              <span style={{ color: '#148AFF' }}>con un trader profesional.</span>
            </h1>

            {/* Body */}
            <p
              className="animate-fade-up delay-3 leading-relaxed"
              style={{ fontSize: '1.1rem', maxWidth: '46ch', color: '#5A7A95' }}
            >
              ¿Te gustaría sentirte como un trader profesional con dominio total
              de tus estrategias? Soy Pablo Carbonell y llevo mucho tiempo
              dominando los mercados con sistemas algorítmicos. Te enseño
              exactamente lo que aplico en real todos los días.
            </p>
          </div>

          {/* Right: performance card */}
          <div className="animate-fade-in delay-3">
            <PerformanceCard />
          </div>
        </div>

        {/* Bottom: full-width form */}
        <div className="animate-fade-up delay-4 mb-10">
          <div
            className="px-6 py-6"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <HeroForm />
          </div>
        </div>

        {/* Stat row */}
        <div
          className="animate-fade-up delay-5 pt-8 flex flex-wrap gap-10"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          {[
            { label: 'Ejecución',          value: '24 / 7' },
            { label: 'Tipo de estrategia', value: 'Basada en reglas' },
            { label: 'Enfoque',            value: 'Sistemático' },
          ].map((s) => (
            <div key={s.label}>
              <p
                className="text-xs tracking-[0.15em] uppercase mb-1"
                style={{ fontFamily: 'var(--font-mono)', color: '#3A5270' }}
              >
                {s.label}
              </p>
              <p
                className="text-sm font-medium"
                style={{ fontFamily: 'var(--font-mono)', color: '#F0F4F8' }}
              >
                {s.value}
              </p>
            </div>
          ))}
        </div>

      </div>
      </div>
    </section>
  )
}
