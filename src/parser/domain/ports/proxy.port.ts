export interface ProxyPort {
  getNext(): string | null
  markSuccess(proxyUrl: string): void
  markFailure(proxyUrl: string): void
}

export const PROXY_PORT = Symbol('PROXY_PORT')