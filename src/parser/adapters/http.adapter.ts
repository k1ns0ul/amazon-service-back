import { Injectable, Logger } from '@nestjs/common'
import axios, { AxiosInstance, AxiosError, AxiosRequestConfig } from 'axios'
import { HttpsProxyAgent } from 'https-proxy-agent'
import { PARSER_CONFIG } from '../config/parser.config'
import { SessionAdapter } from './session.adapter'
import { ProxyAdapter } from './proxy.adapter'
import { FetchResult } from '../domain/types'

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))
const pick = <T>(arr: readonly T[]): T => arr[Math.floor(Math.random() * arr.length)]
const jitter = (max: number) => Math.floor(Math.random() * max)

@Injectable()
export class HttpAdapter {
  private readonly logger = new Logger(HttpAdapter.name)
  private readonly client: AxiosInstance
  private consecutiveErrors = 0
  private circuitOpenedAt: number | null = null

  constructor(
    private readonly session: SessionAdapter,
    private readonly proxy: ProxyAdapter,
  ) {
    this.client = axios.create({
      baseURL: 'https://www.amazon.com',
      timeout: PARSER_CONFIG.http.timeoutMs,
      decompress: true,
    })
  }

  async fetchWithRetry(path: string): Promise<FetchResult> {
    const circuitBlock = await this.checkCircuit()
    if (circuitBlock) return circuitBlock

    const { maxAttempts, retryBaseMs, retryJitterMs } = PARSER_CONFIG.http

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      const t0 = Date.now()
      const proxyUrl = this.proxy.getNext()
      const ua = pick(PARSER_CONFIG.userAgents)
      const vp = pick(PARSER_CONFIG.viewports)
      const cookie = await this.session.getCookieHeader()

      const config: AxiosRequestConfig = {
        headers: {
          'User-Agent': ua,
          Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.9',
          'Accept-Encoding': 'gzip, deflate, br',
          Connection: 'keep-alive',
          'Upgrade-Insecure-Requests': '1',
          'Cache-Control': 'max-age=0',
          'viewport-width': vp.width,
          dpr: vp.dpr,
          ...(cookie ? { Cookie: cookie } : {}),
        },
        ...(proxyUrl
          ? { proxy: false, httpsAgent: new HttpsProxyAgent(proxyUrl) }
          : {}),
      }

      try {
        if (attempt > 1) {
          const backoff = Math.pow(2, attempt - 1) * retryBaseMs + jitter(retryJitterMs)
          this.logger.warn(`[retry ${attempt}/${maxAttempts}] ${path} — ${backoff}ms`)
          await sleep(backoff)
        }

        const res = await this.client.get(path, config)
        const ms = Date.now() - t0

        this.logger.log(`GET ${path} → ${res.status} (${ms}ms)`)
        this.consecutiveErrors = 0
        if (proxyUrl) this.proxy.markSuccess(proxyUrl)

        return { ok: true, html: res.data }
      } catch (err) {
        const e = err as AxiosError
        const status = e.response?.status
        const ms = Date.now() - t0

        this.logger.warn(`GET ${path} → ${status ?? e.code} attempt=${attempt} (${ms}ms)`)
        this.incrementErrors()
        if (proxyUrl) this.proxy.markFailure(proxyUrl)

        if (attempt === maxAttempts) {
          if (status === 429 || status === 503) return { ok: false, reason: 'blocked', status }
          if (e.code === 'ECONNABORTED' || e.code === 'ETIMEDOUT') return { ok: false, reason: 'timeout' }
          return { ok: false, reason: 'network_error' }
        }
      }
    }

    return { ok: false, reason: 'network_error' }
  }

  async ping(url: string, proxyUrl: string): Promise<boolean> {
    try {
      await axios.get(url, {
        timeout: 8_000,
        httpsAgent: new HttpsProxyAgent(proxyUrl),
        proxy: false,
      })
      return true
    } catch {
      return false
    }
  }

  private async checkCircuit(): Promise<FetchResult | null> {
    if (!this.circuitOpenedAt) return null

    const elapsed = Date.now() - this.circuitOpenedAt
    const { cooldownMs } = PARSER_CONFIG.circuitBreaker

    if (elapsed < cooldownMs) {
      const wait = cooldownMs - elapsed
      this.logger.error(`Circuit OPEN — cooling down ${Math.ceil(wait / 1000)}s`)
      await sleep(wait)
    }

    this.logger.log('Circuit CLOSED')
    this.circuitOpenedAt = null
    this.consecutiveErrors = 0
    return null
  }

  private incrementErrors() {
    this.consecutiveErrors++
    const { threshold } = PARSER_CONFIG.circuitBreaker

    if (this.consecutiveErrors >= threshold && !this.circuitOpenedAt) {
      this.logger.error(`Circuit OPENED after ${this.consecutiveErrors} errors`)
      this.circuitOpenedAt = Date.now()
    }
  }
}