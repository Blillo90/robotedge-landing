import type { Metadata } from 'next'
import CalculadoraWrapper from '@/components/calculadora/CalculadoraWrapper'

export const metadata: Metadata = {
  title: 'Calculadora de Rentabilidad | RobotEdge',
  description:
    'Simula el crecimiento de tu cuenta con la estrategia ADH. Ajusta el riesgo por operación y el número de contratos y ve cómo evoluciona tu capital a lo largo del tiempo.',
}

export default function CalculadoraPage() {
  return <CalculadoraWrapper />
}
