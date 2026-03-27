import { Injectable, Logger, OnModuleInit } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

interface ProxyEntry {
  url: string
  failures: number
  disabledUntil: number
}

@Injectable()
export class ProxyAdapter implements OnModuleInit {
  private readonly logger = new Logger(ProxyAdapter.name)
  private proxies: ProxyEntry[] = []
  private currentIndex = 0
  private readonly MAX_FAILURES = 3
  private readonly DISABLE_MS = 5 * 60 * 1000

  constructor(private readonly config: ConfigService) {}

  onModuleInit() {
    const raw = this.config.get<string>('PROXY_LIST') ?? ''

    this.proxies = raw
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)
      .map((url) => ({ url, failures: 0, disabledUntil: 0 }))

    if (this.proxies.length) {
      this.logger.log(`Loaded ${this.proxies.length} proxies`)
    } else {
      this.logger.warn('No proxies configured')
    }
  }

  getNext(): string | null {
    if (!this.proxies.length) return null

    const now = Date.now()
    const available = this.proxies.filter((p) => p.disabledUntil < now)

    if (!available.length) {
      this.logger.warn('All proxies disabled')
      return null
    }

    const proxy = available[this.currentIndex % available.length]
    this.currentIndex++
    return proxy.url
  }

  markSuccess(proxyUrl: string) {
    const entry = this.proxies.find((p) => p.url === proxyUrl)
    if (entry) entry.failures = 0
  }

  markFailure(proxyUrl: string) {
    const entry = this.proxies.find((p) => p.url === proxyUrl)
    if (!entry) return

    entry.failures++

    if (entry.failures >= this.MAX_FAILURES) {
      entry.disabledUntil = Date.now() + this.DISABLE_MS
      this.logger.warn(`Proxy ${proxyUrl} disabled for ${this.DISABLE_MS / 60_000}min`)
    }
  }
}