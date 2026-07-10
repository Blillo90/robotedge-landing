import { revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

const tagMap: Record<string, string[]> = {
  hero:         ['hero'],
  globalColors: ['globalColors'],
  testimonial:  ['testimonials'],
  faqItem:      ['faq'],
}

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')

  if (!secret || secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Acceso no autorizado' }, { status: 401 })
  }

  let body: { _type?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ message: 'Body inválido' }, { status: 400 })
  }

  const documentType = body._type ?? ''
  const tags = tagMap[documentType]

  if (!tags) {
    return NextResponse.json({ message: `Tipo desconocido: ${documentType}` }, { status: 200 })
  }

  tags.forEach((tag) => revalidateTag(tag))

  return NextResponse.json({ revalidated: true, tags })
}
