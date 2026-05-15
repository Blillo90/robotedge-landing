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

type Post = {
  id: string
  title: string
  slug: string
  excerpt: string | null
  silo: string
  read_time: number
  created_at: string
}

type Props = {
  searchParams: Promise<{ silo?: string }>
}

export default async function BlogPage({ searchParams }: Props) {
  const { silo: activeSilo = '' } = await searchParams

  const supabase = createPublicClient()
  let query = supabase
    .from('posts')
    .select('id, title, slug, excerpt, silo, read_time, created_at')
    .eq('published', true)
    .order('created_at', { ascending: false })

  if (activeSilo) {
    query = query.eq('silo', activeSilo)
  }

  const { data: posts } = await query
  const typedPosts = (posts ?? []) as Post[]

  return (
    <>
      <Navbar />
      <main
        id="main-content"
        className="min-h-screen pt-[64px]"
        style={{ background: '#F7F5F2' }}
      >
        {/* Header */}
        <section className="px-6 pt-16 pb-10 max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-6 h-px" style={{ background: '#059669' }} />
            <span
              className="text-xs tracking-[0.22em] uppercase"
              style={{ fontFamily: 'var(--font-mono)', color: '#059669' }}
            >
              Blog
            </span>
          </div>
          <h1
            className="font-display font-bold text-ink-1 leading-tight mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
          >
            Trading algorítmico,{' '}
            <span style={{ color: '#059669' }}>explicado sin rodeos</span>
          </h1>
          <p className="text-ink-2 leading-relaxed" style={{ maxWidth: '54ch' }}>
            Artículos prácticos sobre NinjaTrader, estrategias automatizadas, backtesting
            y todo lo que necesitas para operar con sistemas en lugar de emociones.
          </p>
        </section>

        {/* Silo tabs */}
        <nav
          className="sticky top-[64px] z-30 px-6 py-3"
          style={{
            background: 'rgba(247,245,242,0.95)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(0,0,0,0.07)',
          }}
          aria-label="Filtrar por categoría"
        >
          <div className="max-w-6xl mx-auto flex items-center gap-2 overflow-x-auto">
            {SILOS.map((s) => {
              const isActive = activeSilo === s.value
              return (
                <Link
                  key={s.value}
                  href={s.value ? `/blog?silo=${s.value}` : '/blog'}
                  className="shrink-0 px-4 py-1.5 rounded-full text-xs font-medium transition-colors"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    background: isActive ? '#059669' : 'rgba(0,0,0,0.05)',
                    color: isActive ? '#fff' : '#4B5563',
                    border: isActive ? '1px solid #059669' : '1px solid transparent',
                  }}
                >
                  {s.label}
                </Link>
              )
            })}
          </div>
        </nav>

        {/* Posts grid */}
        <section className="px-6 py-12 max-w-6xl mx-auto">
          {typedPosts.length === 0 ? (
            <p className="text-ink-2 text-sm py-16 text-center">
              No hay artículos en esta categoría todavía.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {typedPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  )
}
