import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/landing/Hero'
import MetricsStrip from '@/components/landing/MetricsStrip'
import Features from '@/components/landing/Features'
import Testimonials from '@/components/landing/Testimonials'
import About from '@/components/landing/About'
import LeadForm from '@/components/landing/LeadForm'
import BlogCTA from '@/components/landing/BlogCTA'
import FAQ from '@/components/landing/FAQ'
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <MetricsStrip />
        <Features />
        <Testimonials />
        <About />
        <FAQ />
        <LeadForm />
        <BlogCTA />
      </main>
      <Footer />
    </>
  )
}
