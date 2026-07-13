import Link from 'next/link'

const REGISTRO_URL = 'https://www.robotedge.tech/f01-av01-web-registro'

export default function HeroForm({ textoCTA = 'Quiero montarlo ya →' }: { textoCTA?: string }) {
  return (
    <div>
      <p
        className="mb-3 text-sm font-medium"
        style={{ color: '#F0F4F8', fontFamily: 'var(--font-mono)' }}
      >
        Descarga la guía práctica de 90 páginas
      </p>

      <Link
        href={REGISTRO_URL}
        className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium rounded-lg text-white bg-[#148AFF] hover:bg-[#0E6FD4] transition-colors"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        {textoCTA}
      </Link>

      <p className="mt-3 text-xs" style={{ color: '#3A5270', fontFamily: 'var(--font-mono)' }}>
        Gratis. Sin paja. Sin excusas.
      </p>
    </div>
  )
}
