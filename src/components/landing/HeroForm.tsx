'use client'
import { useState, useRef, type FormEvent } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function HeroForm() {
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

  const inputBase =
    'flex-1 min-w-0 px-4 py-3.5 text-sm bg-transparent outline-none disabled:opacity-50 placeholder:text-ink-3'
  const inputStyle = {
    border:     '1px solid rgba(0,0,0,0.12)',
    color:      '#141412',
    fontFamily: 'var(--font-mono)',
  }

  if (status === 'success') {
    return (
      <div
        className="flex items-center gap-3 px-5 py-4"
        style={{ border: '1px solid rgba(5,150,105,0.3)', background: 'rgba(5,150,105,0.05)' }}
      >
        <span
          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-white text-xs"
          style={{ background: '#059669' }}
        >
          ✓
        </span>
        <p className="text-sm" style={{ fontFamily: 'var(--font-mono)', color: '#141412' }}>
          ¡Listo! Revisa tu bandeja de entrada.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Registro gratuito">
      <div className="flex flex-col sm:flex-row gap-2">
        <label htmlFor="hf-nombre"    className="sr-only">Nombre</label>
        <label htmlFor="hf-apellidos" className="sr-only">Apellidos</label>
        <label htmlFor="hf-email"     className="sr-only">Email</label>

        <input
          id="hf-nombre"
          ref={nombreRef}
          type="text"
          name="nombre"
          placeholder="Nombre"
          autoComplete="given-name"
          disabled={status === 'loading'}
          className={inputBase}
          style={inputStyle}
          onFocus={(e) => (e.currentTarget.style.borderColor = '#059669')}
          onBlur={(e)  => (e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)')}
        />
        <input
          id="hf-apellidos"
          ref={apellidosRef}
          type="text"
          name="apellidos"
          placeholder="Apellidos"
          autoComplete="family-name"
          disabled={status === 'loading'}
          className={inputBase}
          style={inputStyle}
          onFocus={(e) => (e.currentTarget.style.borderColor = '#059669')}
          onBlur={(e)  => (e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)')}
        />
        <input
          id="hf-email"
          ref={emailRef}
          type="email"
          name="email"
          required
          placeholder="tu@email.com"
          autoComplete="email"
          disabled={status === 'loading'}
          className={inputBase}
          style={inputStyle}
          onFocus={(e) => (e.currentTarget.style.borderColor = '#059669')}
          onBlur={(e)  => (e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)')}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-3.5 text-sm font-medium text-white transition-colors disabled:opacity-60 shrink-0"
          style={{ background: '#059669', fontFamily: 'var(--font-mono)' }}
          onMouseEnter={(e) => { if (status !== 'loading') e.currentTarget.style.background = '#047857' }}
          onMouseLeave={(e) => { if (status !== 'loading') e.currentTarget.style.background = '#059669' }}
        >
          {status === 'loading' ? '…' : 'Empezar →'}
        </button>
      </div>

      {status === 'error' && (
        <p className="mt-2 text-xs text-red-500" role="alert">
          Error al enviar. Inténtalo de nuevo.
        </p>
      )}

      <p className="mt-3 text-xs" style={{ color: '#ABA79F', fontFamily: 'var(--font-mono)' }}>
        Gratis. Sin spam. Baja cuando quieras.
      </p>
    </form>
  )
}
