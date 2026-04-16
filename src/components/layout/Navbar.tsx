'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const pathname  = usePathname()
  const [open, setOpen] = useState(false)

  // Close on route change
  useEffect(() => { setOpen(false) }, [pathname])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const aboutHref = pathname === '/' ? '#about' : '/#about'

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: open ? '#F7F5F2' : 'rgba(247,245,242,0.92)',
        backdropFilter: open ? 'none' : 'blur(16px)',
        WebkitBackdropFilter: open ? 'none' : 'blur(16px)',
        borderBottom: '1px solid rgba(0,0,0,0.07)',
      }}
    >
      {/* Top bar */}
      <div className="max-w-6xl mx-auto px-6 h-[60px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="RobotEdge — inicio">
          {/* Icon */}
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden>
            <rect width="30" height="30" rx="7" fill="#0C1521"/>
            <path d="M7 18 L11 13 L15 15.5 L22 8" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="22" cy="8" r="2" fill="#10B981"/>
            <circle cx="7" cy="18" r="1.5" fill="#10B981" fillOpacity="0.4"/>
            <line x1="7" y1="22" x2="23" y2="22" stroke="#10B981" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="2 2"/>
          </svg>
          {/* Text */}
          <span className="font-display font-bold text-sm tracking-tight leading-none">
            <span className="text-ink-1">Robot</span><span style={{ color: '#148AFF' }}>Edge</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Navegación principal">
          <Link
            href={aboutHref}
            className="text-xs tracking-[0.14em] uppercase text-ink-2 hover:text-ink-1 transition-colors"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Acerca de
          </Link>
          <Link
            href="/blog"
            className="text-xs tracking-[0.14em] uppercase font-medium px-4 py-2 text-white transition-colors rounded-lg"
            style={{ background: '#148AFF', fontFamily: 'var(--font-mono)' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#0E6FD4')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#148AFF')}
          >
            Leer Artículos
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 text-ink-1 hover:text-edge transition-colors"
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
          className="md:hidden px-6 pb-8 pt-4 flex flex-col gap-1"
          style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}
          aria-label="Menú móvil"
        >
          <Link
            href={aboutHref}
            className="py-3.5 text-sm font-medium text-ink-1 hover:text-edge transition-colors"
            style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}
          >
            Acerca de
          </Link>
          <div className="pt-4">
            <Link
              href="/blog"
              className="block text-center text-sm font-medium py-3 px-6 bg-edge hover:bg-edge-dim text-white transition-colors"
            >
              Leer Artículos →
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
