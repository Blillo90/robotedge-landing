import type { Metadata } from 'next'
import { Bricolage_Grotesque, IBM_Plex_Mono, Figtree } from 'next/font/google'
import Script from 'next/script'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
import CookieBanner from '@/components/ui/CookieBanner'
import { GoogleTagManagerScript, GoogleTagManagerNoScript } from '@/components/analytics/GoogleTagManager'
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

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://robotedge.es'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Curso de Trading Algorítmico | Aprende a crear robots de trading | RobotEdge',
    template: '%s | RobotEdge',
  },
  description:
    'Aprende a diseñar, hacer backtesting y desplegar estrategias de trading automatizadas. RobotEdge es una academia de trading algorítmico y cuantitativo.',
  keywords: [
    'trading algorítmico', 'bots de trading', 'automatización trading',
    'backtesting', 'trading cuantitativo', 'robots trading', 'trading sistemático',
    'NinjaTrader', 'NinjaScript', 'curso trading algorítmico',
  ],
  authors: [{ name: 'Pablo Llobregat' }],
  openGraph: {
    type:        'website',
    siteName:    'RobotEdge',
    locale:      'es_ES',
    title:       'Curso de Trading Algorítmico con NinjaTrader | RobotEdge',
    description: 'Diseña, testea y despliega robots de trading basados en datos. Sin emociones, con resultados reproducibles.',
    url:         BASE_URL,
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'RobotEdge — Curso de Trading Algorítmico con NinjaTrader' }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Curso de Trading Algorítmico con NinjaTrader | RobotEdge',
    description: 'Diseña, testea y despliega robots de trading basados en datos.',
    images:      ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: { index: true, follow: true },
}

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'RobotEdge',
  url: 'https://robotedge.es',
  description: 'Academia de trading algorítmico y cuantitativo en español. Especializada en NinjaTrader 8 y NinjaScript.',
  inLanguage: ['es', 'en'],
  teaches: 'Algorithmic Trading, Quantitative Finance, Trading Bot Development, NinjaTrader, NinjaScript',
  sameAs: ['https://www.instagram.com/pablo.robotedge/'],
}

const courseJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Curso de Trading Algorítmico con NinjaTrader',
  description: 'Aprende a diseñar, hacer backtesting y desplegar estrategias de trading automatizadas con NinjaTrader 8. Sin experiencia previa en programación.',
  url: 'https://robotedge.es',
  provider: { '@type': 'Organization', name: 'RobotEdge', url: 'https://robotedge.es' },
  instructor: { '@type': 'Person', name: 'Pablo Llobregat', jobTitle: 'Trader Algorítmico e Ingeniero de Datos' },
  teaches: ['Trading algorítmico', 'NinjaTrader 8', 'NinjaScript', 'Backtesting', 'Automatización de estrategias', 'Gestión de riesgo', 'Robots de trading'],
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: 'online',
    inLanguage: 'es',
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Pablo Llobregat',
  jobTitle: 'Trader Algorítmico e Ingeniero de Datos',
  url: 'https://robotedge.es',
  worksFor: { '@type': 'Organization', name: 'RobotEdge' },
  knowsAbout: ['Trading algorítmico', 'NinjaTrader 8', 'NinjaScript', 'Backtesting', 'Futuros CME', 'Gestión de riesgo'],
  sameAs: ['https://www.instagram.com/pablo.robotedge/'],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '¿Necesito saber programar para hacer trading algorítmico?', acceptedAnswer: { '@type': 'Answer', text: 'No es necesario tener experiencia previa en programación. NinjaTrader 8 incluye un Strategy Builder visual que permite crear algoritmos sin código. El curso enseña NinjaScript (basado en C#) desde cero para quien quiera ir más lejos.' } },
    { '@type': 'Question', name: '¿Qué es el trading algorítmico?', acceptedAnswer: { '@type': 'Answer', text: 'El trading algorítmico es la automatización de estrategias de inversión mediante código. Un robot ejecuta operaciones en mercados como futuros NQ (Nasdaq), ES (S&P 500) o GC (Gold) siguiendo reglas matemáticas sin intervención emocional.' } },
    { '@type': 'Question', name: '¿Cuánto tiempo necesito para tener un sistema operativo?', acceptedAnswer: { '@type': 'Answer', text: 'La hoja de ruta realista: primeras 4 semanas para fundamentos; semanas 4–8 para diseñar y backtestear tu primera estrategia en NinjaTrader 8; semanas 8–12 para optimización y despliegue. A partir del mes 3, con dedicación consistente, puedes tener tu primer robot operando en cuenta real.' } },
    { '@type': 'Question', name: '¿Cuánto capital necesito para empezar?', acceptedAnswer: { '@type': 'Answer', text: 'NinjaTrader 8 es gratuito para backtesting y paper trading ilimitado. Para operar en vivo con micro-contratos CME (MNQ, MES), el capital mínimo recomendado es de 500–1.000 €. Los brokers compatibles incluyen Interactive Brokers, NinjaTrader Brokerage y Dorman Trading.' } },
    { '@type': 'Question', name: '¿Qué mercados puedo operar con sistemas algorítmicos en NinjaTrader?', acceptedAnswer: { '@type': 'Answer', text: 'NinjaTrader 8 permite operar futuros del CME como NQ (Nasdaq-100), ES (S&P 500), GC (Gold), NKD (Nikkei 225) y 6E (EUR/USD), además de forex y criptomonedas. El curso se centra en futuros por su liquidez y transparencia en datos de backtesting.' } },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${bricolage.variable} ${ibmPlexMono.variable} ${figtree.variable}`}>
      <body className="antialiased">
        <GoogleTagManagerNoScript />
        {/* Accessibility: skip to main content */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-edge focus:text-white focus:text-sm focus:font-medium focus:rounded"
        >
          Saltar al contenido principal
        </a>
        <GoogleAnalytics />
        <GoogleTagManagerScript />
        {children}
        <CookieBanner />
        <Script
          id="schema-geo-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Script
          id="schema-geo-course"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
        />
        <Script
          id="schema-geo-person"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Script
          id="schema-geo-faq"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </body>
    </html>
  )
}
