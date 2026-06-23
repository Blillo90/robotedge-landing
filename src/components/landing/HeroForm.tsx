'use client'
import { useRef, useState, type FormEvent } from 'react'

const URL_ES    = 'https://drive.google.com/file/d/1WnRFEqmpWKNBVbHLXJp2aIKA630hNw2J/view?usp=drive_link'
const URL_LATAM = 'https://drive.google.com/drive/folders/1mqhgKVgWKsmNmvlrsBW7ScItMFBT5p-Q'

const PAISES_LATAM = [
  'Argentina', 'Bolivia', 'Brasil', 'Chile', 'Colombia', 'Costa Rica', 'Cuba',
  'Ecuador', 'El Salvador', 'Guatemala', 'Honduras', 'México', 'Nicaragua',
  'Panamá', 'Paraguay', 'Perú', 'Puerto Rico', 'República Dominicana',
  'Uruguay', 'Venezuela',
]

const PAISES = ['España', ...PAISES_LATAM, 'Otro país']

export default function HeroForm() {
  const paisRef = useRef<HTMLSelectElement>(null)
  const [error, setError] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const pais = paisRef.current?.value ?? ''

    if (!pais) {
      setError(true)
      paisRef.current?.focus()
      return
    }

    setError(false)
    const isLatam = PAISES_LATAM.includes(pais)
    window.open(isLatam ? URL_LATAM : URL_ES, '_blank', 'noopener,noreferrer')
  }

  const inputBase =
    'flex-1 min-w-0 px-4 py-3.5 text-sm bg-transparent outline-none'
  const inputStyle = {
    border:     '1px solid rgba(255,255,255,0.12)',
    color:      '#F0F4F8',
    fontFamily: 'var(--font-mono)',
  }
  const selectStyle = {
    ...inputStyle,
    background: '#0C1521',
  }
  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) =>
    (e.currentTarget.style.borderColor = 'rgba(20,138,255,0.6)')
  const onBlur  = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) =>
    (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')
  const onPaisBlur = (e: React.FocusEvent<HTMLSelectElement>) =>
    (e.currentTarget.style.borderColor = error ? '#FF4D4D' : 'rgba(255,255,255,0.12)')

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Registro gratuito">
      <div className="flex flex-col sm:flex-row gap-2">
        <label htmlFor="hf-pais" className="sr-only">País</label>
        <select
          id="hf-pais"
          ref={paisRef}
          name="pais"
          required
          defaultValue=""
          className={inputBase}
          style={{ ...selectStyle, borderColor: error ? '#FF4D4D' : undefined }}
          aria-invalid={error}
          aria-describedby={error ? 'hf-pais-error' : undefined}
          onFocus={onFocus}
          onBlur={onPaisBlur}
          onChange={() => setError(false)}
        >
          <option value="" disabled hidden>¿Desde qué país nos visitas?</option>
          {PAISES.map((pais) => (
            <option key={pais} value={pais}>{pais}</option>
          ))}
        </select>
        <button
          type="submit"
          className="px-6 py-3.5 text-sm font-medium transition-colors shrink-0 rounded-lg"
          style={{ background: '#148AFF', color: '#fff', fontFamily: 'var(--font-mono)' }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#0E6FD4' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = '#148AFF' }}
        >
          Quiero montarlo ya →
        </button>
      </div>

      {error && (
        <p
          id="hf-pais-error"
          role="alert"
          className="mt-2 text-xs"
          style={{ color: '#FF4D4D', fontFamily: 'var(--font-mono)' }}
        >
          Elige tu país para continuar.
        </p>
      )}

      <p className="mt-3 text-xs" style={{ color: '#3A5270', fontFamily: 'var(--font-mono)' }}>
        Gratis. Sin paja. Sin excusas.
      </p>
    </form>
  )
}
