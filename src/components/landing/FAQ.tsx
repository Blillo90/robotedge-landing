'use client'
import { useState } from 'react'

type FaqItem = { pregunta: string; respuesta: string }

export default function FAQ({ items }: { items: FaqItem[] }) {
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
          {items.map((faq, i) => (
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
                <span className="text-sm font-semibold text-ink-1 leading-snug">{faq.pregunta}</span>
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
                <p className="text-sm text-ink-2 leading-relaxed">{faq.respuesta}</p>
              )}
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}
