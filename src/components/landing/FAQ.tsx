'use client'
import { useState } from 'react'

const faqs = [
  {
    q: '¿Necesito saber programar para hacer esto?',
    a: 'No es necesario tener experiencia previa en programación. El método está diseñado para que entiendas la lógica antes del código. Hay partes donde aprenderás sintaxis básica, pero es algo que cualquier persona con mentalidad analítica puede dominar en semanas. Lo importante no es programar con fluidez desde el primer día, sino entender qué estás construyendo y por qué.',
  },
  {
    q: '¿Esto realmente funciona o es otro producto de "hazte rico con trading"?',
    a: 'Es una pregunta legítima. El trading está lleno de promesas vacías. Lo que enseñamos no es una estrategia mágica, es un método de trabajo: cómo diseñar hipótesis, validarlas estadísticamente, medir el riesgo real y automatizar lo que funciona. Un sistema algorítmico bien construido no garantiza ganancias. Lo que sí garantiza es consistencia, control y decisiones basadas en datos. La ventaja la construyes tú con el proceso.',
  },
  {
    q: '¿Cuánto tiempo necesito para tener un sistema operativo?',
    a: 'Depende del tiempo que le dediques, pero la hoja de ruta realista es: primeras 4 semanas para fundamentos y terminología; semanas 4 a 8 para diseño y backtesting de tu primera estrategia; semanas 8 a 12 para optimización y preparación del despliegue. A partir del mes 3, con dedicación consistente, puedes tener tu primer robot operando en cuenta real.',
  },
  {
    q: '¿Cuánto capital necesito para empezar?',
    a: 'Puedes empezar en paper trading sin capital. Para operar en live, muchos brokers permiten cuentas desde 500–1.000 €. Lo más importante es validar bien la estrategia antes de arriesgar dinero real. No recomendamos pasar a live hasta que los resultados del backtesting sean robustos.',
  },
  {
    q: '¿Qué mercados puedo operar con estos sistemas?',
    a: 'Los conceptos son aplicables a cualquier mercado: futuros, forex, acciones, criptomonedas. Cubrimos principalmente mercados con buena liquidez y acceso a datos históricos fiables, como futuros (CME), forex y cripto (Binance, Bybit). Las herramientas que aprenderás son transferibles a cualquier mercado que te interese.',
  },
  {
    q: '¿Puedo acceder al contenido desde cualquier dispositivo?',
    a: 'Sí. Todo el contenido está optimizado para móvil, tablet y escritorio. No necesitas instalar ninguna aplicación adicional para acceder a las guías y materiales.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-14 max-w-xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-6 h-px" style={{ background: '#148AFF' }} />
            <span
              className="text-xs tracking-[0.22em] uppercase"
              style={{ color: '#148AFF', fontFamily: 'var(--font-mono)' }}
            >
              FAQ
            </span>
          </div>
          <h2
            className="font-display font-bold text-ink-1 leading-tight"
            style={{ fontSize: 'clamp(24px, 3vw, 40px)' }}
          >
            Preguntas que nos hacen antes de empezar
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px" style={{ background: 'rgba(0,0,0,0.06)' }}>
          {faqs.map((faq, i) => (
            <button
              key={i}
              className="text-left p-7 flex flex-col gap-3 transition-colors"
              style={{
                background: open === i ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.65)',
              }}
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-sm font-semibold text-ink-1 leading-snug">{faq.q}</span>
                <span
                  className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 transition-transform"
                  style={{
                    background: open === i ? '#148AFF' : 'rgba(20,138,255,0.1)',
                    transform: open === i ? 'rotate(45deg)' : 'none',
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                    <path d="M5 1v8M1 5h8" stroke={open === i ? '#fff' : '#148AFF'} strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </span>
              </div>
              {open === i && (
                <p className="text-sm text-ink-2 leading-relaxed">{faq.a}</p>
              )}
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}
