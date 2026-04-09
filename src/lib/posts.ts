import type { Post } from '@/types'
import { createPublicClient } from '@/lib/supabase/public'
import { createClient } from '@/lib/supabase/server'

// Uses the build-safe public client — no cookies(), safe at build time.
export async function getPublishedPosts(): Promise<Post[]> {
  const supabase = createPublicClient()
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data ?? []
}

// Uses the build-safe public client — no cookies(), safe at build time.
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const supabase = createPublicClient()
  const { data } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single()

  return data ?? null
}

// Admin only — fetches all posts including unpublished.
// Uses the request-scoped server client; only called from admin routes.
export async function getAllPosts(): Promise<Post[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data ?? []
}
