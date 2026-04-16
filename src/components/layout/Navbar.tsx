'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-[60px] bg-bg-base/90"
      style={{
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(0,0,0,0.07)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="block w-1.5 h-1.5 rounded-full bg-edge" />
          <span
            className="text-xs tracking-[0.22em] uppercase font-medium text-ink-1 group-hover:text-edge transition-colors"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            RobotEdge
          </span>
        </Link>

        {/* Nav links */}
        <nav className="flex items-center gap-7">
          <Link
            href="/blog"
            className="text-xs tracking-[0.14em] uppercase text-ink-2 hover:text-ink-1 transition-colors"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Blog
          </Link>
          <Link
            href={pathname === '/' ? '#about' : '/#about'}
            className="text-xs tracking-[0.14em] uppercase text-ink-2 hover:text-ink-1 transition-colors"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Acerca de
          </Link>
          <Link
            href="/blog"
            className="text-xs tracking-[0.14em] uppercase font-medium px-4 py-2 bg-ink-1 hover:bg-ink-2 text-bg-surface transition-colors"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Leer Artículos
          </Link>
        </nav>
      </div>
    </header>
  )
}
