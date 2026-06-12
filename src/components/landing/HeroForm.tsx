'use client'
import { useRef, type FormEvent } from 'react'

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
  const nombreRef    = useRef<HTMLInputElement>(null)
  const apellidosRef = useRef<HTMLInputElement>(null)
  const emailRef     = useRef<HTMLInputElement>(null)
  const paisRef      = useRef<HTMLSelectElement>(null)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const pais    = paisRef.current?.value ?? ''
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
          className={inputBase + ' sm:flex-[1.6]'}
          style={inputStyle}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-2 mt-2">
        <label htmlFor="hf-pais" className="sr-only">País</label>
        <select
          id="hf-pais"
          ref={paisRef}
          name="pais"
          required
          defaultValue=""
          className={inputBase}
          style={selectStyle}
          onFocus={onFocus}
          onBlur={onBlur}
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

      <p className="mt-3 text-xs" style={{ color: '#3A5270', fontFamily: 'var(--font-mono)' }}>
        Gratis. Sin paja. Sin excusas.
      </p>
    </form>
  )
}
