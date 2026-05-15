import type { Metadata } from 'next'
import Link from 'next/link'
import { createPublicClient } from '@/lib/supabase/public'
import PostCard from '@/components/blog/PostCard'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Blog de Trading Algorítmico | RobotEdge',
  description:
    'Artículos prácticos sobre trading algorítmico, NinjaTrader, estrategias automatizadas y comparativas de plataformas. Aprende a construir robots de trading con base sólida.',
  openGraph: {
    title: 'Blog de Trading Algorítmico | RobotEdge',
    description:
      'Artículos prácticos sobre trading algorítmico, NinjaTrader, estrategias automatizadas y comparativas de plataformas.',
    type: 'website',
  },
}

const SILOS = [
  { value: '', label: 'Todos' },
  { value: 'trading-algoritmico', label: 'Trading Algorítmico' },
  { value: 'ninjatrader-tecnico', label: 'NinjaTrader Técnico' },
  { value: 'comparativas', label: 'Comparativas' },
  { value: 'estrategias-reales', label: 'Estrategias Reales' },
]

const SILO_COLORS: Record<string, string> = {
  'ninjatrader-tecnico': '#059669',
  'trading-algoritmico': '#148AFF',
  comparativas: '#7C3AED',
  'estrategias-reales': '#D97706',
}

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

type Props = {
  searchParams: Promise<{ silo?: string }>
}

export default async function BlogPage({ searchParams }: Props) {
  const { silo: activeSilo = '' } = await searchParams

  const supabase = createPublicClient()
  let query = supabase
    .from('posts')
    .select('id, title, slug, excerpt, silo, read_time, created_at, tags')
    .eq('published', true)
    .order('created_at', { ascending: false })

  if (activeSilo) {
    query = query.eq('silo', activeSilo)
  }

  const { data: posts } = await query
  const typedPosts = (posts ?? []) as Post[]
  const [featured, ...rest] = typedPosts

  return (
    <>
      <Navbar />
      <main
        id="main-content"
        className="min-h-screen pt-[64px]"
        style={{ background: '#F7F5F2' }}
      >
        {/* Header */}
        <section className="px-6 pt-16 pb-12 max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-6 h-px" style={{ background: '#059669' }} />
            <span
              className="text-xs tracking-[0.22em] uppercase"
              style={{ fontFamily: 'var(--font-mono)', color: '#059669' }}
            >
              Blog
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1
                className="font-display font-bold text-ink-1 leading-tight mb-3"
                style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
              >
                Trading algorítmico,{' '}
                <span style={{ color: '#059669' }}>sin rodeos</span>
              </h1>
              <p className="text-ink-2 leading-relaxed" style={{ maxWidth: '50ch' }}>
                Guías, comparativas y estrategias reales. Todo lo que necesitas para
                pasar del trading emocional a operar con sistemas.
              </p>
            </div>
            {typedPosts.length > 0 && (
              <div
                className="shrink-0 px-5 py-3 rounded-xl text-center"
                style={{ background: 'rgba(5,150,105,0.07)', border: '1px solid rgba(5,150,105,0.15)' }}
              >
                <p
                  className="text-2xl font-bold font-display"
                  style={{ color: '#059669' }}
                >
                  {typedPosts.length}
                </p>
                <p className="text-xs text-ink-2" style={{ fontFamily: 'var(--font-mono)' }}>
                  artículos
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Silo tabs */}
        <nav
          className="sticky top-[64px] z-30 px-6 py-3"
          style={{
            background: 'rgba(247,245,242,0.96)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderBottom: '1px solid rgba(0,0,0,0.07)',
          }}
          aria-label="Filtrar por categoría"
        >
          <div className="max-w-6xl mx-auto flex items-center gap-2 overflow-x-auto pb-0.5">
            {SILOS.map((s) => {
              const isActive = activeSilo === s.value
              const color = s.value ? SILO_COLORS[s.value] : '#059669'
              return (
                <Link
                  key={s.value}
                  href={s.value ? `/blog?silo=${s.value}` : '/blog'}
                  className="shrink-0 px-4 py-1.5 rounded-full text-xs font-medium transition-all"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    background: isActive ? color : 'white',
                    color: isActive ? '#fff' : '#6B7280',
                    border: `1px solid ${isActive ? color : 'rgba(0,0,0,0.09)'}`,
                    boxShadow: isActive ? `0 2px 8px ${color}33` : 'none',
                  }}
                >
                  {s.label}
                </Link>
              )
            })}
          </div>
        </nav>

        {/* Posts */}
        <section className="px-6 py-12 max-w-6xl mx-auto">
          {typedPosts.length === 0 ? (
            <div className="py-24 text-center">
              <p className="text-ink-2 text-sm">No hay artículos en esta categoría todavía.</p>
              <Link
                href="/blog"
                className="mt-4 inline-block text-xs font-medium underline"
                style={{ color: '#059669', fontFamily: 'var(--font-mono)' }}
              >
                Ver todos los artículos
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Featured post */}
              {featured && (
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                  <div className="lg:col-span-3">
                    <PostCard post={featured} featured />
                  </div>
                  {/* Side: next 2 posts */}
                  <div className="lg:col-span-2 flex flex-col gap-6">
                    {rest.slice(0, 2).map((post) => (
                      <PostCard key={post.id} post={post} />
                    ))}
                  </div>
                </div>
              )}

              {/* Remaining posts grid */}
              {rest.length > 2 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rest.slice(2).map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>
              )}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  )
}
