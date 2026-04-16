import { NextRequest, NextResponse } from 'next/server'
import { createPublicClient } from '@/lib/supabase/public'

function isValidEmail(email: unknown): email is string {
  return (
    typeof email === 'string' &&
    email.length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())
  )
}

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Solicitud inválida.' }, { status: 400 })
  }

  const data    = body as Record<string, unknown>
  const email   = typeof data?.email    === 'string' ? data.email.trim().toLowerCase() : ''
  const nombre  = typeof data?.nombre   === 'string' ? data.nombre.trim().slice(0, 100)   : ''
  const apellidos = typeof data?.apellidos === 'string' ? data.apellidos.trim().slice(0, 100) : ''

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Introduce un email válido.' }, { status: 400 })
  }

  try {
    const supabase = createPublicClient()
    const { error } = await supabase.from('leads').insert({
      email,
      nombre:    nombre   || null,
      apellidos: apellidos || null,
      source:    'landing',
    })

    // Ignore duplicate email — treat as success (no info leak)
    if (error && !error.message.includes('duplicate')) {
      console.error('[lead]', error.message)
      return NextResponse.json({ error: 'Error al guardar. Inténtalo de nuevo.' }, { status: 500 })
    }
  } catch (err) {
    console.error('[lead] unexpected:', err)
    return NextResponse.json({ error: 'Error interno.' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
