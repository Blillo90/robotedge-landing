'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Curso',     href: '/#curso' },
  { label: 'Acerca de', href: '/#about' },
  { label: 'FAQ',       href: '/#faq' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // On inner pages (blog, etc.) anchor links go back to home
  const resolvedLinks = navLinks.map((l) => ({
    ...l,
    href: pathname === '/' ? l.href.replace('/', '') : l.href,
  }))

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-300"
      style={{
        background: open ? '#F7F5F2' : 'rgba(247,245,242,0.94)',
        backdropFilter: open ? 'none' : 'blur(18px)',
        WebkitBackdropFilter: open ? 'none' : 'blur(18px)',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        boxShadow: scrolled && !open ? '0 1px 18px rgba(0,0,0,0.06)' : 'none',
      }}
    >
      {/* Top bar */}
      <div className="max-w-6xl mx-auto px-6 h-[64px] flex items-center justify-between gap-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="RobotEdge — inicio">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden>
            <rect width="30" height="30" rx="7" fill="#0C1521"/>
            <path d="M7 18 L11 13 L15 15.5 L22 8" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="22" cy="8" r="2" fill="#10B981"/>
            <circle cx="7" cy="18" r="1.5" fill="#10B981" fillOpacity="0.4"/>
            <line x1="7" y1="22" x2="23" y2="22" stroke="#10B981" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="2 2"/>
          </svg>
          <span className="font-display font-bold text-sm tracking-tight leading-none">
            <span className="text-ink-1">Robot</span><span style={{ color: '#148AFF' }}>Edge</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2 flex-1" aria-label="Navegación principal">
          <Link
            href="/blog"
            className="text-xs tracking-[0.14em] uppercase px-4 py-2 rounded-lg text-white transition-colors"
            style={{ fontFamily: 'var(--font-mono)', background: '#148AFF' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#0E6FD4')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#148AFF')}
          >
            Blog
          </Link>
          {resolvedLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="px-4 py-2 text-xs tracking-[0.14em] uppercase text-ink-2 hover:text-ink-1 transition-colors rounded-lg hover:bg-black/[0.04]"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center shrink-0">
          <Link
            href="/#guia-gratuita"
            className="text-xs tracking-[0.14em] uppercase px-4 py-2 rounded-lg text-white transition-colors"
            style={{ fontFamily: 'var(--font-mono)', background: '#148AFF' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#0E6FD4')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#148AFF')}
          >
            Empezar →
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 text-ink-1 transition-colors rounded-lg hover:bg-black/[0.05]"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="md:hidden px-6 pb-8 pt-2 flex flex-col"
          style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}
          aria-label="Menú móvil"
        >
          {resolvedLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="py-3.5 text-sm font-medium text-ink-1 hover:text-[#148AFF] transition-colors"
              style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}
            >
              {l.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-5">
            <Link
              href="/blog"
              className="block text-center text-sm font-medium py-3 px-6 rounded-xl text-white"
              style={{ background: '#148AFF', fontFamily: 'var(--font-mono)' }}
            >
              Blog
            </Link>
            <Link
              href="/#guia-gratuita"
              className="block text-center text-sm font-medium py-3 px-6 rounded-xl"
              style={{ background: '#148AFF', fontFamily: 'var(--font-mono)' }}
            >
              Empezar →
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
