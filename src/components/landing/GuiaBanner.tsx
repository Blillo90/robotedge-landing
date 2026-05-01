import Link from 'next/link'
import { BarChart2, Cpu, ShieldCheck } from 'lucide-react'

const pillars = [
  {
    Icon: BarChart2,
    title: 'Ventaja estadística',
    text: 'Sistemas con probabilidad medible, no intuición ni predicciones',
  },
  {
    Icon: Cpu,
    title: 'NinjaTrader 8',
    text: 'Infraestructura profesional sin necesidad de programar una línea',
  },
  {
    Icon: ShieldCheck,
    title: 'Validación real',
    text: 'Monte Carlo + Walk-Forward para robustez comprobada antes de operar',
  },
]

export default function GuiaBanner() {
  return (
    <section
      style={{
        background: '#08111E',
        borderTop: '1px solid rgba(20,138,255,0.18)',
        borderBottom: '1px solid rgba(20,138,255,0.18)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
          <div>
            <p
              className="text-xs tracking-[0.2em] uppercase mb-3"
              style={{ fontFamily: 'var(--font-mono)', color: '#148AFF' }}
            >
              Guía de metodología
            </p>
            <h2
              className="font-bold leading-tight"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.35rem, 2.5vw, 1.85rem)',
                color: '#FAFAF8',
              }}
            >
              ¿Por qué fallan el 90% de los robots de trading
              <br className="hidden lg:block" />
              {' '}— y cómo construir uno que no lo haga?
            </h2>
          </div>

          <Link
            href="/guia"
            className="shrink-0 inline-flex items-center gap-2 font-medium transition-colors hover:bg-[#0E6FD4]"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              color: '#FAFAF8',
              background: '#148AFF',
              padding: '0.75rem 1.5rem',
              whiteSpace: 'nowrap',
            }}
          >
            Leer la Guía
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-px"
          style={{ background: 'rgba(255,255,255,0.07)' }}
        >
          {pillars.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="flex items-start gap-4 p-6"
              style={{ background: '#08111E' }}
            >
              <span
                className="shrink-0 flex items-center justify-center w-10 h-10"
                style={{
                  background: 'rgba(20,138,255,0.1)',
                  border: '1px solid rgba(20,138,255,0.25)',
                  borderRadius: '8px',
                }}
              >
                <Icon size={18} color="#148AFF" />
              </span>
              <div>
                <p
                  className="font-semibold mb-1"
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: '#FAFAF8',
                    fontSize: '0.95rem',
                  }}
                >
                  {title}
                </p>
                <p
                  className="leading-relaxed"
                  style={{ color: '#7A8FA8', fontSize: '0.85rem' }}
                >
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
