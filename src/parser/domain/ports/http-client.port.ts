import { FetchResult } from '../types'

export interface HttpClientPort {
  fetchWithRetry(path: string): Promise<FetchResult>
  ping(url: string, proxyUrl: string): Promise<boolean>
}

export const HTTP_CLIENT_PORT = Symbol('HTTP_CLIENT_PORT')