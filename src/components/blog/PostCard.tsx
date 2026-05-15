'use client'

import Link from 'next/link'

type Post = {
  id: string
  title: string
  slug: string
  excerpt: string | null
  silo: string
  read_time: number
  created_at: string
  tags?: string[]
}

const SILO_CONFIG: Record<string, { label: string; color: string; bg: string; border: string; accent: string }> = {
  'ninjatrader-tecnico': {
    label: 'NinjaTrader Técnico',
    color: '#059669',
    bg: 'rgba(5,150,105,0.08)',
    border: 'rgba(5,150,105,0.2)',
    accent: '#059669',
  },
  'trading-algoritmico': {
    label: 'Trading Algorítmico',
    color: '#148AFF',
    bg: 'rgba(20,138,255,0.08)',
    border: 'rgba(20,138,255,0.2)',
    accent: '#148AFF',
  },
  comparativas: {
    label: 'Comparativas',
    color: '#7C3AED',
    bg: 'rgba(124,58,237,0.08)',
    border: 'rgba(124,58,237,0.2)',
    accent: '#7C3AED',
  },
  'estrategias-reales': {
    label: 'Estrategias Reales',
    color: '#D97706',
    bg: 'rgba(217,119,6,0.08)',
    border: 'rgba(217,119,6,0.2)',
    accent: '#D97706',
  },
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

interface PostCardProps {
  post: Post
  featured?: boolean
}

export default function PostCard({ post, featured = false }: PostCardProps) {
  const silo = SILO_CONFIG[post.silo] ?? {
    label: post.silo,
    color: '#059669',
    bg: 'rgba(5,150,105,0.08)',
    border: 'rgba(5,150,105,0.2)',
    accent: '#059669',
  }

  const tags = post.tags?.slice(0, featured ? 5 : 3) ?? []

  if (featured) {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group flex flex-col sm:flex-row bg-white overflow-hidden transition-all duration-200"
        style={{
          border: '1px solid rgba(0,0,0,0.07)',
          borderRadius: '16px',
          boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 28px rgba(0,0,0,0.09), 0 0 0 1px ${silo.accent}33`
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)'
        }}
      >
        {/* Left accent strip */}
        <div className="sm:w-1 w-full h-1 sm:h-auto shrink-0" style={{ background: silo.accent, borderRadius: '16px 0 0 16px' }} />

        <div className="flex flex-col sm:flex-row flex-1 gap-0">
          {/* Left: title block */}
          <div className="flex-1 p-7 sm:p-8 flex flex-col justify-between gap-5" style={{ borderRight: '1px solid rgba(0,0,0,0.06)' }}>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-[10px] font-medium tracking-[0.12em] uppercase px-2.5 py-1 rounded-full"
                  style={{ fontFamily: 'var(--font-mono)', color: silo.color, background: silo.bg, border: `1px solid ${silo.border}` }}
                >
                  {silo.label}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ fontFamily: 'var(--font-mono)', background: 'rgba(5,150,105,0.08)', color: '#059669', border: '1px solid rgba(5,150,105,0.2)' }}>
                  Destacado
                </span>
              </div>
              <h2
                className="font-display font-bold leading-tight text-ink-1 transition-colors group-hover:text-[#059669]"
                style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)' }}
              >
                {post.title}
              </h2>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[11px]" style={{ fontFamily: 'var(--font-mono)', color: '#9CA3AF' }}>{formatDate(post.created_at)}</span>
              <span className="text-xs font-medium flex items-center gap-1 transition-colors group-hover:text-[#059669]" style={{ color: '#9CA3AF' }}>
                Leer artículo
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden className="transition-transform group-hover:translate-x-0.5">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>

          {/* Right: excerpt + tags + meta */}
          <div className="sm:w-72 lg:w-80 shrink-0 p-7 sm:p-8 flex flex-col gap-4 justify-between">
            {post.excerpt && (
              <p className="text-sm leading-relaxed text-ink-2">{post.excerpt}</p>
            )}
            <div className="space-y-3">
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md" style={{ fontFamily: 'var(--font-mono)', background: 'rgba(0,0,0,0.04)', color: '#6B7280', border: '1px solid rgba(0,0,0,0.07)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <span className="text-[11px] flex items-center gap-1" style={{ fontFamily: 'var(--font-mono)', color: '#9CA3AF' }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                {post.read_time} min de lectura
              </span>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col bg-white overflow-hidden transition-all duration-200 hover:-translate-y-1"
      style={{
        border: '1px solid rgba(0,0,0,0.07)',
        borderRadius: '16px',
        boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 24px rgba(0,0,0,0.09), 0 0 0 1px ${silo.accent}22`
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)'
      }}
    >
      {/* Accent bar */}
      <div style={{ height: '3px', background: silo.accent, borderRadius: '16px 16px 0 0' }} />

      <div className="flex flex-col gap-4 p-6 flex-1">
        {/* Top meta */}
        <div className="flex items-center justify-between gap-2">
          <span
            className="text-[10px] font-medium tracking-[0.12em] uppercase px-2.5 py-1 rounded-full"
            style={{ fontFamily: 'var(--font-mono)', color: silo.color, background: silo.bg, border: `1px solid ${silo.border}` }}
          >
            {silo.label}
          </span>
          <span className="text-[11px] flex items-center gap-1 shrink-0" style={{ fontFamily: 'var(--font-mono)', color: '#9CA3AF' }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            {post.read_time} min
          </span>
        </div>

        <h2
          className="font-display font-bold leading-snug text-ink-1 transition-colors group-hover:text-[#059669]"
          style={{ fontSize: '1.0625rem' }}
        >
          {post.title}
        </h2>

        {post.excerpt && (
          <p className="text-sm leading-relaxed text-ink-2 flex-1 line-clamp-3">{post.excerpt}</p>
        )}

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md" style={{ fontFamily: 'var(--font-mono)', background: 'rgba(0,0,0,0.04)', color: '#6B7280', border: '1px solid rgba(0,0,0,0.07)' }}>
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between pt-3 mt-auto" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
          <span className="text-[11px]" style={{ fontFamily: 'var(--font-mono)', color: '#9CA3AF' }}>{formatDate(post.created_at)}</span>
          <span className="text-xs font-medium flex items-center gap-1 transition-colors group-hover:text-[#059669]" style={{ color: '#9CA3AF' }}>
            Leer
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden className="transition-transform group-hover:translate-x-0.5">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
}
