import { createClient } from '@supabase/supabase-js'

/**
 * Build-safe Supabase client for public, unauthenticated data fetching.
 * Does NOT use cookies() — safe for generateStaticParams() and generateMetadata().
 * Use this for any query that does not require a user session.
 */
export function createPublicClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
