'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-[60px]"
      style={{
        background: 'rgba(6,9,13,0.88)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span
            className="block w-1.5 h-1.5 rounded-full"
            style={{ background: '#22D3A0' }}
          />
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
            About
          </Link>
          <Link
            href="/blog"
            className="text-xs tracking-[0.14em] uppercase font-medium px-4 py-2 bg-edge hover:bg-edge-dim text-bg-base transition-colors"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Read Articles
          </Link>
        </nav>
      </div>
    </header>
  )
}
