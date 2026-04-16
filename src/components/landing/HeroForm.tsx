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
    'flex-1 min-w-0 px-4 py-3.5 text-sm bg-transparent outline-none disabled:opacity-50'
  const inputStyle = {
    border:     '1px solid rgba(255,255,255,0.12)',
    color:      '#F0F4F8',
    fontFamily: 'var(--font-mono)',
  }
  const onFocus = (e: React.FocusEvent<HTMLInputElement>) =>
    (e.currentTarget.style.borderColor = 'rgba(16,185,129,0.6)')
  const onBlur  = (e: React.FocusEvent<HTMLInputElement>) =>
    (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')

  if (status === 'success') {
    return (
      <div
        className="flex items-center gap-3 px-5 py-4"
        style={{ border: '1px solid rgba(16,185,129,0.3)', background: 'rgba(16,185,129,0.08)' }}
      >
        <span
          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-white text-xs"
          style={{ background: '#10B981' }}
        >
          ✓
        </span>
        <p className="text-sm" style={{ fontFamily: 'var(--font-mono)', color: '#F0F4F8' }}>
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
          onFocus={onFocus}
          onBlur={onBlur}
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
          onFocus={onFocus}
          onBlur={onBlur}
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
          className={inputBase + ' sm:flex-[1.6]'}
          style={inputStyle}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-3.5 text-sm font-medium transition-colors disabled:opacity-60 shrink-0"
          style={{ background: '#10B981', color: '#0C1521', fontFamily: 'var(--font-mono)' }}
          onMouseEnter={(e) => { if (status !== 'loading') e.currentTarget.style.background = '#059669' }}
          onMouseLeave={(e) => { if (status !== 'loading') e.currentTarget.style.background = '#10B981' }}
        >
          {status === 'loading' ? '…' : 'Empezar →'}
        </button>
      </div>

      {status === 'error' && (
        <p className="mt-2 text-xs text-red-400" role="alert">
          Error al enviar. Inténtalo de nuevo.
        </p>
      )}

      <p className="mt-3 text-xs" style={{ color: '#3A5270', fontFamily: 'var(--font-mono)' }}>
        Gratis. Sin spam. Baja cuando quieras.
      </p>
    </form>
  )
}
