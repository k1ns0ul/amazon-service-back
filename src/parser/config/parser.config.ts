export const PARSER_CONFIG = {
  productsLimit: 50,
  concurrency: 8,
  intraProductDelayMs: 500,

  http: {
    timeoutMs: 20_000,
    maxAttempts: 3,
    retryBaseMs: 1_000,
    retryJitterMs: 500,
  },

  circuitBreaker: {
    threshold: 5,
    cooldownMs: 30_000,
  },

  session: {
    refreshIntervalMs: 24 * 60 * 60 * 1000,
    ttlMs: 24 * 60 * 60 * 1000,
  },

  userAgents: [
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36 Edg/143.0.0.0',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_7_2) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.2 Safari/605.1.15',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
  ],

  viewports: [
    { width: '1280', dpr: '1' },
    { width: '1440', dpr: '2' },
    { width: '1920', dpr: '1' },
    { width: '1366', dpr: '1' },
    { width: '1536', dpr: '2' },
  ],
} as const