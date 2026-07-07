import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://robotedger.tech'

  return [
    { url: base,           lastModified: new Date(), changeFrequency: 'weekly',  priority: 1   },
    { url: `${base}/guia`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/privacidad`, lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
  ]
}
