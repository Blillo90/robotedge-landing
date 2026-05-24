import Link from 'next/link'

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#ffd600" />
          <stop offset="20%" stopColor="#ff7a00" />
          <stop offset="45%" stopColor="#ff0069" />
          <stop offset="75%" stopColor="#d300c5" />
          <stop offset="100%" stopColor="#7638fa" />
        </radialGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="6" stroke="url(#ig-grad)" strokeWidth="2" />
      <circle cx="12" cy="12" r="4.5" stroke="url(#ig-grad)" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="url(#ig-grad)" />
    </svg>
  )
}

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
            href="/guia"
            className="text-xs tracking-[0.14em] uppercase text-ink-3 hover:text-ink-1 transition-colors"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Guía
          </Link>
          <Link
            href="/#about"
            className="text-xs tracking-[0.14em] uppercase text-ink-3 hover:text-ink-1 transition-colors"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Acerca de
          </Link>
          <Link
            href="/privacidad"
            className="text-xs tracking-[0.14em] uppercase text-ink-3 hover:text-ink-1 transition-colors"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Privacidad
          </Link>
          <
            href="https://www.instagram.com/pablo.robotedge/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Pablo Llobregat — RobotEdge"
            className="text-ink-3 hover:opacity-80 transition-opacity flex items-center"
          >
            <InstagramIcon />
          </a>
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
