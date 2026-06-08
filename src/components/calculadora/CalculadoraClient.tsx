'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { RAW_DATA, MAX_ABS_DD } from '@/lib/calculadora-data'
import 'driver.js/dist/driver.css'

/* ─── types ─── */
type DataRow = { period: string; netProfit: number }

type SimResult = {
  initialCapital: number
  capitalPerContract: number
  finalRet: number
  annualizedRet: number | null
  years: number | null
  finalBalance: number
  maxDD: number
  finalContracts: number
  maxContracts: number
  retSeries: number[]
  ddSeries: number[]
}

/* ─── data ─── */
const DATA: DataRow[] = RAW_DATA.map(([period, netProfit]) => ({ period, netProfit }))

/* ─── helpers ─── */
function fmt(n: number, decimals = 2) {
  return n.toLocaleString('es-ES', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
}

function parseDate(s: string): Date {
  const parts = s.split(/[\/\-]/)
  if (parts.length === 3) {
    if (parts[0].length === 4) return new Date(+parts[0], +parts[1] - 1, +parts[2])
    if (parts[2].length === 4) return new Date(+parts[2], +parts[1] - 1, +parts[0])
  }
  return new Date(s)
}

/* ─── simulation ─── */
function simulate(data: DataRow[], riskPct: number, initContracts: number, scalingOn: boolean): SimResult {
  const initialCapital = (MAX_ABS_DD * initContracts) / (riskPct / 100)
  const capitalPerContract = initialCapital / initContracts

  let balance = initialCapital
  let peak = initialCapital
  let contracts = initContracts
  let maxContracts = initContracts
  let maxDD = 0

  const retSeries: number[] = []
  const ddSeries: number[] = []

  for (const row of data) {
    if (scalingOn) contracts = Math.max(1, Math.floor(balance / capitalPerContract))
    if (contracts > maxContracts) maxContracts = contracts

    balance += row.netProfit * contracts
    if (balance > peak) peak = balance

    const dd = peak > 0 ? ((peak - balance) / peak) * 100 : 0
    if (dd > maxDD) maxDD = dd

    retSeries.push((balance / initialCapital - 1) * 100)
    ddSeries.push(dd)
  }

  const finalRet = (balance / initialCapital - 1) * 100
  const finalContracts = scalingOn ? Math.max(1, Math.floor(balance / capitalPerContract)) : contracts

  let annualizedRet: number | null = null
  let years: number | null = null
  try {
    const d0 = parseDate(data[0].period)
    const d1 = parseDate(data[data.length - 1].period)
    if (!isNaN(d0.getTime()) && !isNaN(d1.getTime()) && d1 > d0) {
      years = (d1.getTime() - d0.getTime()) / (365.25 * 24 * 3600 * 1000)
      if (years > 0) annualizedRet = (Math.pow(balance / initialCapital, 1 / years) - 1) * 100
    }
  } catch (_) {}

  return {
    initialCapital, capitalPerContract, finalRet, annualizedRet, years,
    finalBalance: balance, maxDD, finalContracts, maxContracts, retSeries, ddSeries,
  }
}

/* ─── design tokens ─── */
const V = {
  bg: '#0a0c10',
  surface: '#111318',
  surface2: '#181c24',
  border: '#252a35',
  border2: '#2e3545',
  accent: '#00d4ff',
  green: '#00e676',
  red: '#ff3d57',
  yellow: '#ffd600',
  text: '#e8ecf0',
  text2: '#8899aa',
  text3: '#4a5568',
  mono: "'IBM Plex Mono', monospace",
  sans: "'IBM Plex Sans', sans-serif",
} as const

/* ─── sub-components ─── */
function KpiCard({ label, value, color }: { label: string; value: string; color?: string }) {
  return (
    <div style={{ background: V.surface, border: `1px solid ${V.border}`, borderRadius: 8, padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0 }}>
      <div style={{ fontSize: 10, color: V.text3, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: V.mono, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {label}
      </div>
      <div style={{ fontFamily: V.mono, fontSize: 13, fontWeight: 600, color: color ?? V.text, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {value}
      </div>
    </div>
  )
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div style={{ fontFamily: V.mono, fontSize: 9, fontWeight: 600, color: V.text3, letterSpacing: '0.14em', textTransform: 'uppercase', paddingTop: 4 }}>
      {children}
    </div>
  )
}

/* ─── tour steps ─── */
const TOUR_STEPS = [
  {
    popover: {
      title: 'Bienvenido a la calculadora',
      description: 'Esta herramienta simula la rentabilidad de la estrategia con tus parámetros. Ajusta los controles del panel izquierdo y los resultados se actualizan en tiempo real.',
    },
  },
  {
    element: '#tour-risk',
    popover: {
      title: 'Riesgo por operación',
      description: 'Porcentaje del capital que se arriesga en cada operación. A mayor riesgo, mayor rentabilidad potencial — y mayor drawdown. Se recomienda empezar entre 5% y 15%.',
      side: 'right' as const,
    },
  },
  {
    element: '#tour-contracts',
    popover: {
      title: 'Contratos iniciales',
      description: 'Número de contratos con los que arrancas la simulación. Junto con el riesgo, determina el capital mínimo necesario para operar.',
      side: 'right' as const,
    },
  },
  {
    element: '#tour-scaling',
    popover: {
      title: 'Plan de escalado',
      description: 'Con el escalado activo, el número de contratos crece automáticamente al aumentar el balance. Simula el efecto del interés compuesto real en trading.',
      side: 'right' as const,
    },
  },
  {
    element: '#tour-risks-list',
    popover: {
      title: 'Riesgos a comparar',
      description: 'Introduce varios porcentajes separados por comas. La tabla inferior mostrará los resultados para cada uno, facilitando la comparación de escenarios.',
      side: 'right' as const,
    },
  },
  {
    element: '#tour-date-range',
    popover: {
      title: 'Rango de fechas',
      description: 'Filtra los periodos incluidos en la simulación. Útil para analizar el comportamiento de la estrategia en distintos tramos del histórico.',
      side: 'right' as const,
    },
  },
]

/* ─── main component ─── */
export default function CalculadoraClient() {
  const [risk, setRisk] = useState(15)
  const [contracts, setContracts] = useState(1)
  const [scalingOn, setScalingOn] = useState(false)
  const [risksList, setRisksList] = useState('5, 10, 15, 20, 25, 30')
  const [startIdx, setStartIdx] = useState(0)
  const [endIdx, setEndIdx] = useState(DATA.length - 1)
  const [result, setResult] = useState<SimResult | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  const canvasRef = useRef<HTMLCanvasElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const chartRef = useRef<any>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const driverRef = useRef<any>(null)

  const startTour = useCallback(async () => {
    const { driver } = await import('driver.js')
    if (driverRef.current) driverRef.current.destroy()
    const d = driver({
      showProgress: true,
      progressText: '{{current}} de {{total}}',
      nextBtnText: 'Siguiente →',
      prevBtnText: '← Anterior',
      doneBtnText: 'Entendido ✓',
      steps: TOUR_STEPS,
      onPopoverRender: (popover: { footerButtons: HTMLElement }) => {
        const skip = document.createElement('button')
        skip.textContent = 'Omitir'
        skip.style.cssText = 'background:transparent;border:none;color:#4a5568;font-size:11px;cursor:pointer;font-family:IBM Plex Mono,monospace;padding:0 4px;margin-right:auto;line-height:1;white-space:nowrap;flex-shrink:0;'
        skip.addEventListener('mouseover', () => { skip.style.color = '#8899aa' })
        skip.addEventListener('mouseout', () => { skip.style.color = '#4a5568' })
        skip.addEventListener('click', () => d.destroy())
        popover.footerButtons.prepend(skip)
      },
      onDestroyStarted: () => { d.destroy() },
    })
    driverRef.current = d
    d.drive()
  }, [])

  useEffect(() => {
    const t = setTimeout(() => startTour(), 800)
    return () => clearTimeout(t)
  }, [startTour])

  const drawChart = useCallback(async (labels: string[], retSeries: number[], ddSeries: number[]) => {
    if (!canvasRef.current) return
    const { default: Chart } = await import('chart.js/auto')
    if (chartRef.current) chartRef.current.destroy()
    chartRef.current = new Chart(canvasRef.current, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Rentabilidad acumulada %',
            data: retSeries,
            borderColor: '#00d4ff',
            backgroundColor: 'rgba(0,212,255,0.05)',
            borderWidth: 1.5,
            pointRadius: 0,
            fill: true,
            tension: 0.1,
            yAxisID: 'yRet',
          },
          {
            label: 'Drawdown %',
            data: ddSeries.map((d) => -d),
            borderColor: '#ff3d57',
            backgroundColor: 'rgba(255,61,87,0.05)',
            borderWidth: 1.5,
            pointRadius: 0,
            fill: true,
            tension: 0.1,
            yAxisID: 'yDD',
            hidden: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 300 },
        interaction: { mode: 'index', intersect: false },
        plugins: {
          legend: { labels: { color: '#8899aa', font: { family: 'IBM Plex Mono', size: 11 }, boxWidth: 12 } },
          tooltip: {
            backgroundColor: '#181c24',
            borderColor: '#252a35',
            borderWidth: 1,
            titleColor: '#8899aa',
            bodyColor: '#e8ecf0',
            titleFont: { family: 'IBM Plex Mono', size: 10 },
            bodyFont: { family: 'IBM Plex Mono', size: 11 },
            callbacks: {
              label: (ctx) => {
                const v = ctx.parsed.y ?? 0
                return `  ${ctx.dataset.label}: ${v >= 0 ? '+' : ''}${v.toFixed(2)}%`
              },
            },
          },
        },
        scales: {
          x: {
            ticks: { color: '#4a5568', font: { family: 'IBM Plex Mono', size: 9 }, maxTicksLimit: 8, maxRotation: 0 },
            grid: { color: '#1a1f2b' },
          },
          yRet: {
            type: 'linear',
            position: 'left',
            ticks: { color: '#00d4ff', font: { family: 'IBM Plex Mono', size: 10 }, callback: (v: unknown) => v + '%' },
            grid: { color: '#1a1f2b' },
          },
          yDD: {
            type: 'linear',
            position: 'right',
            ticks: { color: '#ff3d57', font: { family: 'IBM Plex Mono', size: 10 }, callback: (v: unknown) => v + '%' },
            grid: { drawOnChartArea: false },
          },
        },
      },
    })
  }, [])

  useEffect(() => {
    const sliced = DATA.slice(startIdx, endIdx + 1)
    const sim = simulate(sliced, risk, contracts, scalingOn)
    setResult(sim)
    drawChart(sliced.map((r) => r.period), sim.retSeries, sim.ddSeries)
  }, [risk, contracts, scalingOn, startIdx, endIdx, drawChart])

  const tableRisks = risksList
    .split(',')
    .map((s) => parseFloat(s.trim()))
    .filter((n) => !isNaN(n) && n > 0)

  const sliced = DATA.slice(startIdx, endIdx + 1)
  const r = result

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

      <style>{`
        .calc-wrap { background:${V.bg}; color:${V.text}; font-family:${V.sans}; min-height:100vh; }
        .calc-range { -webkit-appearance:none; width:100%; height:4px; background:${V.border2}; border-radius:2px; outline:none; cursor:pointer; }
        .calc-range::-webkit-slider-thumb { -webkit-appearance:none; width:20px; height:20px; border-radius:50%; background:${V.accent}; border:2px solid ${V.bg}; box-shadow:0 0 0 2px #0099cc; cursor:pointer; }
        .calc-range::-moz-range-thumb { width:20px; height:20px; border-radius:50%; background:${V.accent}; border:2px solid ${V.bg}; cursor:pointer; }
        .calc-toggle { position:relative; width:40px; height:22px; flex-shrink:0; }
        .calc-toggle input { opacity:0; width:0; height:0; position:absolute; }
        .calc-toggle-knob { position:absolute; inset:0; background:${V.border2}; border-radius:22px; cursor:pointer; transition:background .2s; }
        .calc-toggle-knob::before { content:''; position:absolute; width:16px; height:16px; left:3px; top:3px; background:${V.text2}; border-radius:50%; transition:transform .2s,background .2s; }
        .calc-toggle input:checked ~ .calc-toggle-knob { background:rgba(0,212,255,.2); }
        .calc-toggle input:checked ~ .calc-toggle-knob::before { transform:translateX(18px); background:${V.accent}; }
        .calc-tr:hover td { background:${V.surface2}; }
        .calc-sidebar { width:290px; flex-shrink:0; background:${V.surface}; border-right:1px solid ${V.border}; padding:20px 18px; display:flex; flex-direction:column; gap:20px; overflow-y:auto; }
        .calc-cards-1 { display:grid; grid-template-columns:repeat(5,1fr); gap:8px; }
        .calc-cards-2 { display:grid; grid-template-columns:repeat(7,1fr); gap:8px; }
        .calc-menu-btn { display:none; }
        @media(max-width:900px){ .calc-cards-1{grid-template-columns:repeat(3,1fr);} .calc-cards-2{grid-template-columns:repeat(4,1fr);} .calc-sidebar{width:260px;} }
        @media(max-width:680px){
          .calc-sidebar{position:fixed;top:67px;left:0;bottom:0;z-index:200;width:min(300px,85vw)!important;transform:translateX(-105%);transition:transform .28s;}
          .calc-sidebar.open{transform:translateX(0);}
          .calc-cards-1{grid-template-columns:repeat(2,1fr);}
          .calc-cards-2{grid-template-columns:repeat(2,1fr);}
          .calc-menu-btn{display:flex!important;align-items:center;justify-content:center;}
          .calc-badge{display:none!important;}
        }
        /* ── driver.js dark theme ── */
        .driver-popover { background:#181c24 !important; border:1px solid #2e3545 !important; border-radius:10px !important; color:#e8ecf0 !important; font-family:'IBM Plex Mono',monospace !important; box-shadow:0 8px 32px rgba(0,0,0,0.6) !important; width:360px !important; max-width:90vw !important; }
        .driver-popover-title { font-size:13px !important; font-weight:700 !important; color:#00d4ff !important; margin-bottom:8px !important; }
        .driver-popover-description { font-size:12px !important; color:#8899aa !important; line-height:1.6 !important; font-family:'IBM Plex Sans',sans-serif !important; }
        .driver-popover-footer { margin-top:14px !important; display:flex !important; align-items:center !important; flex-wrap:nowrap !important; gap:6px !important; }
        .driver-popover-next-btn, .driver-popover-done-btn { background:#00d4ff !important; color:#0a0c10 !important; border:none !important; border-radius:6px !important; font-size:11px !important; font-weight:700 !important; padding:6px 12px !important; cursor:pointer !important; font-family:'IBM Plex Mono',monospace !important; white-space:nowrap !important; }
        .driver-popover-prev-btn { background:transparent !important; color:#4a5568 !important; border:1px solid #252a35 !important; border-radius:6px !important; font-size:11px !important; padding:6px 10px !important; cursor:pointer !important; font-family:'IBM Plex Mono',monospace !important; white-space:nowrap !important; }
        .driver-popover-prev-btn:hover { color:#8899aa !important; border-color:#2e3545 !important; }
        .driver-popover-progress-text { font-size:10px !important; color:#4a5568 !important; font-family:'IBM Plex Mono',monospace !important; white-space:nowrap !important; }
        .driver-popover-close-btn { color:#4a5568 !important; font-size:16px !important; line-height:1 !important; }
        .driver-popover-close-btn:hover { color:#8899aa !important; }
      `}</style>

      <div className="calc-wrap">

        {/* header */}
        <header style={{ background: V.surface, borderBottom: `1px solid ${V.border}`, padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 14, position: 'sticky', top: 0, zIndex: 100, flexWrap: 'wrap' }}>
          <Link href="/" style={{ fontFamily: V.mono, fontSize: 13, fontWeight: 600, color: V.text, textDecoration: 'none', flexShrink: 0, display: 'flex', alignItems: 'center', gap: 6, background: V.surface2, border: `1px solid ${V.border2}`, borderRadius: 6, padding: '7px 14px', letterSpacing: '0.04em' }}>
            ← Inicio
          </Link>
          <div style={{ width: 1, height: 20, background: V.border, flexShrink: 0 }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <div style={{ fontFamily: V.mono, fontSize: 15, fontWeight: 600, color: V.text }}>
              RobotEdge Account <span style={{ color: V.accent }}>Scaler</span>
            </div>
            <div style={{ fontFamily: V.mono, fontSize: 10, fontWeight: 500, color: V.text3, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Tu rentabilidad esperada
            </div>
          </div>
          <div className="calc-badge" style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(0,230,118,0.06)', border: '1px solid rgba(0,230,118,0.2)', borderRadius: 6, padding: '5px 12px' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: V.green, flexShrink: 0, display: 'inline-block' }} />
            <span style={{ fontFamily: V.mono, fontSize: 10, fontWeight: 600, color: V.green, letterSpacing: '0.06em' }}>
              Datos verificados · {DATA.length} periodos
            </span>
          </div>
          <button
            onClick={() => startTour()}
            title="Ver tutorial"
            style={{ marginLeft: 'auto', background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)', borderRadius: 6, padding: '6px 12px', color: V.accent, cursor: 'pointer', fontFamily: V.mono, fontSize: 12, fontWeight: 600, letterSpacing: '0.04em', flexShrink: 0 }}
          >
            ? Tutorial
          </button>
          <button
            className="calc-menu-btn"
            onClick={() => setMobileOpen((v) => !v)}
            style={{ background: 'none', border: `1px solid ${V.border2}`, borderRadius: 6, padding: '6px 10px', color: V.text2, cursor: 'pointer', fontSize: 18 }}
            aria-label={mobileOpen ? 'Cerrar' : 'Abrir configuración'}
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </header>

        {/* context banner */}
        <div style={{ background: 'rgba(0,212,255,0.04)', borderBottom: `1px solid rgba(0,212,255,0.12)`, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
          <span style={{ width: 3, alignSelf: 'stretch', background: V.accent, borderRadius: 2, flexShrink: 0 }} />
          <p style={{ fontFamily: V.sans, fontSize: 12, color: V.text2, lineHeight: 1.6, flex: 1, minWidth: 200, margin: 0 }}>
            <span style={{ color: V.text, fontWeight: 600 }}>Estos son los datos reales de una de las estrategias que enseñamos en el curso.</span>
            {' '}La rentabilidad que ves aquí es la referencia a la que aspiras cuando completas la formación y despliegas tu propio sistema.
          </p>
          <Link
            href="/#curso"
            style={{ fontFamily: V.mono, fontSize: 11, fontWeight: 600, color: V.accent, textDecoration: 'none', whiteSpace: 'nowrap', background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)', borderRadius: 6, padding: '5px 12px', flexShrink: 0 }}
          >
            Ver el curso →
          </Link>
        </div>

        {/* mobile overlay */}
        {mobileOpen && (
          <div onClick={() => setMobileOpen(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 199 }} />
        )}

        <div style={{ display: 'flex', minHeight: 'calc(100vh - 67px)' }}>

          {/* sidebar */}
          <aside className={`calc-sidebar${mobileOpen ? ' open' : ''}`}>

            {/* risk */}
            <div id="tour-risk" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: V.mono, fontSize: 10, fontWeight: 600, color: V.text3, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Riesgo seleccionado</span>
                <span style={{ fontFamily: V.mono, fontSize: 13, fontWeight: 600, color: V.accent, background: 'rgba(0,212,255,0.08)', padding: '2px 8px', borderRadius: 4 }}>{risk}%</span>
              </div>
              <input className="calc-range" type="range" min={1} max={100} value={risk} onChange={(e) => setRisk(+e.target.value)} />
            </div>

            {/* contracts */}
            <div id="tour-contracts" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: V.mono, fontSize: 10, fontWeight: 600, color: V.text3, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Contratos iniciales</span>
                <span style={{ fontFamily: V.mono, fontSize: 13, fontWeight: 600, color: V.accent, background: 'rgba(0,212,255,0.08)', padding: '2px 8px', borderRadius: 4 }}>{contracts}</span>
              </div>
              <input className="calc-range" type="range" min={1} max={20} value={contracts} onChange={(e) => setContracts(+e.target.value)} />
            </div>

            {/* scaling toggle */}
            <div id="tour-scaling">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', background: V.surface2, borderRadius: 8, border: `1px solid ${V.border}` }}>
                <span style={{ fontSize: 13, fontWeight: 500, color: V.text }}>Plan de <span style={{ color: V.accent }}>ESCALADO</span></span>
                <label className="calc-toggle">
                  <input type="checkbox" checked={scalingOn} onChange={(e) => setScalingOn(e.target.checked)} />
                  <span className="calc-toggle-knob" />
                </label>
              </div>
              {scalingOn && r && (
                <div style={{ marginTop: 10, background: V.surface2, border: `1px solid ${V.border}`, borderRadius: 7, padding: '10px 12px' }}>
                  <div style={{ fontSize: 10, color: V.text3, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, fontFamily: V.mono }}>$ por contrato</div>
                  <div style={{ fontFamily: V.mono, fontSize: 14, fontWeight: 700, color: V.yellow, marginTop: 4 }}>{fmt(r.capitalPerContract, 0)} $</div>
                  <div style={{ fontSize: 10, color: V.text3, marginTop: 4, lineHeight: 1.5 }}>Capital ÷ contratos. Sube/baja 1 contrato por cada múltiplo.</div>
                </div>
              )}
            </div>

            {/* risks list */}
            <div id="tour-risks-list" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontSize: 12, color: V.text2, fontWeight: 500 }}>Riesgos a comparar (%, separados por comas)</label>
              <input
                type="text"
                value={risksList}
                onChange={(e) => setRisksList(e.target.value)}
                style={{ background: V.surface2, border: `1px solid ${V.border2}`, borderRadius: 6, color: V.text, fontFamily: V.mono, fontSize: 12, padding: '8px 10px', outline: 'none', width: '100%' }}
              />
            </div>

            {/* date range */}
            <div id="tour-date-range" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span style={{ fontFamily: V.mono, fontSize: 10, fontWeight: 600, color: V.text3, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Rango de fechas</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 11, color: V.text3, fontFamily: V.mono }}>Desde</span>
                  <span style={{ fontSize: 11, color: V.accent, fontFamily: V.mono }}>{DATA[startIdx]?.period ?? '—'}</span>
                </div>
                <input className="calc-range" type="range" min={0} max={DATA.length - 1} value={startIdx}
                  onChange={(e) => { const v = +e.target.value; if (v < endIdx) setStartIdx(v) }} />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 11, color: V.text3, fontFamily: V.mono }}>Hasta</span>
                  <span style={{ fontSize: 11, color: V.accent, fontFamily: V.mono }}>{DATA[endIdx]?.period ?? '—'}</span>
                </div>
                <input className="calc-range" type="range" min={0} max={DATA.length - 1} value={endIdx}
                  onChange={(e) => { const v = +e.target.value; if (v > startIdx) setEndIdx(v) }} />
              </div>
            </div>

          </aside>

          {/* main */}
          <main style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>

            {/* kpi cards */}
            <div style={{ padding: '16px 20px 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <SectionLabel>Configuración</SectionLabel>
              <div className="calc-cards-1">
                <KpiCard label="Riesgo sel." value={risk + '%'} color={V.accent} />
                <KpiCard label="Contratos ini." value={String(contracts)} />
                <KpiCard label="Capital inicial" value={r ? fmt(r.initialCapital, 0) + ' $' : '—'} />
                <KpiCard label="$ / contrato" value={r ? fmt(r.capitalPerContract, 0) + ' $' : '—'} color={V.accent} />
                <KpiCard label="Escalado" value={scalingOn ? 'ACTIVO' : 'APAGADO'} color={scalingOn ? V.green : undefined} />
              </div>

              <SectionLabel>Resultados</SectionLabel>
              <div className="calc-cards-2">
                <KpiCard label="Rentab. total" value={r ? (r.finalRet >= 0 ? '+' : '') + fmt(r.finalRet) + '%' : '—'} color={r ? (r.finalRet >= 0 ? V.green : V.red) : undefined} />
                <KpiCard label="Rentab. anual." value={r?.annualizedRet != null ? (r.annualizedRet >= 0 ? '+' : '') + fmt(r.annualizedRet) + '%' : '—'} color={r?.annualizedRet != null ? (r.annualizedRet >= 0 ? V.green : V.red) : undefined} />
                <KpiCard label="DD máximo" value={r ? '-' + fmt(r.maxDD) + '%' : '—'} color={V.red} />
                <KpiCard label="Contratos fin." value={r ? String(r.finalContracts) : '—'} />
                <KpiCard label="Contratos máx." value={r ? String(r.maxContracts) : '—'} />
                <KpiCard label="Balance final" value={r ? fmt(r.finalBalance, 0) + ' $' : '—'} />
                <KpiCard label="Periodos" value={String(r?.retSeries.length ?? '—')} />
              </div>
            </div>

            {/* chart */}
            <div style={{ padding: '16px 20px' }}>
              <div style={{ background: V.surface, border: `1px solid ${V.border}`, borderRadius: 10, padding: 16, height: 300, position: 'relative' }}>
                <canvas ref={canvasRef} />
              </div>
            </div>

            {/* comparison table */}
            <div style={{ padding: '0 20px 32px', overflowX: 'auto' }}>
              <div style={{ fontFamily: V.mono, fontSize: 11, fontWeight: 600, color: V.text3, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>
                Tabla Comparativa de Escenarios
              </div>
              <div style={{ background: V.surface, border: `1px solid ${V.border}`, borderRadius: 10, overflow: 'hidden', minWidth: 480 }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: V.surface2 }}>
                      {['Riesgo %', 'Capital inicial', 'Rentab. total %', 'Rentab. anualiz. %', 'DD máximo %', 'Contratos fin.', 'Contratos máx.'].map((h, i) => (
                        <th key={h} style={{ fontFamily: V.mono, fontSize: 10, fontWeight: 600, color: V.text3, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '10px 12px', textAlign: i === 0 ? 'left' : 'right', borderBottom: `1px solid ${V.border}`, whiteSpace: 'nowrap' }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tableRisks.map((rPct) => {
                      const res = simulate(sliced, rPct, contracts, scalingOn)
                      return (
                        <tr key={rPct} className="calc-tr">
                          <td style={{ fontFamily: V.mono, fontSize: 12, padding: '9px 12px', borderBottom: `1px solid ${V.border}`, color: V.text, fontWeight: 600 }}>{rPct}%</td>
                          <td style={{ fontFamily: V.mono, fontSize: 12, padding: '9px 12px', borderBottom: `1px solid ${V.border}`, color: V.text2, textAlign: 'right' }}>{fmt(res.initialCapital, 0)} $</td>
                          <td style={{ fontFamily: V.mono, fontSize: 12, padding: '9px 12px', borderBottom: `1px solid ${V.border}`, color: res.finalRet >= 0 ? V.green : V.red, textAlign: 'right' }}>{res.finalRet >= 0 ? '+' : ''}{fmt(res.finalRet)}%</td>
                          <td style={{ fontFamily: V.mono, fontSize: 12, padding: '9px 12px', borderBottom: `1px solid ${V.border}`, color: res.annualizedRet != null ? (res.annualizedRet >= 0 ? V.green : V.red) : V.text2, textAlign: 'right' }}>{res.annualizedRet != null ? (res.annualizedRet >= 0 ? '+' : '') + fmt(res.annualizedRet) + '%' : '—'}</td>
                          <td style={{ fontFamily: V.mono, fontSize: 12, padding: '9px 12px', borderBottom: `1px solid ${V.border}`, color: V.red, textAlign: 'right' }}>-{fmt(res.maxDD)}%</td>
                          <td style={{ fontFamily: V.mono, fontSize: 12, padding: '9px 12px', borderBottom: `1px solid ${V.border}`, color: V.accent, textAlign: 'right' }}>{res.finalContracts}</td>
                          <td style={{ fontFamily: V.mono, fontSize: 12, padding: '9px 12px', borderBottom: `1px solid ${V.border}`, color: V.text2, textAlign: 'right' }}>{res.maxContracts}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>

          </main>
        </div>
      </div>
    </>
  )
}
