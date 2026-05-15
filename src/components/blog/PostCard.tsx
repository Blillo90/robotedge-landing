import Link from 'next/link'

type Post = {
  id: string
  title: string
  slug: string
  excerpt: string | null
  silo: string
  read_time: number
  created_at: string
}

const SILO_CONFIG: Record<string, { label: string; color: string; bg: string; border: string }> = {
  'ninjatrader-tecnico': {
    label: 'NinjaTrader Técnico',
    color: '#059669',
    bg: 'rgba(5,150,105,0.08)',
    border: 'rgba(5,150,105,0.2)',
  },
  'trading-algoritmico': {
    label: 'Trading Algorítmico',
    color: '#148AFF',
    bg: 'rgba(20,138,255,0.08)',
    border: 'rgba(20,138,255,0.2)',
  },
  comparativas: {
    label: 'Comparativas',
    color: '#7C3AED',
    bg: 'rgba(124,58,237,0.08)',
    border: 'rgba(124,58,237,0.2)',
  },
  'estrategias-reales': {
    label: 'Estrategias Reales',
    color: '#D97706',
    bg: 'rgba(217,119,6,0.08)',
    border: 'rgba(217,119,6,0.2)',
  },
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  const silo = SILO_CONFIG[post.silo] ?? {
    label: post.silo,
    color: '#059669',
    bg: 'rgba(5,150,105,0.08)',
    border: 'rgba(5,150,105,0.2)',
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col bg-white rounded-xl overflow-hidden transition-shadow hover:shadow-md"
      style={{ border: '1px solid rgba(0,0,0,0.07)' }}
    >
      <div className="flex flex-col gap-4 p-6 flex-1">
        {/* Silo badge */}
        <span
          className="self-start text-[10px] font-medium tracking-[0.12em] uppercase px-2.5 py-1 rounded-full"
          style={{
            fontFamily: 'var(--font-mono)',
            color: silo.color,
            background: silo.bg,
            border: `1px solid ${silo.border}`,
          }}
        >
          {silo.label}
        </span>

        {/* Title */}
        <h2
          className="font-display font-semibold leading-snug text-ink-1 group-hover:text-[#059669] transition-colors"
          style={{ fontSize: '1.0625rem' }}
        >
          {post.title}
        </h2>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-sm leading-relaxed text-ink-2 flex-1">{post.excerpt}</p>
        )}

        {/* Footer meta */}
        <div
          className="flex items-center justify-between pt-4 mt-auto"
          style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}
        >
          <span
            className="text-xs"
            style={{ fontFamily: 'var(--font-mono)', color: '#6B7280' }}
          >
            {formatDate(post.created_at)}
          </span>
          <span
            className="text-xs flex items-center gap-1"
            style={{ fontFamily: 'var(--font-mono)', color: '#6B7280' }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            {post.read_time} min
          </span>
        </div>
      </div>
    </Link>
  )
}
