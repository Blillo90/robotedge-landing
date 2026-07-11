import { sanityFetch } from '@/sanity/client'
import { objectionsQuery } from '@/sanity/queries'

type Objecion = { pregunta: string; respuesta: string }
type ObjectionsData = { badge: string; titulo: string; objeciones: Objecion[] }

const FB_OBJECIONES: Objecion[] = [
  { pregunta: '¿Y si no sé programar?', respuesta: 'No necesitas experiencia previa. El curso te lleva paso a paso desde la lógica hasta el código en NinjaScript. Cualquier persona con mentalidad analítica puede dominarlo en semanas.' },
  { pregunta: '¿Cuánto tiempo necesito?', respuesta: 'Con 2–3 horas diarias puedes tener tu primera estrategia funcionando en 6–8 semanas. El contenido está diseñado para avanzar a tu ritmo, sin presión ni fechas límite.' },
  { pregunta: '¿Cuánto capital necesito para empezar?', respuesta: 'Puedes empezar en paper trading sin capital. Para operar en live, los micro-contratos de CME permiten empezar desde 500–1.000 €. Lo importante es validar primero.' },
  { pregunta: '¿El trading algorítmico garantiza ganancias?', respuesta: 'No. Ningún método lo garantiza. Lo que sí garantiza es consistencia, control y decisiones basadas en datos, no en emociones. La ventaja la construyes tú con el proceso.' },
  { pregunta: '¿Qué plataforma necesito?', respuesta: 'Usamos NinjaTrader 8, que es gratuita para análisis y paper trading. Solo necesitas un PC con Windows. Te guiamos con la instalación y configuración desde el primer día.' },
  { pregunta: '¿Tengo soporte si me atasco?', respuesta: 'Sí. Pablo Llobregat realiza sesiones en directo con los alumnos donde puedes resolver dudas sobre tu caso concreto. No estás solo en ningún punto del proceso.' },
]

export default async function Objections() {
  let data: ObjectionsData | null = null
  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    data = await sanityFetch<ObjectionsData>(objectionsQuery, ['objections'])
  }
  const badge      = data?.badge              ?? 'Lo que frena a la gente'
  const titulo     = data?.titulo             ?? 'Respuestas directas a las dudas más comunes'
  const objeciones = data?.objeciones?.length ? data.objeciones : FB_OBJECIONES

  return (
    <section className="py-28 px-6" style={{ background: '#F7F5F2' }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 max-w-xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-6 h-px" style={{ background: '#148AFF' }} />
            <span className="text-xs tracking-[0.22em] uppercase" style={{ fontFamily: 'var(--font-mono)', color: '#148AFF' }}>{badge}</span>
          </div>
          <h2 className="font-display font-bold text-ink-1 leading-tight" style={{ fontSize: 'clamp(24px, 3vw, 40px)' }}>{titulo}</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'rgba(0,0,0,0.06)' }}>
          {objeciones.map((obj, i) => (
            <div key={i} className="p-8 flex flex-col gap-4" style={{ background: '#FFFFFF' }}>
              <div className="flex items-start gap-3">
                <span className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5" style={{ background: 'rgba(20,138,255,0.08)', color: '#148AFF', border: '1px solid rgba(20,138,255,0.2)', fontFamily: 'var(--font-mono)' }} aria-hidden="true">?</span>
                <h3 className="font-display font-semibold leading-snug text-ink-1" style={{ fontSize: '0.9375rem' }}>{obj.pregunta}</h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#4B5563' }}>{obj.respuesta}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
