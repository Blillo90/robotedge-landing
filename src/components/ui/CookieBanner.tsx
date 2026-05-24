'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const STORAGE_KEY = 're_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    window.dispatchEvent(new Event('re_consent_accepted'))
    setVisible(false)
  }

  function reject() {
    localStorage.setItem(STORAGE_KEY, 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="max-w-2xl mx-auto bg-white border border-black/10 rounded-lg shadow-lg px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-[#4A4845] leading-relaxed flex-1">
          Usamos cookies analíticas para mejorar la experiencia.{' '}
          <Link
            href="/privacidad"
            className="text-[#059669] underline underline-offset-2 hover:opacity-75 transition-opacity"
          >
            Política de privacidad
          </Link>
        </p>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={reject}
            className="text-xs tracking-widest uppercase font-medium text-[#ABA79F] hover:text-[#4A4845] transition-colors px-3 py-1.5"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Rechazar
          </button>
          <button
            onClick={accept}
            className="text-xs tracking-widest uppercase font-medium bg-[#059669] text-white px-4 py-1.5 rounded hover:bg-[#047857] transition-colors"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  )
}
