import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PostCard from '@/components/blog/PostCard'
import { getPublishedPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Articles on algorithmic trading, quantitative finance, and systematic investing.',
}

export const revalidate = 60

export default async function BlogPage() {
  const posts = await getPublishedPosts()

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
                Knowledge Base
              </span>
            </div>
            <h1
              className="font-display font-bold text-ink-1 leading-tight mb-4"
              style={{ fontSize: 'clamp(30px, 5vw, 52px)' }}
            >
              Guides &amp; Articles
            </h1>
            <p className="text-ink-2">
              Research and commentary on algorithmic trading and quantitative
              finance.
            </p>
          </div>

          {posts.length === 0 ? (
            <div
              className="py-16 text-center bg-bg-surface"
              style={{ border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <p
                className="text-sm text-ink-3"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                No articles published yet.
              </p>
            </div>
          ) : (
            <div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-px"
              style={{ background: 'rgba(255,255,255,0.07)' }}
            >
              {posts.map((post) => (
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
