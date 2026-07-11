import { createClient, type SanityClient } from 'next-sanity'
import { projectId, dataset, apiVersion } from './env'

let _client: SanityClient | null = null

function getClient(): SanityClient {
  if (!_client) {
    _client = createClient({ projectId, dataset, apiVersion, useCdn: false })
  }
  return _client
}

export async function sanityFetch<T>(query: string, tags: string[]): Promise<T> {
  return getClient().fetch<T>(query, {}, { next: { tags } })
}
