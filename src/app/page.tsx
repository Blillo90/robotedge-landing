import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/landing/Hero'
import Problem from '@/components/landing/Problem'
import Bridge from '@/components/landing/Bridge'
import Features from '@/components/landing/Features'
import WhoIsFor from '@/components/landing/WhoIsFor'
import MetricsStrip from '@/components/landing/MetricsStrip'
import BeforeAfter from '@/components/landing/BeforeAfter'
import HowItWorks from '@/components/landing/HowItWorks'
import Testimonials from '@/components/landing/Testimonials'
import About from '@/components/landing/About'
import Objections from '@/components/landing/Objections'
import FAQ from '@/components/landing/FAQ'
import LeadForm from '@/components/landing/LeadForm'
import GuiaCTA from '@/components/landing/GuiaCTA'
import GuiaBanner from '@/components/landing/GuiaBanner'
import Glossary from '@/components/landing/Glossary'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <GuiaBanner />
        <Problem />
        <Bridge />
        <Features />
        <WhoIsFor />
        <MetricsStrip />
        <BeforeAfter />
        <HowItWorks />
        <Testimonials />
        <About />
        <Objections />
        <FAQ />
        <LeadForm />
        <Glossary />
        <GuiaCTA />
      </main>
      <Footer />
    </>
  )
}
