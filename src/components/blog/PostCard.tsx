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
    <article className="post-card flex flex-col gap-4 p-8 rounded-xl" style={{ background: 'rgba(255,255,255,0.7)' }}>
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
    </article>
  )
}
