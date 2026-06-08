import Link from 'next/link'

export default function CalculadoraBanner() {
  return (
    <section
      className="py-20 px-6"
      style={{ background: '#080F1A' }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span
            className="text-xs tracking-[0.22em] uppercase"
            style={{ fontFamily: 'var(--font-mono)', color: '#00d4ff' }}
          >
            Herramienta gratuita
          </span>
          <span className="block w-6 h-px" style={{ background: '#00d4ff' }} />
        </div>

        <h2
          className="font-display font-bold leading-tight mb-4"
          style={{ fontSize: 'clamp(24px, 4vw, 44px)', color: '#F0F4F8' }}
        >
          Simula tu rentabilidad esperada
        </h2>
        <p
          className="mb-10 leading-relaxed mx-auto"
          style={{ color: '#5A7A95', maxWidth: '46ch' }}
        >
          Introduce tu capital y los parámetros de la estrategia. Ve exactamente qué retorno puedes esperar antes de arriesgar un euro real.
        </p>

        <Link
          href="/calculadora"
          className="group inline-flex items-center gap-3 px-7 py-4 text-sm font-semibold transition-all duration-200 hover:scale-[1.02]"
          style={{
            fontFamily: 'var(--font-mono)',
            color: '#00d4ff',
            background: 'rgba(0,212,255,0.06)',
            border: '1px solid rgba(0,212,255,0.25)',
            borderRadius: 8,
          }}
        >
          Abrir la calculadora
          <span
            className="transition-transform duration-200 group-hover:translate-x-1"
            style={{ opacity: 0.7 }}
          >
            →
          </span>
        </Link>
      </div>
    </section>
  )
}
