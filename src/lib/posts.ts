import type { Post } from '@/types'
import { createPublicClient } from '@/lib/supabase/public'
import { createClient } from '@/lib/supabase/server'

/**
 * Build-safe: never throws. Returns [] on any error (missing env vars,
 * network failure, Supabase error). Safe for generateStaticParams().
 */
export async function getPublishedPosts(): Promise<Post[]> {
  try {
    const supabase = createPublicClient()
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('[getPublishedPosts]', error.message)
      return []
    }
    return data ?? []
  } catch (err) {
    console.error('[getPublishedPosts] unexpected error:', err)
    return []
  }
}

/**
 * Build-safe: never throws. Returns null when post not found or on any error.
 * Uses maybeSingle() — correct for 0-or-1 row queries (single() errors on 0 rows).
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const supabase = createPublicClient()
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .maybeSingle()

    if (error) {
      console.error('[getPostBySlug]', error.message)
      return null
    }
    return data
  } catch (err) {
    console.error('[getPostBySlug] unexpected error:', err)
    return null
  }
}

/**
 * Admin only — fetches all posts including unpublished.
 * Uses the request-scoped server client; only called from /admin/* routes.
 * Allowed to throw — errors should surface in authenticated admin context.
 */
export async function getAllPosts(): Promise<Post[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data ?? []
}
