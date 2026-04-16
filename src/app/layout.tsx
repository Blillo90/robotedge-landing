import type { Metadata } from 'next'
import { Bricolage_Grotesque, IBM_Plex_Mono, Figtree } from 'next/font/google'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
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

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://robotedge-landing.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'RobotEdge — Academia de Trading Algorítmico',
    template: '%s | RobotEdge',
  },
  description:
    'Aprende a diseñar, hacer backtesting y desplegar estrategias de trading automatizadas. RobotEdge es una academia de trading algorítmico y cuantitativo.',
  keywords: [
    'trading algorítmico', 'bots de trading', 'automatización trading',
    'backtesting', 'trading cuantitativo', 'robots trading', 'trading sistemático',
  ],
  authors: [{ name: 'RobotEdge' }],
  openGraph: {
    type:        'website',
    siteName:    'RobotEdge',
    locale:      'es_ES',
    title:       'RobotEdge — Academia de Trading Algorítmico',
    description: 'Diseña, testea y despliega robots de trading basados en datos. Sin emociones, con resultados reproducibles.',
    url:         BASE_URL,
  },
  twitter: {
    card:        'summary_large_image',
    title:       'RobotEdge — Academia de Trading Algorítmico',
    description: 'Diseña, testea y despliega robots de trading basados en datos.',
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'RobotEdge',
  url: BASE_URL,
  description: 'Academia de trading algorítmico y cuantitativo en español.',
  inLanguage: ['es', 'en'],
  teaches: 'Algorithmic Trading, Quantitative Finance, Trading Bot Development',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${bricolage.variable} ${ibmPlexMono.variable} ${figtree.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {/* Accessibility: skip to main content */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-edge focus:text-white focus:text-sm focus:font-medium focus:rounded"
        >
          Saltar al contenido principal
        </a>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
