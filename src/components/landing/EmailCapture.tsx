'use client'
import { useState, useRef, type FormEvent } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function EmailCapture() {
  const [status, setStatus] = useState<Status>('idle')
  const nombreRef    = useRef<HTMLInputElement>(null)
  const apellidosRef = useRef<HTMLInputElement>(null)
  const emailRef     = useRef<HTMLInputElement>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const nombre    = nombreRef.current?.value.trim()    ?? ''
    const apellidos = apellidosRef.current?.value.trim() ?? ''
    const email     = emailRef.current?.value.trim()     ?? ''
    if (!email) return

    setStatus('loading')

    try {
      const res  = await fetch('/api/lead', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ nombre, apellidos, email }),
      })
      const json = await res.json() as { success?: boolean }

      if (!res.ok || !json.success) { setStatus('error'); return }

      setStatus('success')

      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'lead_capture', { event_category: 'CRO', event_label: 'hero_form' })
      }
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    border:     '1px solid rgba(0,0,0,0.12)',
    color:      '#141412',
    fontFamily: 'var(--font-mono)',
  }

  return (
    <section className="py-10 px-6 bg-bg-base border-b" style={{ borderColor: 'rgba(0,0,0,0.07)' }}>
      <div className="max-w-2xl mx-auto">
        {status === 'success' ? (
          <p
            className="text-center text-sm font-medium"
            style={{ color: '#059669', fontFamily: 'var(--font-mono)' }}
          >
            ✓ Listo, revisa tu bandeja de entrada.
          </p>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="flex flex-col sm:flex-row gap-2">
              <label htmlFor="ec-nombre"    className="sr-only">Nombre</label>
              <label htmlFor="ec-apellidos" className="sr-only">Apellidos</label>
              <label htmlFor="ec-email"     className="sr-only">Email</label>

              <input
                id="ec-nombre"
                ref={nombreRef}
                type="text"
                name="nombre"
                placeholder="Nombre"
                autoComplete="given-name"
                disabled={status === 'loading'}
                className="flex-1 px-4 py-3 text-sm bg-transparent outline-none disabled:opacity-50"
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = '#059669')}
                onBlur={(e)  => (e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)')}
              />
              <input
                id="ec-apellidos"
                ref={apellidosRef}
                type="text"
                name="apellidos"
                placeholder="Apellidos"
                autoComplete="family-name"
                disabled={status === 'loading'}
                className="flex-1 px-4 py-3 text-sm bg-transparent outline-none disabled:opacity-50"
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = '#059669')}
                onBlur={(e)  => (e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)')}
              />
              <input
                id="ec-email"
                ref={emailRef}
                type="email"
                name="email"
                required
                placeholder="tu@email.com"
                autoComplete="email"
                disabled={status === 'loading'}
                className="flex-1 px-4 py-3 text-sm bg-transparent outline-none disabled:opacity-50"
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = '#059669')}
                onBlur={(e)  => (e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)')}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3 text-sm font-medium text-white transition-colors disabled:opacity-60 shrink-0"
                style={{ background: '#059669', fontFamily: 'var(--font-mono)' }}
                onMouseEnter={(e) => { if (status !== 'loading') e.currentTarget.style.background = '#047857' }}
                onMouseLeave={(e) => { if (status !== 'loading') e.currentTarget.style.background = '#059669' }}
              >
                {status === 'loading' ? '…' : 'Suscribirme'}
              </button>
            </div>

            {status === 'error' && (
              <p className="mt-2 text-xs text-red-500 text-center" role="alert">
                Error al enviar. Inténtalo de nuevo.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  )
}
