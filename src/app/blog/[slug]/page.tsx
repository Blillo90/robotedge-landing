import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { createPublicClient } from '@/lib/supabase/public'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

type Post = {
  id: string
  title: string
  slug: string
  excerpt: string | null
  content: string
  silo: string
  read_time: number
  created_at: string
  updated_at: string
}

const SILO_LABELS: Record<string, string> = {
  'ninjatrader-tecnico': 'NinjaTrader Técnico',
  'trading-algoritmico': 'Trading Algorítmico',
  comparativas: 'Comparativas',
  'estrategias-reales': 'Estrategias Reales',
}

type Props = { params: Promise<{ slug: string }> }

async function getPost(slug: string): Promise<Post | null> {
  const supabase = createPublicClient()
  const { data } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single()
  return (data as Post) ?? null
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return {}
  return {
    title: `${post.title} | RobotEdge`,
    description: post.excerpt ?? undefined,
    openGraph: {
      title: post.title,
      description: post.excerpt ?? undefined,
      type: 'article',
      publishedTime: post.created_at,
      modifiedTime: post.updated_at,
    },
  }
}

function stripLeadingH1(html: string): string {
  return html.replace(/<h1[^>]*>[\s\S]*?<\/h1>/, '').trimStart()
}

function hasFaqs(html: string): boolean {
  return /<h[23][^>]*>.*?(¿|preguntas frecuentes)/i.test(html)
}

function buildArticleJsonLd(post: Post): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt ?? undefined,
    datePublished: post.created_at,
    dateModified: post.updated_at,
    author: {
      '@type': 'Person',
      name: 'Pablo Llobregat',
    },
    publisher: {
      '@type': 'Organization',
      name: 'RobotEdge',
    },
  })
}

function buildFaqJsonLd(post: Post): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    name: post.title,
  })
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  const siloLabel = SILO_LABELS[post.silo] ?? post.silo
  const withFaqs = hasFaqs(post.content)

  return (
    <>
      <Navbar />
      <main
        id="main-content"
        className="min-h-screen pt-[64px]"
        style={{ background: '#F7F5F2' }}
      >
        {/* Article JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: buildArticleJsonLd(post) }}
        />
        {/* FAQPage JSON-LD */}
        {withFaqs && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: buildFaqJsonLd(post) }}
          />
        )}

        {/* Article header */}
        <header className="px-6 pt-14 pb-10 max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs mb-8 transition-colors hover:text-[#059669]"
            style={{ fontFamily: 'var(--font-mono)', color: '#6B7280' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M19 12H5M5 12l7 7M5 12l7-7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Volver al blog
          </Link>

          {/* Silo + read time */}
          <div className="flex items-center gap-3 mb-5">
            <span
              className="text-[10px] font-medium tracking-[0.12em] uppercase px-2.5 py-1 rounded-full"
              style={{
                fontFamily: 'var(--font-mono)',
                background: 'rgba(5,150,105,0.08)',
                color: '#059669',
                border: '1px solid rgba(5,150,105,0.2)',
              }}
            >
              {siloLabel}
            </span>
            <span
              className="text-xs flex items-center gap-1"
              style={{ fontFamily: 'var(--font-mono)', color: '#6B7280' }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M12 6v6l4 2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              {post.read_time} min de lectura
            </span>
          </div>

          <h1
            className="font-display font-bold text-ink-1 leading-tight mb-4"
            style={{ fontSize: 'clamp(26px, 4vw, 44px)' }}
          >
            {post.title}
          </h1>

          {post.excerpt && (
            <p
              className="text-ink-2 leading-relaxed mb-6"
              style={{ fontSize: '1.125rem', maxWidth: '58ch' }}
            >
              {post.excerpt}
            </p>
          )}

          <p
            className="text-xs"
            style={{ fontFamily: 'var(--font-mono)', color: '#9CA3AF' }}
          >
            Publicado el {formatDate(post.created_at)}
            {post.updated_at !== post.created_at && (
              <> · Actualizado el {formatDate(post.updated_at)}</>
            )}
          </p>
        </header>

        {/* Divider */}
        <div className="max-w-3xl mx-auto px-6">
          <div style={{ height: '1px', background: 'rgba(0,0,0,0.07)' }} />
        </div>

        {/* Article body */}
        <article
          className="px-6 py-12 max-w-3xl mx-auto prose prose-stone prose-headings:font-display prose-headings:font-bold prose-headings:text-ink-1 prose-h2:text-2xl prose-h3:text-xl prose-p:text-ink-2 prose-p:leading-relaxed prose-a:text-[#059669] prose-a:no-underline hover:prose-a:underline prose-strong:text-ink-1 prose-table:text-sm prose-th:bg-bg-elevated prose-th:text-ink-1 prose-td:text-ink-2 prose-li:text-ink-2"
          dangerouslySetInnerHTML={{ __html: stripLeadingH1(post.content) }}
        />

        {/* Bottom nav */}
        <div className="px-6 pb-16 max-w-3xl mx-auto">
          <div
            className="flex items-center justify-between pt-8"
            style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-[#059669] text-ink-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M19 12H5M5 12l7 7M5 12l7-7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Todos los artículos
            </Link>
            <Link
              href="/#guia-gratuita"
              className="text-sm font-medium px-5 py-2.5 rounded-lg text-white transition-colors"
              style={{ background: '#059669' }}
            >
              Empezar el curso →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
