import Link from 'next/link'

export default function GuiaCTA() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">

      {/* Bottom glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 65% at 50% 110%, rgba(20,138,255,0.07) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Vertical accent line */}
        <div
          className="w-px h-12 mx-auto mb-8"
          style={{ background: '#148AFF', opacity: 0.6 }}
        />

        <p
          className="text-xs tracking-[0.22em] uppercase mb-5"
          style={{ fontFamily: 'var(--font-mono)', color: '#148AFF' }}
        >
          Base de Conocimiento
        </p>

        <h2
          className="font-display font-extrabold text-ink-1 leading-tight mb-6"
          style={{ fontSize: 'clamp(30px, 5vw, 56px)' }}
        >
          El trading sin sistema es solo apuesta.<br />
          <span style={{ color: '#148AFF' }}>Con sistema, es ventaja.</span>
        </h2>

        <p
          className="text-ink-2 leading-relaxed mb-10 mx-auto"
          style={{ maxWidth: '48ch' }}
        >
          Descubre por qué la mayoría de los robots de trading fracasan, cómo se
          construye ventaja estadística real y qué diferencia a un sistema robusto
          de una curva de equity maquillada.
        </p>

        <Link
          href="/guia"
          className="inline-flex items-center gap-2 text-white text-sm font-medium px-8 py-4 rounded-xl bg-[#148AFF] hover:bg-[#0E6FD4] transition-colors"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Leer la Guía
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  )
}
