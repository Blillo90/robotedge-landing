'use client'

import dynamic from 'next/dynamic'

const CalculadoraClient = dynamic(
  () => import('./CalculadoraClient'),
  {
    ssr: false,
    loading: () => (
      <div style={{ background: '#0a0c10', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4a5568', fontFamily: 'monospace', fontSize: 13 }}>
        Cargando calculadora…
      </div>
    ),
  }
)

export default function CalculadoraWrapper() {
  return <CalculadoraClient />
}
