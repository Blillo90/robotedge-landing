import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/landing/Hero'
import MetricsStrip from '@/components/landing/MetricsStrip'
import Features from '@/components/landing/Features'
import About from '@/components/landing/About'
import BlogCTA from '@/components/landing/BlogCTA'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MetricsStrip />
        <Features />
        <About />
        <BlogCTA />
      </main>
      <Footer />
    </>
  )
}
