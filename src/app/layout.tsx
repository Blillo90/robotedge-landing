import type { Metadata } from 'next'
import { Syne, IBM_Plex_Mono, Figtree } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-syne',
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
    default: 'RobotEdge — Algorithmic Trading Academy',
    template: '%s | RobotEdge',
  },
  description:
    'Learn to design, backtest, and deploy automated trading strategies. RobotEdge is a trading academy for algorithmic and quantitative trading.',
  openGraph: {
    type: 'website',
    siteName: 'RobotEdge',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${ibmPlexMono.variable} ${figtree.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
