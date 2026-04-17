import Link from 'next/link'
import type { Post } from '@/types'

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="post-card flex flex-col rounded-xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.7)' }}>
      {/* Cover image */}
      <div
        className="w-full flex items-center justify-center overflow-hidden"
        style={{ height: 140, background: '#0C1521', flexShrink: 0 }}
      >
        {post.cover_image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.cover_image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <svg viewBox="0 0 200 100" fill="none" className="w-[140px]" aria-hidden>
            <defs>
              <linearGradient id={`card-fill-${post.id}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#148AFF" stopOpacity="0.18"/>
                <stop offset="100%" stopColor="#148AFF" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M0 85 C30 75 50 60 70 45 C90 30 110 35 130 22 C155 8 175 3 200 1 L200 100 L0 100 Z" fill={`url(#card-fill-${post.id})`}/>
            <path d="M0 85 C30 75 50 60 70 45 C90 30 110 35 130 22 C155 8 175 3 200 1" stroke="#148AFF" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="200" cy="1" r="3" fill="#148AFF"/>
          </svg>
        )}
      </div>
      <div className="flex flex-col gap-4 p-7">
      <div className="post-bar w-full h-px" />
      <time
        className="text-xs tabular-nums text-ink-3"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        {formatDate(post.created_at)}
      </time>
      <h2 className="post-title text-base font-semibold leading-snug font-display">
        <Link href={`/blog/${post.slug}`}>
          {post.title}
        </Link>
      </h2>
      {post.excerpt && (
        <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
      )}
      <Link
        href={`/blog/${post.slug}`}
        className="post-read mt-auto pt-1 text-xs font-medium"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        Leer artículo →
      </Link>
      </div>
    </article>
  )
}
