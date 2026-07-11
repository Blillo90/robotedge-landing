import Link from 'next/link'
import { sanityFetch } from '@/sanity/client'
import { guiaCTAQuery } from '@/sanity/queries'

type GuiaCTAData = { badge: string; titulo: string; parrafo: string; textoCTA: string }

export default async function GuiaCTA() {
  let data: GuiaCTAData | null = null
  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    data = await sanityFetch<GuiaCTAData>(guiaCTAQuery, ['guiaCTA'])
  }
  const badge    = data?.badge    ?? 'Base de Conocimiento'
  const titulo   = data?.titulo   ?? 'El trading sin sistema es solo apuesta.\nCon sistema, es ventaja.'
  const parrafo  = data?.parrafo  ?? 'Descubre por qué la mayoría de los robots de trading fracasan, cómo se construye ventaja estadística real y qué diferencia a un sistema robusto de una curva de equity maquillada.'
  const textoCTA = data?.textoCTA ?? 'Leer la Guía'

  const [tituloParte1, tituloParte2] = titulo.includes('\n') ? titulo.split('\n') : [titulo, '']

  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 55% 65% at 50% 110%, rgba(20,138,255,0.07) 0%, transparent 65%)' }} />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="w-px h-12 mx-auto mb-8" style={{ background: '#148AFF', opacity: 0.6 }} />
        <p className="text-xs tracking-[0.22em] uppercase mb-5" style={{ fontFamily: 'var(--font-mono)', color: '#148AFF' }}>{badge}</p>
        <h2 className="font-display font-extrabold text-ink-1 leading-tight mb-6" style={{ fontSize: 'clamp(30px, 5vw, 56px)' }}>
          {tituloParte2 ? (
            <>
              {tituloParte1}<br />
              <span style={{ color: '#148AFF' }}>{tituloParte2}</span>
            </>
          ) : titulo}
        </h2>
        <p className="text-ink-2 leading-relaxed mb-10 mx-auto" style={{ maxWidth: '48ch' }}>{parrafo}</p>
        <Link href="/guia" className="inline-flex items-center gap-2 text-white text-sm font-medium px-8 py-4 rounded-xl bg-[#148AFF] hover:bg-[#0E6FD4] transition-colors" style={{ fontFamily: 'var(--font-mono)' }}>
          {textoCTA}
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  )
}
