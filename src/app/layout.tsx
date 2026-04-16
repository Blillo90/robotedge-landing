import type { Metadata } from 'next'
import { Bricolage_Grotesque, IBM_Plex_Mono, Figtree } from 'next/font/google'
import './globals.css'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-figtree',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3001'),
  title: {
    default: 'RobotEdge — Academia de Trading Algorítmico',
    template: '%s | RobotEdge',
  },
  description:
    'Aprende a diseñar, hacer backtesting y desplegar estrategias de trading automatizadas. RobotEdge es una academia de trading algorítmico y cuantitativo.',
  openGraph: {
    type: 'website',
    siteName: 'RobotEdge',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${bricolage.variable} ${ibmPlexMono.variable} ${figtree.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
