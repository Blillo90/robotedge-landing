'use client'
import { useState, useRef, type FormEvent } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function EmailCapture() {
  const [status, setStatus] = useState<Status>('idle')
  const emailRef = useRef<HTMLInputElement>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const email = emailRef.current?.value.trim() ?? ''
    if (!email) return

    setStatus('loading')

    try {
      const res  = await fetch('/api/lead', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ email }),
      })
      const json = await res.json() as { success?: boolean }

      if (!res.ok || !json.success) { setStatus('error'); return }

      setStatus('success')

      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'lead_capture', { event_category: 'CRO', event_label: 'footer_form' })
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="py-16 px-6 bg-bg-base border-t" style={{ borderColor: 'rgba(0,0,0,0.07)' }}>
      <div className="max-w-md mx-auto">

        {status === 'success' ? (
          <p className="text-center text-sm text-edge font-medium" style={{ fontFamily: 'var(--font-mono)' }}>
            ✓ Listo, revisa tu bandeja de entrada.
          </p>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex gap-2">
            <label htmlFor="footer-email" className="sr-only">Tu email</label>
            <input
              id="footer-email"
              ref={emailRef}
              type="email"
              name="email"
              required
              placeholder="tu@email.com"
              autoComplete="email"
              disabled={status === 'loading'}
              className="flex-1 px-4 py-3 text-sm bg-transparent outline-none disabled:opacity-50"
              style={{
                border:     '1px solid rgba(0,0,0,0.12)',
                color:      '#141412',
                fontFamily: 'var(--font-mono)',
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#059669')}
              onBlur={(e)  => (e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)')}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-5 py-3 text-sm font-medium text-white transition-colors disabled:opacity-60 shrink-0"
              style={{
                background:  '#059669',
                fontFamily:  'var(--font-mono)',
              }}
              onMouseEnter={(e) => { if (status !== 'loading') e.currentTarget.style.background = '#047857' }}
              onMouseLeave={(e) => { if (status !== 'loading') e.currentTarget.style.background = '#059669' }}
            >
              {status === 'loading' ? '…' : 'Suscribirme'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="mt-2 text-xs text-red-500 text-center" role="alert">
            Error al enviar. Inténtalo de nuevo.
          </p>
        )}

      </div>
    </section>
  )
}
