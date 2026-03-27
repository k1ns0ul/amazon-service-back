export interface SessionPort {
  getCookieHeader(): Promise<string>
  forceRefresh(): Promise<void>
}

export const SESSION_PORT = Symbol('SESSION_PORT')