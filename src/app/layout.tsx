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
    default: 'Curso de Trading Algorítmico | Aprende a crear robots de trading | RobotEdge',
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

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'RobotEdge',
  url: BASE_URL,
  description: 'Academia de trading algorítmico y cuantitativo en español.',
  inLanguage: ['es', 'en'],
  teaches: 'Algorithmic Trading, Quantitative Finance, Trading Bot Development',
}

const courseJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'RobotEdge — Curso de Trading Algorítmico',
  description: 'Aprende a diseñar, hacer backtesting y desplegar estrategias de trading automatizadas. Sin experiencia previa en programación.',
  provider: { '@type': 'Organization', name: 'RobotEdge', url: BASE_URL },
  teaches: ['Trading algorítmico', 'Backtesting', 'Automatización de estrategias', 'Gestión de riesgo', 'Robots de trading'],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '¿Necesito saber programar para hacer esto?', acceptedAnswer: { '@type': 'Answer', text: 'No es necesario tener experiencia previa en programación. El método está diseñado para que entiendas la lógica antes del código. Hay partes donde aprenderás sintaxis básica, pero es algo que cualquier persona con mentalidad analítica puede dominar en semanas.' } },
    { '@type': 'Question', name: '¿Esto realmente funciona o es otro producto de "hazte rico con trading"?', acceptedAnswer: { '@type': 'Answer', text: 'Lo que enseñamos no es una estrategia mágica, es un método de trabajo: cómo diseñar hipótesis, validarlas estadísticamente, medir el riesgo real y automatizar lo que funciona. Un sistema algorítmico bien construido no garantiza ganancias. Lo que sí garantiza es consistencia, control y decisiones basadas en datos.' } },
    { '@type': 'Question', name: '¿Cuánto tiempo necesito para tener un sistema operativo?', acceptedAnswer: { '@type': 'Answer', text: 'La hoja de ruta realista es: primeras 4 semanas para fundamentos; semanas 4 a 8 para diseño y backtesting de tu primera estrategia; semanas 8 a 12 para optimización y despliegue. A partir del mes 3, con dedicación consistente, puedes tener tu primer robot operando en cuenta real.' } },
    { '@type': 'Question', name: '¿Cuánto capital necesito para empezar?', acceptedAnswer: { '@type': 'Answer', text: 'Puedes empezar en paper trading sin capital. Para operar en live, muchos brokers permiten cuentas desde 500–1.000 €. Lo más importante es validar bien la estrategia antes de arriesgar dinero real.' } },
    { '@type': 'Question', name: '¿Qué mercados puedo operar con estos sistemas?', acceptedAnswer: { '@type': 'Answer', text: 'Los conceptos son aplicables a cualquier mercado: futuros, forex, acciones, criptomonedas. Cubrimos principalmente futuros (CME), forex y cripto (Binance, Bybit).' } },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${bricolage.variable} ${ibmPlexMono.variable} ${figtree.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
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
