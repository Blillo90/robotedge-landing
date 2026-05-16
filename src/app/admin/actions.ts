'use server'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export async function deletePost(id: string) {
  const supabase = await createClient()
  await supabase.from('posts').delete().eq('id', id)
  redirect('/admin')
}
