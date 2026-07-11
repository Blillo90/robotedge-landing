import { sanityFetch } from '@/sanity/client'
import { whoIsForQuery } from '@/sanity/queries'

type WhoIsForData = { badge: string; titulo: string; itemsParaQuien: string[]; tituloNo: string; itemsNoParaQuien: string[] }

const FB_YES = [
  'Llevas tiempo en los mercados pero los resultados son irregulares o negativos',
  'Has probado estrategias de terceros y ninguna encaja con tu perfil ni capital',
  'Quieres dejar de operar por instinto y empezar a operar con un sistema replicable',
  'No tienes conocimientos de programación pero estás dispuesto a aprender lo necesario',
  'Buscas construir un sistema que pueda operar sin estar pendiente de él 24 horas',
  'Tienes mentalidad de largo plazo y entiendes que la ventaja se construye, no se encuentra',
]
const FB_NO = [
  'Buscas un sistema que "gana siempre" o promesas de rentabilidad garantizada',
  'Quieres resultados sin proceso ni aprendizaje real',
  'No estás dispuesto a dedicar tiempo real a entender lo que vas a operar',
]

export default async function WhoIsFor() {
  let data: WhoIsForData | null = null
  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    data = await sanityFetch<WhoIsForData>(whoIsForQuery, ['whoIsFor'])
  }
  const badge            = data?.badge            ?? 'Para quién es'
  const titulo           = data?.titulo           ?? 'Antes de continuar: sé honesto contigo mismo.'
  const itemsParaQuien   = data?.itemsParaQuien?.length   ? data.itemsParaQuien   : FB_YES
  const tituloNo         = data?.tituloNo         ?? 'Este método NO es para ti si:'
  const itemsNoParaQuien = data?.itemsNoParaQuien?.length ? data.itemsNoParaQuien : FB_NO

  return (
    <section className="pt-10 pb-28 px-6 relative overflow-hidden" style={{ background: '#0C1521' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 50% at 80% 50%, rgba(20,138,255,0.05) 0%, transparent 60%)' }} />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-6 h-px" style={{ background: '#148AFF' }} />
            <span className="text-xs tracking-[0.22em] uppercase" style={{ fontFamily: 'var(--font-mono)', color: '#148AFF' }}>{badge}</span>
          </div>
          <h2 className="font-display font-bold leading-tight" style={{ fontSize: 'clamp(26px, 3.5vw, 44px)', color: '#F0F4F8' }}>{titulo}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <ul className="space-y-4">
              {itemsParaQuien.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.3)' }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden><path d="M2 5l2.5 2.5L8 3" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: '#A0BCD0' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl p-8" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <p className="text-xs tracking-[0.15em] uppercase mb-5 font-medium" style={{ fontFamily: 'var(--font-mono)', color: '#4A6A85' }}>{tituloNo}</p>
            <ul className="space-y-4">
              {itemsNoParaQuien.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden><path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: '#4A6A85' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
