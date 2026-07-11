import { sanityFetch } from '@/sanity/client'
import { bridgeQuery } from '@/sanity/queries'

type Paso = { titulo: string; descripcion: string }
type BridgeData = { cita: string; pieQuote: string; pasos: Paso[] }

const FB_PASOS: Paso[] = [
  { titulo: 'Diseñas la estrategia', descripcion: 'Defines las reglas con claridad, sin presión de mercado. Entradas, salidas, gestión de riesgo: todo por escrito antes de que el precio se mueva.' },
  { titulo: 'La validas en el pasado', descripcion: 'El backtesting te muestra cómo se habría comportado tu estrategia en miles de escenarios reales. Sabes qué esperar antes de arriesgar un euro.' },
  { titulo: 'La ejecutas sin interferirla', descripcion: 'El robot opera exactamente lo que tú decidiste en frío. Sin excepciones, sin dudas, sin que el miedo o la euforia cambien el plan.' },
]

export default async function Bridge() {
  let data: BridgeData | null = null
  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    data = await sanityFetch<BridgeData>(bridgeQuery, ['bridge'])
  }
  const cita     = data?.cita     ?? 'Un algoritmo no tiene miedo. No tiene ego. No duda. Ejecuta exactamente lo que tú decides cuando estás tranquilo, no lo que haces cuando el mercado se mueve.'
  const pieQuote = data?.pieQuote ?? 'El principio del trading sistemático'
  const pasos    = data?.pasos?.length ? data.pasos : FB_PASOS

  return (
    <section className="py-6 px-4 sm:px-6">
      <div className="relative max-w-[1400px] mx-auto overflow-hidden" style={{ background: '#F7F5F2', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.07)' }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent 0%, #059669 50%, transparent 100%)' }} aria-hidden />
        <div className="px-8 md:px-14 py-16 md:py-20 max-w-6xl mx-auto">
          <blockquote className="mb-16 max-w-3xl">
            <span className="block font-display font-black leading-none mb-5 select-none" style={{ fontSize: '5rem', color: '#059669', opacity: 0.18, lineHeight: 1 }} aria-hidden>&ldquo;</span>
            <p className="font-display font-bold leading-tight mb-6" style={{ fontSize: 'clamp(22px, 3vw, 38px)', color: '#141412' }}>{cita}</p>
            <footer className="flex items-center gap-3" style={{ fontFamily: 'var(--font-mono)' }}>
              <span className="block w-6 h-px" style={{ background: '#059669', opacity: 0.5 }} />
              <span className="text-xs tracking-[0.14em] uppercase" style={{ color: '#6B7280' }}>{pieQuote}</span>
            </footer>
          </blockquote>
          <div className="grid md:grid-cols-3 gap-px" style={{ background: 'rgba(0,0,0,0.06)' }}>
            {pasos.map((step, i) => (
              <div key={i} className="p-8 flex flex-col gap-4" style={{ background: '#FFFFFF' }}>
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-display font-extrabold" style={{ fontSize: '1.5rem', color: '#059669', opacity: 0.3, fontFamily: 'var(--font-mono)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 h-px" style={{ background: 'rgba(5,150,105,0.15)' }} />
                </div>
                <h3 className="font-display font-semibold leading-snug" style={{ fontSize: '1.0625rem', color: '#141412' }}>{step.titulo}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#4B5563' }}>{step.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
