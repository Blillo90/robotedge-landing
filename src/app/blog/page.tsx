import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PostCard from '@/components/blog/PostCard'
import { getPublishedPosts } from '@/lib/posts'
import { demoPosts } from '@/data/demo-posts'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Guías y artículos sobre trading algorítmico, finanzas cuantitativas e inversión sistemática.',
}

export const dynamic = 'force-dynamic'

export default async function BlogPage() {
  const posts = await getPublishedPosts()
  const displayPosts = posts.length > 0 ? posts : demoPosts

  const [featured, ...rest] = displayPosts

  return (
    <>
      <Navbar />
      <main className="min-h-screen" style={{ paddingTop: '60px' }}>
        <div className="max-w-6xl mx-auto px-6 py-20">

          {/* Header */}
          <div className="max-w-xl mb-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-6 h-px" style={{ background: '#148AFF' }} />
              <span
                className="text-xs tracking-[0.22em] uppercase"
                style={{ fontFamily: 'var(--font-mono)', color: '#148AFF' }}
              >
                Base de Conocimiento
              </span>
            </div>
            <h1
              className="font-display font-bold text-ink-1 leading-tight mb-4"
              style={{ fontSize: 'clamp(30px, 5vw, 52px)' }}
            >
              Guías &amp; Artículos
            </h1>
            <p className="text-ink-2">
              Investigación y análisis sobre trading algorítmico y finanzas cuantitativas.
            </p>
          </div>

          {/* Featured post */}
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="group block mb-8 rounded-2xl overflow-hidden transition-shadow hover:shadow-xl"
              style={{ background: 'rgba(255,255,255,0.72)', border: '1px solid rgba(0,0,0,0.07)' }}
            >
              <div className="grid md:grid-cols-[1fr_380px]">
                {/* Left: text */}
                <div className="p-10 flex flex-col justify-between gap-8">
                  <div>
                    <span
                      className="inline-block text-xs px-3 py-1 rounded-full mb-6 font-medium"
                      style={{ background: 'rgba(20,138,255,0.1)', color: '#148AFF', fontFamily: 'var(--font-mono)' }}
                    >
                      Artículo destacado
                    </span>
                    <h2
                      className="font-display font-bold text-ink-1 leading-snug mb-4 group-hover:text-[#148AFF] transition-colors"
                      style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}
                    >
                      {featured.title}
                    </h2>
                    {featured.excerpt && (
                      <p className="text-ink-2 leading-relaxed" style={{ maxWidth: '52ch' }}>
                        {featured.excerpt}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <time
                      className="text-xs text-ink-3"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      {new Date(featured.created_at).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                    <span
                      className="text-xs font-medium group-hover:translate-x-1 transition-transform inline-block"
                      style={{ color: '#148AFF', fontFamily: 'var(--font-mono)' }}
                    >
                      Leer artículo →
                    </span>
                  </div>
                </div>

                {/* Right: cover image or default chart */}
                <div
                  className="hidden md:flex items-center justify-center overflow-hidden"
                  style={{ background: '#0C1521', borderLeft: '1px solid rgba(255,255,255,0.06)', minHeight: 220 }}
                >
                  {featured.cover_image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={featured.cover_image}
                      alt={featured.title}
                      className="w-full h-full object-cover"
                      style={{ minHeight: 220 }}
                    />
                  ) : (
                    <div className="flex items-center justify-center p-10 w-full h-full">
                      <svg viewBox="0 0 200 160" fill="none" className="w-full max-w-[200px]" aria-hidden>
                        <defs>
                          <linearGradient id="blog-fill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#148AFF" stopOpacity="0.2"/>
                            <stop offset="100%" stopColor="#148AFF" stopOpacity="0"/>
                          </linearGradient>
                        </defs>
                        <path d="M0 130 C30 120 50 100 70 80 C85 65 90 75 110 55 C130 35 150 20 200 5 L200 160 L0 160 Z" fill="url(#blog-fill)"/>
                        <path d="M0 130 C30 120 50 100 70 80 C85 65 90 75 110 55 C130 35 150 20 200 5" stroke="#148AFF" strokeWidth="2" strokeLinecap="round"/>
                        <circle cx="200" cy="5" r="4" fill="#148AFF"/>
                        <line x1="0" y1="155" x2="200" y2="155" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
                        <line x1="0" y1="110" x2="200" y2="110" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                        <line x1="0" y1="65"  x2="200" y2="65"  stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                        <line x1="0" y1="20"  x2="200" y2="20"  stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          )}

          {/* Rest of posts */}
          {rest.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}

        </div>
      </main>
      <Footer />
    </>
  )
}
