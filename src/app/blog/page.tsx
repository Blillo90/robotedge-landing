import type { Metadata } from 'next'
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

export const revalidate = 60

export default async function BlogPage() {
  const posts = await getPublishedPosts()
  const displayPosts = posts.length > 0 ? posts : demoPosts

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg-base" style={{ paddingTop: '60px' }}>
        <div className="max-w-6xl mx-auto px-6 py-20">

          <div className="max-w-xl mb-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-6 h-px bg-edge" />
              <span
                className="text-xs tracking-[0.22em] uppercase text-edge"
                style={{ fontFamily: 'var(--font-mono)' }}
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
              Investigación y análisis sobre trading algorítmico y finanzas
              cuantitativas.
            </p>
          </div>

          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-px"
            style={{ background: 'rgba(0,0,0,0.07)' }}
          >
            {displayPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
