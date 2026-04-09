import { createClient } from '@supabase/supabase-js'

/**
 * Build-safe Supabase client for public, unauthenticated data fetching.
 * Does NOT use cookies() — safe for generateStaticParams() and generateMetadata().
 * Use this for any query that does not require a user session.
 */
export function createPublicClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url) throw new Error('Missing environment variable: NEXT_PUBLIC_SUPABASE_URL')
  if (!key) throw new Error('Missing environment variable: NEXT_PUBLIC_SUPABASE_ANON_KEY')

  return createClient(url, key)
}
