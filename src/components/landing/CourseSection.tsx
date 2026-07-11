import Link from 'next/link'
import { sanityFetch } from '@/sanity/client'
import { courseSectionQuery } from '@/sanity/queries'

type Modulo = { titulo: string; descripcion: string }
type CourseSectionData = {
  badge: string; titulo: string; parrafo: string
  modulos: Modulo[]
  cardBadge: string; cardTitulo: string
  itemsIncluidos: string[]
  textoCTA: string; textoSecundario: string; socialProof: string
}

const FB_MODULOS: Modulo[] = [
  { titulo: 'Qué es el trading algorítmico y por qué NinjaTrader', descripcion: 'Fundamentos del trading sistemático. Por qué NinjaTrader 8 es el estándar para traders independientes en futuros y divisas.' },
  { titulo: 'Diseña tu primera estrategia sin escribir código', descripcion: 'Lógica de entrada, salida y gestión de posición. Construyes la estructura de tu sistema antes de tocar NinjaScript.' },
  { titulo: 'Backtesting tick a tick con datos históricos reales', descripcion: 'Validas la estrategia con la máxima precisión posible: tick a tick, con comisiones y slippage incluidos.' },
  { titulo: 'Cómo detectar overfitting antes de ir a vivo', descripcion: 'Walk-Forward Analysis y técnicas de validación fuera de muestra. El paso que la mayoría de cursos se salta.' },
  { titulo: 'Automatización completa con NinjaScript', descripcion: 'Programas tu estrategia en NinjaScript (basado en C#) desde cero. Sin experiencia previa en programación requerida.' },
  { titulo: 'Despliegue, supervisión y cartera de sistemas', descripcion: 'Conectas el robot a tu bróker y lo pones en operativa real. Aprendes a monitorizar y gestionar varios sistemas en paralelo.' },
]
const FB_ITEMS = ['6 módulos paso a paso', 'Configuración de NinjaTrader 8', 'Plantilla de backtesting', 'Checklist de validación de estrategias', 'Glosario de métricas clave']

export default async function CourseSection() {
  let data: CourseSectionData | null = null
  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    data = await sanityFetch<CourseSectionData>(courseSectionQuery, ['courseSection'])
  }
  const badge           = data?.badge                  ?? 'Curso de trading algorítmico con NinjaTrader'
  const titulo          = data?.titulo                 ?? 'Descarga la guía de iniciación al trading algorítmico con NinjaTrader'
  const parrafo         = data?.parrafo                ?? 'Una guía práctica para pasar del trading emocional a un sistema automático verificado. Cubre desde los conceptos básicos del trading algorítmico hasta el despliegue de tu primera estrategia en NinjaTrader 8 — sin experiencia previa en programación.'
  const modulos         = data?.modulos?.length        ? data.modulos        : FB_MODULOS
  const cardBadge       = data?.cardBadge              ?? 'Acceso gratuito'
  const cardTitulo      = data?.cardTitulo             ?? 'Guía de iniciación al trading algorítmico'
  const itemsIncluidos  = data?.itemsIncluidos?.length ? data.itemsIncluidos : FB_ITEMS
  const textoCTA        = data?.textoCTA               ?? 'Descargar guía gratuita →'
  const textoSecundario = data?.textoSecundario        ?? 'Sin tarjeta. Sin compromiso.'
  const socialProof     = data?.socialProof            ?? '4.9/5 · +190 traders formados con este método'

  return (
    <section id="curso" className="py-28 px-6 relative overflow-hidden" style={{ background: '#0A111A' }} aria-labelledby="curso-heading">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 55% 45% at 75% 50%, rgba(20,138,255,0.06) 0%, transparent 65%)' }} />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_360px] gap-16 xl:gap-24 items-start">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-6 h-px" style={{ background: '#148AFF', opacity: 0.7 }} />
              <span className="text-xs tracking-[0.22em] uppercase" style={{ fontFamily: 'var(--font-mono)', color: '#148AFF', opacity: 0.9 }}>{badge}</span>
            </div>
            <h2 id="curso-heading" className="font-display font-bold leading-tight mb-5" style={{ fontSize: 'clamp(26px, 3.5vw, 48px)', color: '#F0F4F8' }}>{titulo}</h2>
            <p className="leading-relaxed mb-12" style={{ maxWidth: '58ch', color: '#5A7A95', fontSize: '1rem' }}>{parrafo}</p>
            <ol className="space-y-0.5" aria-label="Contenidos del curso de trading algorítmico">
              {modulos.map((m, i) => (
                <li key={i} className="flex gap-5 p-5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <span className="shrink-0 font-bold text-xs pt-0.5" style={{ fontFamily: 'var(--font-mono)', color: '#148AFF', opacity: 0.5, minWidth: '20px' }}>{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ color: '#F0F4F8' }}>{m.titulo}</p>
                    <p className="text-sm leading-relaxed" style={{ color: '#5A7A95' }}>{m.descripcion}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:sticky lg:top-24">
            <div className="overflow-hidden" style={{ background: '#111C28', border: '1px solid rgba(20,138,255,0.15)' }}>
              <div className="px-7 py-5" style={{ background: 'rgba(20,138,255,0.07)', borderBottom: '1px solid rgba(20,138,255,0.12)' }}>
                <span className="text-xs tracking-[0.14em] uppercase" style={{ fontFamily: 'var(--font-mono)', color: '#148AFF' }}>{cardBadge}</span>
                <p className="mt-2 font-display font-bold leading-snug" style={{ fontSize: '1.15rem', color: '#F0F4F8' }}>{cardTitulo}</p>
              </div>
              <div className="px-7 py-6">
                <p className="text-xs tracking-[0.1em] uppercase mb-4" style={{ fontFamily: 'var(--font-mono)', color: '#3A5270' }}>Incluye</p>
                <ul className="space-y-3 mb-8">
                  {itemsIncluidos.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm" style={{ color: '#A8C4D8' }}>
                      <span style={{ color: '#148AFF', marginTop: '2px' }} aria-hidden>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/guia" className="block w-full text-center font-display font-bold text-sm py-4 px-6 transition-opacity duration-150 hover:opacity-90" style={{ background: '#148AFF', color: '#fff', letterSpacing: '0.02em' }}>
                  {textoCTA}
                </Link>
                <p className="mt-4 text-center text-xs" style={{ fontFamily: 'var(--font-mono)', color: '#3A5270' }}>{textoSecundario}</p>
              </div>
            </div>
            <div className="mt-4 px-5 py-4 flex items-center gap-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <span style={{ color: '#F59E0B', fontSize: '13px' }}>★★★★★</span>
              <p className="text-xs" style={{ color: '#5A7A95' }}>{socialProof}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
