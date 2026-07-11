import { sanityFetch } from '@/sanity/client'
import { beforeAfterQuery } from '@/sanity/queries'

type BeforeAfterData = { badge: string; titulo: string; tituloAntes: string; tituloDespues: string; itemsAntes: string[]; itemsDespues: string[] }

const FB_ANTES = [
  'Operas por intuición y te traiciona cuando más importa',
  'No sabes si tu estrategia tiene ventaja real o fue suerte',
  'Cada pérdida te hace cambiar el plan sobre la marcha',
  'Pasas horas frente a la pantalla sin resultados consistentes',
  'Buscas el indicador perfecto que nunca llega',
  'Tu cuenta depende de tu estado de ánimo ese día',
]
const FB_DESPUES = [
  'Tienes reglas claras que el robot ejecuta sin emociones',
  'Has validado tu estrategia con años de datos históricos reales',
  'El sistema opera igual en rachas buenas y malas',
  'El robot trabaja mientras tú vives sin estar pegado a la pantalla',
  'Entiendes la estadística detrás de cada decisión de diseño',
  'Tu resultado depende del sistema, no de cómo te sientes',
]

export default async function BeforeAfter() {
  let data: BeforeAfterData | null = null
  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    data = await sanityFetch<BeforeAfterData>(beforeAfterQuery, ['beforeAfter'])
  }
  const badge         = data?.badge               ?? 'La transformación'
  const titulo        = data?.titulo              ?? 'Lo que cambia cuando dejas de operar con emociones'
  const tituloAntes   = data?.tituloAntes         ?? 'Antes del curso'
  const tituloDespues = data?.tituloDespues        ?? 'Después del curso'
  const itemsAntes    = data?.itemsAntes?.length   ? data.itemsAntes   : FB_ANTES
  const itemsDespues  = data?.itemsDespues?.length ? data.itemsDespues : FB_DESPUES

  return (
    <section className="py-28 px-6" style={{ background: '#F7F5F2' }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 max-w-xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-6 h-px" style={{ background: '#059669' }} />
            <span className="text-xs tracking-[0.22em] uppercase" style={{ fontFamily: 'var(--font-mono)', color: '#059669' }}>{badge}</span>
          </div>
          <h2 className="font-display font-bold text-ink-1 leading-tight" style={{ fontSize: 'clamp(24px, 3vw, 40px)' }}>{titulo}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-px" style={{ background: 'rgba(0,0,0,0.06)' }}>
          <div className="p-8 md:p-10" style={{ background: '#FFFFFF' }}>
            <div className="flex items-center gap-3 mb-7">
              <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0" style={{ background: 'rgba(239,68,68,0.1)', color: '#EF4444' }} aria-hidden="true">✗</span>
              <h3 className="font-display font-semibold" style={{ fontSize: '1rem', color: '#141412' }}>{tituloAntes}</h3>
            </div>
            <ul className="flex flex-col gap-4" role="list">
              {itemsAntes.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs font-bold" style={{ background: 'rgba(239,68,68,0.08)', color: '#EF4444', border: '1px solid rgba(239,68,68,0.18)' }} aria-hidden="true">✗</span>
                  <span className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 md:p-10" style={{ background: '#FFFFFF', borderLeft: '2px solid rgba(5,150,105,0.15)' }}>
            <div className="flex items-center gap-3 mb-7">
              <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0" style={{ background: 'rgba(5,150,105,0.1)', color: '#059669' }} aria-hidden="true">✓</span>
              <h3 className="font-display font-semibold" style={{ fontSize: '1rem', color: '#141412' }}>{tituloDespues}</h3>
            </div>
            <ul className="flex flex-col gap-4" role="list">
              {itemsDespues.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs font-bold" style={{ background: 'rgba(5,150,105,0.08)', color: '#059669', border: '1px solid rgba(5,150,105,0.2)' }} aria-hidden="true">✓</span>
                  <span className="text-sm leading-relaxed font-medium" style={{ color: '#141412' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
