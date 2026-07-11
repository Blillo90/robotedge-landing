import { sanityFetch } from '@/sanity/client'
import { faqQuery } from '@/sanity/queries'
import FAQ from './FAQ'

type FaqItem = { pregunta: string; respuesta: string }

export default async function FAQServer() {
  let items: FaqItem[] = []
  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    const data = await sanityFetch<FaqItem[]>(faqQuery, ['faq'])
    if (data?.length) items = data
  }
  return <FAQ items={items} />
}
