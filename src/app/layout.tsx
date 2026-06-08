import type { Metadata } from 'next'
import { Bricolage_Grotesque, IBM_Plex_Mono, Figtree } from 'next/font/google'
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

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://robotedge.tech'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Curso de Trading Algorítmico | Aprende a crear robots de trading | RobotEdge',
    template: '%s | RobotEdge',
  },
  description:
    'Aprende a diseñar, hacer backtesting y desplegar estrategias de trading automatizadas. RobotEdge es una academia de trading algorítmico y cuantitativo.',
  authors: [{ name: 'Pablo Llobregat' }],
  openGraph: {
    type:        'website',
    siteName:    'RobotEdge',
    locale:      'es_ES',
    title:       'Curso de Trading Algorítmico con NinjaTrader | RobotEdge',
    description: 'Diseña, testea y despliega robots de trading basados en datos. Sin emociones, con resultados reproducibles.',
    url:         BASE_URL,
    images: [{ url: `${BASE_URL}/images/og-image.jpg`, width: 1200, height: 630, alt: 'RobotEdge — Curso de Trading Algorítmico con NinjaTrader' }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Curso de Trading Algorítmico con NinjaTrader | RobotEdge',
    description: 'Diseña, testea y despliega robots de trading basados en datos.',
    images:      [`${BASE_URL}/images/og-image.jpg`],
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
  url: 'https://robotedge.tech',
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
  url: 'https://robotedge.tech',
  inLanguage: 'es',
  provider: { '@type': 'Organization', name: 'RobotEdge', url: 'https://robotedge.tech' },
  instructor: { '@type': 'Person', name: 'Pablo Llobregat', jobTitle: 'Trader Algorítmico e Ingeniero de Datos' },
  teaches: ['Trading algorítmico', 'NinjaTrader 8', 'NinjaScript', 'Backtesting', 'Automatización de estrategias', 'Gestión de riesgo', 'Robots de trading'],
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: 'online',
    inLanguage: 'es',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '3',
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Pablo Llobregat',
  jobTitle: 'Trader Algorítmico e Ingeniero de Datos',
  url: 'https://robotedge.tech',
  worksFor: { '@type': 'Organization', name: 'RobotEdge' },
  knowsAbout: ['Trading algorítmico', 'NinjaTrader 8', 'NinjaScript', 'Backtesting', 'Futuros CME', 'Gestión de riesgo'],
  sameAs: ['https://www.instagram.com/pablo.robotedge/'],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Necesito saber programar para hacer trading algorítmico?',
      acceptedAnswer: { '@type': 'Answer', text: 'No es necesario tener experiencia previa en programación. El método está diseñado para que entiendas la lógica antes del código. Hay partes donde aprenderás sintaxis básica, pero es algo que cualquier persona con mentalidad analítica puede dominar en semanas.' },
    },
    {
      '@type': 'Question',
      name: '¿Esto realmente funciona o es otro producto de hazte rico con trading?',
      acceptedAnswer: { '@type': 'Answer', text: 'Lo que enseñamos no es una estrategia mágica, es un método de trabajo: cómo diseñar hipótesis, validarlas estadísticamente, medir el riesgo real y automatizar lo que funciona. Un sistema algorítmico bien construido no garantiza ganancias. Lo que sí garantiza es consistencia, control y decisiones basadas en datos.' },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tiempo necesito para tener un sistema operativo?',
      acceptedAnswer: { '@type': 'Answer', text: 'La hoja de ruta realista: primeras 4 semanas para fundamentos; semanas 4–8 para diseñar y backtestear tu primera estrategia; semanas 8–12 para optimización y despliegue. A partir del mes 3, con dedicación consistente, puedes tener tu primer robot operando en cuenta real.' },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto capital necesito para empezar?',
      acceptedAnswer: { '@type': 'Answer', text: 'Puedes empezar en paper trading sin capital. Para operar en live, muchos brokers permiten cuentas desde 500–1.000 €. Lo más importante es validar bien la estrategia antes de arriesgar dinero real.' },
    },
    {
      '@type': 'Question',
      name: '¿Tendré contacto directo con Pablo Llobregat?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sí. Pablo realiza sesiones en directo con los alumnos donde podrás interactuar directamente, hacer preguntas y resolver dudas sobre tu caso concreto. El acompañamiento personalizado es una parte fundamental del método.' },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${bricolage.variable} ${ibmPlexMono.variable} ${figtree.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </head>
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
      </body>
    </html>
  )
}
