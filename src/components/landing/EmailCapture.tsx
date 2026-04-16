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
    background:  'rgba(255,255,255,0.06)',
    border:      '1px solid rgba(255,255,255,0.12)',
    color:       '#F0F4F8',
    fontFamily:  'var(--font-mono)',
  }

  return (
    <section className="py-14 px-6" style={{ background: '#0C1521' }}>
      <div className="max-w-2xl mx-auto">

        <p
          className="text-center text-sm mb-6"
          style={{ color: '#5A7A95', fontFamily: 'var(--font-mono)' }}
        >
          Recibe guías, estrategias y recursos gratuitos directamente en tu correo.
        </p>

        {status === 'success' ? (
          <p
            className="text-center text-sm font-medium"
            style={{ color: '#10B981', fontFamily: 'var(--font-mono)' }}
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
                className="flex-1 px-4 py-3.5 text-sm outline-none disabled:opacity-50 placeholder:text-[#3A5270]"
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(16,185,129,0.5)')}
                onBlur={(e)  => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
              />
              <input
                id="ec-apellidos"
                ref={apellidosRef}
                type="text"
                name="apellidos"
                placeholder="Apellidos"
                autoComplete="family-name"
                disabled={status === 'loading'}
                className="flex-1 px-4 py-3.5 text-sm outline-none disabled:opacity-50 placeholder:text-[#3A5270]"
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(16,185,129,0.5)')}
                onBlur={(e)  => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
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
                className="flex-1 px-4 py-3.5 text-sm outline-none disabled:opacity-50 placeholder:text-[#3A5270]"
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(16,185,129,0.5)')}
                onBlur={(e)  => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3.5 text-sm font-medium transition-colors disabled:opacity-60 shrink-0"
                style={{ background: '#10B981', color: '#0C1521', fontFamily: 'var(--font-mono)' }}
                onMouseEnter={(e) => { if (status !== 'loading') e.currentTarget.style.background = '#059669' }}
                onMouseLeave={(e) => { if (status !== 'loading') e.currentTarget.style.background = '#10B981' }}
              >
                {status === 'loading' ? '…' : 'Suscribirme →'}
              </button>
            </div>

            {status === 'error' && (
              <p className="mt-3 text-xs text-red-400 text-center" role="alert">
                Error al enviar. Inténtalo de nuevo.
              </p>
            )}

            <p className="mt-4 text-xs text-center" style={{ color: '#2D4A5E', fontFamily: 'var(--font-mono)' }}>
              Sin spam. Puedes darte de baja cuando quieras.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
