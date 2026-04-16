import { MetadataRoute } from 'next'
import { getPublishedPosts } from '@/lib/posts'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://robotedge-landing.vercel.app'

  const posts = await getPublishedPosts()

  const postUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url:             `${base}/blog/${post.slug}`,
    lastModified:    new Date(post.updated_at),
    changeFrequency: 'monthly',
    priority:        0.7,
  }))

  return [
    { url: base,          lastModified: new Date(), changeFrequency: 'weekly',  priority: 1   },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'daily',   priority: 0.8 },
    ...postUrls,
  ]
}
