import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="px-6 py-10"
      style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="block w-1.5 h-1.5 rounded-full bg-edge" />
          <span
            className="text-xs tracking-[0.22em] uppercase text-ink-1 group-hover:text-edge transition-colors"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            RobotEdge
          </span>
        </Link>

        <nav className="flex items-center gap-8">
          <Link
            href="/blog"
            className="text-xs tracking-[0.14em] uppercase text-ink-3 hover:text-ink-1 transition-colors"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Blog
          </Link>
          <Link
            href="/#about"
            className="text-xs tracking-[0.14em] uppercase text-ink-3 hover:text-ink-1 transition-colors"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Acerca de
          </Link>
        </nav>

        <p
          className="text-xs text-ink-3"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          &copy; {year} RobotEdge. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
