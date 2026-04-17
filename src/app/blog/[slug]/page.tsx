import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { getPostBySlug } from '@/lib/posts'
import { demoPosts } from '@/data/demo-posts'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return demoPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug) ?? demoPosts.find(p => p.slug === slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt ?? undefined,
  }
}

export const dynamic = 'force-dynamic'

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug) ?? demoPosts.find(p => p.slug === slug) ?? null
  if (!post) notFound()

  const publishedDate = new Date(post.created_at).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg-base" style={{ paddingTop: '60px' }}>
        <article className="max-w-2xl mx-auto px-6 py-20">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs tracking-[0.12em] uppercase text-ink-3 hover:text-ink-1 transition-colors mb-14"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            ← Volver
          </Link>

          <header className="mb-12">
            <time
              className="text-xs block mb-6 text-ink-3"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {publishedDate}
            </time>
            <h1
              className="font-display font-extrabold text-ink-1 leading-tight mb-5 tracking-tight"
              style={{ fontSize: 'clamp(26px, 4vw, 46px)' }}
            >
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="text-lg text-ink-2 leading-relaxed">
                {post.excerpt}
              </p>
            )}
          </header>

          <div
            className="pt-12"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            {/*
              Content is written by the authenticated admin only.
              HTML is rendered directly — add a sanitization library
              (e.g. DOMPurify via isomorphic-dompurify) if untrusted
              authors are ever introduced.
            */}
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
