'use client'
import { useState, useRef, type FormEvent } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function LeadForm() {
  const [status, setStatus]   = useState<Status>('idle')
  const [message, setMessage] = useState('')
  const emailRef = useRef<HTMLInputElement>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const email = emailRef.current?.value.trim() ?? ''
    if (!email) return

    setStatus('loading')
    setMessage('')

    try {
      const res = await fetch('/api/lead', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ email }),
      })
      const json = await res.json() as { success?: boolean; error?: string }

      if (!res.ok || !json.success) {
        setStatus('error')
        setMessage(json.error ?? 'Algo salió mal. Inténtalo de nuevo.')
        return
      }

      setStatus('success')

      // Track conversion event if GA4 is loaded
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'lead_capture', {
          event_category: 'CRO',
          event_label:    'landing_form',
        })
      }
    } catch {
      setStatus('error')
      setMessage('Error de conexión. Inténtalo de nuevo.')
    }
  }

  return (
    <section
      className="py-28 px-6"
      style={{ background: '#0C1521' }}
      id="guia-gratuita"
    >
      <div className="max-w-2xl mx-auto text-center">

        {/* Label */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="block w-6 h-px" style={{ background: '#148AFF' }} />
          <span
            className="text-xs tracking-[0.22em] uppercase"
            style={{ fontFamily: 'var(--font-mono)', color: '#148AFF' }}
          >
            Recurso Gratuito
          </span>
          <span className="block w-6 h-px" style={{ background: '#148AFF' }} />
        </div>

        <h2
          className="font-display font-bold leading-tight mb-4"
          style={{ fontSize: 'clamp(24px, 4vw, 44px)', color: '#F0F4F8' }}
        >
          Empieza hoy. Tu primer sistema, paso a paso.
        </h2>
        <p
          className="mb-10 leading-relaxed mx-auto"
          style={{ color: '#5A7A95', maxWidth: '48ch' }}
        >
          Descarga la guía gratuita y aprende, desde cero, cómo crear tu primer
          robot de trading algorítmico: desde la idea hasta el bot operando en
          cuenta real. Sin experiencia en programación. Sin atajos que no
          funcionan.
        </p>

        {status === 'success' ? (
          <div
            className="py-6 px-8 text-center"
            style={{
              background: 'rgba(16,185,129,0.1)',
              border: '1px solid rgba(16,185,129,0.25)',
            }}
          >
            <p className="font-semibold mb-1" style={{ color: '#148AFF' }}>
              ¡Listo! Revisa tu bandeja de entrada.
            </p>
            <p className="text-sm" style={{ color: '#5A7A95' }}>
              Te hemos enviado acceso a la guía. Si no la ves, comprueba spam.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            aria-label="Formulario de captación de guía gratuita"
          >
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <label htmlFor="lead-email" className="sr-only">
                Tu email
              </label>
              <input
                id="lead-email"
                ref={emailRef}
                type="email"
                name="email"
                required
                placeholder="tu@email.com"
                autoComplete="email"
                disabled={status === 'loading'}
                className="flex-1 px-4 py-3.5 text-sm bg-transparent outline-none disabled:opacity-50"
                style={{
                  border:      '1px solid rgba(255,255,255,0.12)',
                  color:       '#F0F4F8',
                  fontFamily:  'var(--font-mono)',
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(16,185,129,0.5)')}
                onBlur={(e)  => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3.5 text-sm font-medium transition-colors disabled:opacity-60 shrink-0 rounded-xl"
                style={{
                  background:  '#148AFF',
                  color:       '#0C1521',
                  fontFamily:  'var(--font-mono)',
                }}
                onMouseEnter={(e) => { if (status !== 'loading') e.currentTarget.style.background = '#0E6FD4' }}
                onMouseLeave={(e) => { if (status !== 'loading') e.currentTarget.style.background = '#148AFF' }}
              >
                {status === 'loading' ? 'Enviando…' : 'Quiero la guía →'}
              </button>
            </div>

            {status === 'error' && (
              <p className="mt-3 text-sm text-red-400" role="alert">
                {message}
              </p>
            )}

            <p
              className="mt-4 text-xs"
              style={{ color: '#3A5270', fontFamily: 'var(--font-mono)' }}
            >
              Sin spam. Puedes darte de baja cuando quieras.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
