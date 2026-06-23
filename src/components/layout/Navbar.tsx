'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Curso',       href: '/#curso' },
  { label: 'Método',      href: '/#metodo' },
  { label: 'Tu rentabilidad esperada', href: '/calculadora' },
  { label: 'Blog',        href: '/blog' },
  { label: 'Acerca de',   href: '/#about' },
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

  // On the homepage, anchor links like /#curso become #curso.
  // Absolute links like /blog are always kept as-is.
  const resolvedLinks = navLinks.map((l) => ({
    ...l,
    href: pathname === '/' && l.href.startsWith('/#') ? l.href.slice(1) : l.href,
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
        <Link href="/" className="flex items-center shrink-0" aria-label="RobotEdge — inicio">
          <Image
            src="/logos/LOGO_3BLACK.png"
            alt="RobotEdge"
            width={160}
            height={50}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2 flex-1" aria-label="Navegación principal">
          <Link
            href="/guia"
            className="text-xs tracking-[0.14em] uppercase px-4 py-2 rounded-lg text-white transition-colors"
            style={{ fontFamily: 'var(--font-mono)', background: '#148AFF' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#0E6FD4')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#148AFF')}
          >
            Guía
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
              href="/guia"
              className="block text-center text-sm font-medium py-3 px-6 rounded-xl text-white"
              style={{ background: '#148AFF', fontFamily: 'var(--font-mono)' }}
            >
              Guía
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
