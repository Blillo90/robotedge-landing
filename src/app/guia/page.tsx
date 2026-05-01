import type { Metadata } from 'next'
import Link from 'next/link'
import { BarChart2, Cpu, ShieldCheck } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: '¿Por qué RobotEdge?',
  description:
    'La diferencia entre jugar y operar. Ingeniería sobre intuición, infraestructura profesional con NinjaTrader 8 y validación rigurosa contra el overfitting.',
  alternates: { canonical: '/guia' },
  openGraph: {
    title: '¿Por qué RobotEdge? — La diferencia entre jugar y operar',
    description:
      'Descubre por qué la mayoría de los robots de trading fracasan y cómo RobotEdge construye ventaja estadística real.',
  },
}

/* ─── Content data ───────────────────────────────────────────────────────────── */

const blocks = [
  {
    number: '01',
    Icon: BarChart2,
    tag: 'Metodología cuantitativa',
    title: 'Ingeniería sobre Intuición: El Fin de la "Bola de Cristal"',
    paragraphs: [
      'La mayoría de cursos de trading enseñan a "leer" el mercado como si fuera una ciencia oculta. Patrones, velas, intuición, señales de Telegram. El problema no es que estas ideas sean malas — es que son inverificables. No puedes medir la suerte. No puedes escalar la intuición.',
      'RobotEdge parte de una premisa diferente: toda decisión operativa debe tener un fundamento estadístico medible. No "creo que el mercado va a subir", sino "este sistema tiene un 65% de aciertos históricos bajo estas condiciones específicas, con un profit factor de 1.8 sobre 3.000 operaciones".',
      'El objetivo no es encontrar la operación perfecta. Es construir sistemas con expectativa matemática positiva — y ejecutarlos con la disciplina suficiente para que el edge se materialice en el tiempo. Sustituimos la especulación emocional por metodología cuantificable.',
    ],
    bullets: [
      'Decisiones respaldadas por datos históricos y probabilidades medibles',
      'Sin adivinanzas, sin perseguir la "operación perfecta"',
      'Sistemas con ventaja estadística verificable antes de arriesgar capital real',
      'Abandono del análisis subjetivo en favor de reglas operativas explícitas',
    ],
  },
  {
    number: '02',
    Icon: Cpu,
    tag: 'Infraestructura profesional',
    title: 'NinjaTrader 8: El Estándar Profesional (Sin Picar Código)',
    paragraphs: [
      'NinjaTrader 8 es la plataforma de referencia para trading de futuros a nivel profesional. No es el software limitado de un broker retail ni una herramienta de backtesting básica — es la infraestructura que usan traders institucionales, gestores de fondos y desarrolladores cuantitativos serios.',
      'Lo que diferencia a RobotEdge es que no necesitas ser desarrollador senior de C# para automatizar tus estrategias. El Strategy Builder y las herramientas de automatización visual de NinjaTrader permiten transformar lógica operativa en robots funcionales sin lidiar con errores de sintaxis ni arquitecturas complejas.',
      'La infraestructura importa tanto como la estrategia: datos de mercado de calidad institucional, conexiones directas a brokers regulados, configuración de VPS para que tus sistemas operen 24 horas sin depender de que tu ordenador esté encendido. No vendemos teoría — entregamos una infraestructura operativa completa y lista para funcionar.',
    ],
    bullets: [
      'Herramientas profesionales reales, no software amateur con limitaciones',
      'Automatización visual: convierte tu lógica en bots sin necesidad de programar desde cero',
      'Datos de mercado de calidad institucional incluidos',
      'Configuración de VPS: tus sistemas operan aunque apagues el ordenador',
      'Conexiones directas a brokers regulados para futuros',
    ],
  },
  {
    number: '03',
    Icon: ShieldCheck,
    tag: 'Validación y robustez',
    title: 'Validación de Estrategias: Blindaje contra el Overfitting',
    paragraphs: [
      'La causa de muerte número uno de los robots de trading no es el mercado — es el overfitting. Un sistema sobreoptimizado es aquel que funciona perfectamente en el pasado porque fue diseñado para esos datos exactos. Es como memorizar las respuestas de un examen anterior: en el siguiente examen, falla.',
      'El backtesting es imprescindible, pero solo es el punto de partida. En RobotEdge aplicamos protocolos de validación avanzada que ponen a prueba la robustez real del sistema antes de considerarlo operativo. Un sistema que no supera estas pruebas, sencillamente no se opera.',
      'Enseñamos a distinguir entre una curva de equity bonita y una curva de equity genuinamente robusta — la diferencia es la que separa a los traders que sobreviven de los que queman su cuenta en seis meses.',
    ],
    bullets: [
      'Monte Carlo: prueba el sistema bajo miles de permutaciones aleatorias de las operaciones',
      'Walk-Forward Validation: valida el sistema en datos que nunca vio durante la optimización',
      'Robustez ante cambios de volatilidad y distintas condiciones de mercado',
      'Pruebas en datos out-of-sample antes de cualquier operativa real',
      'Criterios claros: si no supera las pruebas, no se opera',
    ],
  },
]

/* ─── Page component ─────────────────────────────────────────────────────────── */

export default function GuiaPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen" style={{ paddingTop: '64px' }}>

        {/* ── Page header ────────────────────────────────────────────────── */}
        <section
          className="relative py-24 px-6 overflow-hidden"
          style={{ background: '#0C1521' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 70% 55% at 50% 0%, rgba(20,138,255,0.10) 0%, transparent 65%)',
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="block w-6 h-px" style={{ background: '#148AFF' }} />
              <span
                className="text-xs tracking-[0.22em] uppercase"
                style={{ fontFamily: 'var(--font-mono)', color: '#148AFF' }}
              >
                Guía RobotEdge
              </span>
              <span className="block w-6 h-px" style={{ background: '#148AFF' }} />
            </div>

            <h1
              className="font-display font-extrabold leading-tight mb-5 tracking-tight"
              style={{ fontSize: 'clamp(32px, 5vw, 60px)', color: '#F0F4F8' }}
            >
              ¿Por qué RobotEdge?
            </h1>

            <p
              className="leading-relaxed mx-auto"
              style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: '#5A7A95', maxWidth: '44ch' }}
            >
              La diferencia entre jugar y operar.
            </p>
          </div>
        </section>

        {/* ── Editorial blocks ───────────────────────────────────────────── */}
        <section
          className="py-20 px-6"
          style={{ background: '#111111' }}
        >
          <div className="max-w-4xl mx-auto flex flex-col gap-6">
            {blocks.map((block) => (
              <article
                key={block.number}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: '#0C1521',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {/* Card header */}
                <div
                  className="px-8 pt-8 pb-6 flex flex-col sm:flex-row sm:items-start gap-5"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <div className="flex items-center gap-4 shrink-0">
                    <div
                      className="flex items-center justify-center w-12 h-12 rounded-xl"
                      style={{
                        background: 'rgba(20,138,255,0.1)',
                        border: '1px solid rgba(20,138,255,0.2)',
                      }}
                    >
                      <block.Icon size={22} color="#148AFF" strokeWidth={1.5} aria-hidden />
                    </div>
                    <span
                      className="font-mono font-bold text-2xl"
                      style={{ color: '#148AFF', opacity: 0.35 }}
                    >
                      {block.number}
                    </span>
                  </div>

                  <div>
                    <span
                      className="inline-block text-[10px] tracking-[0.14em] uppercase px-2.5 py-1 rounded-sm mb-3"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        background: 'rgba(20,138,255,0.08)',
                        color: '#148AFF',
                        border: '1px solid rgba(20,138,255,0.18)',
                      }}
                    >
                      {block.tag}
                    </span>
                    <h2
                      className="font-display font-bold leading-snug"
                      style={{ fontSize: 'clamp(18px, 2.5vw, 26px)', color: '#F0F4F8' }}
                    >
                      {block.title}
                    </h2>
                  </div>
                </div>

                {/* Card body */}
                <div className="px-8 py-8 grid md:grid-cols-[1fr_280px] gap-10">
                  <div className="flex flex-col gap-5">
                    {block.paragraphs.map((p, i) => (
                      <p
                        key={i}
                        className="leading-relaxed text-[15px]"
                        style={{ color: '#7A9AB5' }}
                      >
                        {p}
                      </p>
                    ))}
                  </div>

                  <ul className="flex flex-col gap-3 self-start">
                    {block.bullets.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span
                          className="mt-1.5 block w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: '#148AFF' }}
                        />
                        <span
                          className="text-sm leading-relaxed"
                          style={{ color: '#5A7A95' }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Closing CTA ────────────────────────────────────────────────── */}
        <section
          className="relative py-28 px-6 overflow-hidden"
          style={{ background: '#0C1521' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 60% 70% at 50% 100%, rgba(20,138,255,0.08) 0%, transparent 60%)',
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <div
              className="w-px h-12 mx-auto mb-8"
              style={{ background: '#148AFF', opacity: 0.5 }}
            />

            <h2
              className="font-display font-extrabold leading-tight mb-5"
              style={{ fontSize: 'clamp(26px, 4vw, 46px)', color: '#F0F4F8' }}
            >
              ¿Listo para operar con<br />
              <span style={{ color: '#148AFF' }}>ventaja estadística?</span>
            </h2>

            <p
              className="leading-relaxed mb-10 mx-auto"
              style={{ color: '#5A7A95', maxWidth: '42ch' }}
            >
              Deja de improvisar. Aprende a construir sistemas robustos, validados
              y automatizados — el tipo de infraestructura que separa a los traders
              que sobreviven de los que no.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#lead-form"
                className="inline-flex items-center gap-2 text-white text-sm font-medium px-8 py-4 rounded-xl bg-[#148AFF] hover:bg-[#0E6FD4] transition-colors"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Acceder al programa
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium px-8 py-4 rounded-xl transition-colors"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: '#5A7A95',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                Ver el programa completo
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
