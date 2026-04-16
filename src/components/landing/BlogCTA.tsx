import Link from 'next/link'

export default function BlogCTA() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">

      {/* Bottom glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 65% at 50% 110%, rgba(5,150,105,0.06) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Vertical accent line */}
        <div
          className="w-px h-12 mx-auto mb-8"
          style={{ background: '#148AFF', opacity: 0.6 }}
        />

        <h2
          className="font-display font-extrabold text-ink-1 leading-tight mb-6"
          style={{ fontSize: 'clamp(30px, 5vw, 56px)' }}
        >
          Empieza a construir tu ventaja
        </h2>

        <p
          className="text-ink-2 leading-relaxed mb-10 mx-auto"
          style={{ maxWidth: '46ch' }}
        >
          Explora nuestras últimas guías sobre estrategias de trading
          automatizado, desarrollo de bots y gestión de riesgo — todo lo que
          necesitas para operar de forma sistemática, no emocional.
        </p>

        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-white text-sm font-medium px-8 py-4 rounded-xl bg-[#148AFF] hover:bg-[#0E6FD4] transition-colors"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Leer las Guías
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  )
}
