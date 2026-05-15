import type { Metadata } from 'next'
import Link from 'next/link'
import { createPublicClient } from '@/lib/supabase/public'
import PostCard from '@/components/blog/PostCard'
import BlogSearch from '@/components/blog/BlogSearch'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Blog de Trading Algorítmico | RobotEdge',
  description:
    'Artículos prácticos sobre trading algorítmico, NinjaTrader, estrategias automatizadas y comparativas de plataformas.',
  openGraph: {
    title: 'Blog de Trading Algorítmico | RobotEdge',
    description: 'Artículos prácticos sobre trading algorítmico, NinjaTrader, estrategias automatizadas y comparativas.',
    type: 'website',
  },
}

const SILOS = [
  { value: '', label: 'Todas las categorías' },
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
  searchParams: Promise<{ silo?: string; q?: string; tag?: string }>
}

export default async function BlogPage({ searchParams }: Props) {
  const { silo: activeSilo = '', q = '', tag: activeTag = '' } = await searchParams

  const supabase = createPublicClient()

  // Fetch all tags for sidebar (unfiltered)
  const { data: allPosts } = await supabase
    .from('posts')
    .select('tags')
    .eq('published', true)

  const allTags = Array.from(
    new Set((allPosts ?? []).flatMap((p: { tags?: string[] }) => p.tags ?? []))
  ).sort() as string[]

  // Fetch filtered posts
  let query = supabase
    .from('posts')
    .select('id, title, slug, excerpt, silo, read_time, created_at, tags')
    .eq('published', true)
    .order('created_at', { ascending: false })

  if (activeSilo) query = query.eq('silo', activeSilo)
  if (q) query = query.or(`title.ilike.%${q}%,excerpt.ilike.%${q}%`)
  if (activeTag) query = query.contains('tags', [activeTag])

  const { data: posts } = await query
  const typedPosts = (posts ?? []) as Post[]
  const [featured, ...rest] = typedPosts

  const hasFilters = !!activeSilo || !!q || !!activeTag

  function buildTagUrl(tag: string) {
    const params = new URLSearchParams()
    if (activeSilo) params.set('silo', activeSilo)
    if (q) params.set('q', q)
    params.set('tag', activeTag === tag ? '' : tag)
    const str = params.toString().replace('tag=&', '').replace(/&?tag=$/, '').replace(/^tag=&/, '')
    return `/blog${str ? `?${str}` : ''}`
  }

  function buildSiloUrl(silo: string) {
    const params = new URLSearchParams()
    if (silo) params.set('silo', silo)
    if (q) params.set('q', q)
    if (activeTag) params.set('tag', activeTag)
    return `/blog${params.toString() ? `?${params}` : ''}`
  }

  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen pt-[64px]" style={{ background: '#F7F5F2' }}>

        {/* Page header */}
        <section className="px-6 pt-14 pb-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-6 h-px" style={{ background: '#059669' }} />
            <span className="text-xs tracking-[0.22em] uppercase" style={{ fontFamily: 'var(--font-mono)', color: '#059669' }}>
              Blog
            </span>
          </div>
          <h1 className="font-display font-bold text-ink-1 leading-tight" style={{ fontSize: 'clamp(26px, 4vw, 48px)' }}>
            Trading algorítmico, <span style={{ color: '#059669' }}>sin rodeos</span>
          </h1>
        </section>

        {/* Two-column layout */}
        <div className="px-6 pb-16 max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start">

          {/* ── Sidebar ── */}
          <aside className="w-full lg:w-64 shrink-0 lg:sticky lg:top-[88px] flex flex-col gap-7">

            {/* Search */}
            <div>
              <p className="text-[11px] font-medium tracking-[0.14em] uppercase mb-2.5" style={{ fontFamily: 'var(--font-mono)', color: '#6B7280' }}>
                Buscar
              </p>
              <BlogSearch initialQ={q} activeSilo={activeSilo} activeTag={activeTag} />
            </div>

            {/* Silo filter */}
            <div>
              <p className="text-[11px] font-medium tracking-[0.14em] uppercase mb-2.5" style={{ fontFamily: 'var(--font-mono)', color: '#6B7280' }}>
                Categoría
              </p>
              <nav className="flex flex-col gap-1" aria-label="Filtrar por categoría">
                {SILOS.map((s) => {
                  const isActive = activeSilo === s.value
                  const color = s.value ? SILO_COLORS[s.value] : '#059669'
                  return (
                    <Link
                      key={s.value}
                      href={buildSiloUrl(s.value)}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all"
                      style={{
                        background: isActive ? `${color}12` : 'transparent',
                        color: isActive ? color : '#6B7280',
                        fontWeight: isActive ? 600 : 400,
                        border: `1px solid ${isActive ? `${color}30` : 'transparent'}`,
                      }}
                    >
                      {s.value && (
                        <span className="w-2 h-2 rounded-full shrink-0" style={{ background: color }} />
                      )}
                      {s.label}
                    </Link>
                  )
                })}
              </nav>
            </div>

            {/* Tag list */}
            {allTags.length > 0 && (
              <div>
                <p className="text-[11px] font-medium tracking-[0.14em] uppercase mb-2.5" style={{ fontFamily: 'var(--font-mono)', color: '#6B7280' }}>
                  Palabras clave
                </p>
                <div className="flex flex-col gap-0.5">
                  {allTags.map((tag) => {
                    const isActive = activeTag === tag
                    return (
                      <Link
                        key={tag}
                        href={buildTagUrl(tag)}
                        className="flex items-center justify-between px-3 py-1.5 rounded-md text-xs transition-all group"
                        style={{
                          background: isActive ? 'rgba(5,150,105,0.08)' : 'transparent',
                          color: isActive ? '#059669' : '#6B7280',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: isActive ? 600 : 400,
                          border: `1px solid ${isActive ? 'rgba(5,150,105,0.2)' : 'transparent'}`,
                        }}
                      >
                        <span className="group-hover:text-ink-1 transition-colors">{tag}</span>
                        {isActive && (
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden>
                            <path d="M18 6L6 18M6 6l12 12" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" />
                          </svg>
                        )}
                      </Link>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Clear filters */}
            {hasFilters && (
              <Link
                href="/blog"
                className="text-xs text-center py-2 rounded-lg transition-colors"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: '#9CA3AF',
                  border: '1px solid rgba(0,0,0,0.08)',
                  background: 'white',
                }}
              >
                Limpiar filtros
              </Link>
            )}
          </aside>

          {/* ── Posts ── */}
          <section className="flex-1 min-w-0">
            {/* Active filter indicator */}
            {hasFilters && (
              <div className="flex items-center gap-2 mb-6 flex-wrap">
                {q && (
                  <span className="text-xs px-2.5 py-1 rounded-full" style={{ fontFamily: 'var(--font-mono)', background: 'rgba(5,150,105,0.08)', color: '#059669', border: '1px solid rgba(5,150,105,0.2)' }}>
                    "{q}"
                  </span>
                )}
                {activeSilo && (
                  <span className="text-xs px-2.5 py-1 rounded-full" style={{ fontFamily: 'var(--font-mono)', background: `${SILO_COLORS[activeSilo]}12`, color: SILO_COLORS[activeSilo], border: `1px solid ${SILO_COLORS[activeSilo]}30` }}>
                    {SILOS.find(s => s.value === activeSilo)?.label}
                  </span>
                )}
                {activeTag && (
                  <span className="text-xs px-2.5 py-1 rounded-full" style={{ fontFamily: 'var(--font-mono)', background: 'rgba(0,0,0,0.05)', color: '#374151', border: '1px solid rgba(0,0,0,0.08)' }}>
                    #{activeTag}
                  </span>
                )}
                <span className="text-xs text-ink-3" style={{ fontFamily: 'var(--font-mono)' }}>
                  {typedPosts.length} resultado{typedPosts.length !== 1 ? 's' : ''}
                </span>
              </div>
            )}

            {typedPosts.length === 0 ? (
              <div className="py-24 text-center">
                <p className="text-ink-2 text-sm mb-4">No hay artículos que coincidan con tu búsqueda.</p>
                <Link href="/blog" className="text-xs font-medium underline" style={{ color: '#059669', fontFamily: 'var(--font-mono)' }}>
                  Ver todos los artículos
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {featured && <PostCard post={featured} featured />}
                {rest.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {rest.map((post) => (
                      <PostCard key={post.id} post={post} />
                    ))}
                  </div>
                )}
              </div>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
