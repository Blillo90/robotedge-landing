'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface BlogSearchProps {
  initialQ?: string
  activeSilo?: string
  activeTag?: string
}

export default function BlogSearch({ initialQ = '', activeSilo = '', activeTag = '' }: BlogSearchProps) {
  const [q, setQ] = useState(initialQ)
  const router = useRouter()

  function buildUrl(overrides: { q?: string; silo?: string; tag?: string }) {
    const params = new URLSearchParams()
    const finalQ = overrides.q ?? q
    const finalSilo = overrides.silo ?? activeSilo
    const finalTag = overrides.tag ?? activeTag
    if (finalQ.trim()) params.set('q', finalQ.trim())
    if (finalSilo) params.set('silo', finalSilo)
    if (finalTag) params.set('tag', finalTag)
    return `/blog${params.toString() ? `?${params}` : ''}`
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    router.push(buildUrl({}))
  }

  function handleClear() {
    setQ('')
    router.push(buildUrl({ q: '' }))
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Buscar artículos..."
        className="w-full text-sm pl-9 pr-8 py-2.5 rounded-lg outline-none transition-all"
        style={{
          background: 'white',
          border: '1px solid rgba(0,0,0,0.1)',
          fontFamily: 'var(--font-figtree)',
          color: '#141412',
        }}
        onFocus={(e) => {
          e.currentTarget.style.border = '1px solid #059669'
          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(5,150,105,0.08)'
        }}
        onBlur={(e) => {
          e.currentTarget.style.border = '1px solid rgba(0,0,0,0.1)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      />
      <svg
        className="absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none"
        width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden
      >
        <circle cx="11" cy="11" r="7" stroke="#9CA3AF" strokeWidth="2" />
        <path d="M16.5 16.5L21 21" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />
      </svg>
      {q && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-ink-3 hover:text-ink-1 transition-colors"
          aria-label="Limpiar búsqueda"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </form>
  )
}
