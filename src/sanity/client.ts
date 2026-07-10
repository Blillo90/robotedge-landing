import { createClient } from 'next-sanity'
import { projectId, dataset, apiVersion } from './env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})

export async function sanityFetch<T>(query: string, tags: string[]): Promise<T> {
  return client.fetch<T>(query, {}, { next: { tags } })
}
