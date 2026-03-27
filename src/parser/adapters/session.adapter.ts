import { Injectable, Logger, OnModuleInit } from '@nestjs/common'
import { PrismaService } from '../../database/prisma.service'
import { PuppeteerAdapter } from './puppeteer.adapter'
import { PARSER_CONFIG } from '../config/parser.config'

@Injectable()
export class SessionAdapter implements OnModuleInit {
  private readonly logger = new Logger(SessionAdapter.name)
  private refreshPromise: Promise<void> | null = null

  constructor(
    private readonly prisma: PrismaService,
    private readonly puppeteer: PuppeteerAdapter,
  ) {}

  async onModuleInit() {
    await this.refresh()
  }

  async getCookieHeader(): Promise<string> {
    const session = await this.prisma.cookieSession.findFirst({
      where: {
        isValid: true,
        expiresAt: { gt: new Date() },
      },
      orderBy: { capturedAt: 'desc' },
    })

    if (session) {
      await this.prisma.cookieSession.update({
        where: { id: session.id },
        data: { lastUsedAt: new Date() },
      })
      return session.cookieHeader
    }

    if (!this.refreshPromise) {
      this.refreshPromise = this.refresh().finally(() => {
        this.refreshPromise = null
      })
    }

    await this.refreshPromise

    const fresh = await this.prisma.cookieSession.findFirst({
      where: { isValid: true },
      orderBy: { capturedAt: 'desc' },
    })

    return fresh?.cookieHeader ?? ''
  }

  async forceRefresh(): Promise<void> {
    if (!this.refreshPromise) {
      this.refreshPromise = this.refresh().finally(() => {
        this.refreshPromise = null
      })
    }
    await this.refreshPromise
  }

  private async refresh(): Promise<void> {
    try {
      this.logger.log('Refreshing cookie session...')

      const cookieHeader = await this.puppeteer.login()

      if (!cookieHeader) {
        this.logger.warn('Login returned empty cookie')
        return
      }

      await this.prisma.cookieSession.updateMany({
        where: { isValid: true },
        data: { isValid: false },
      })

      await this.prisma.cookieSession.create({
        data: {
          cookieHeader,
          isValid: true,
          capturedAt: new Date(),
          expiresAt: new Date(Date.now() + PARSER_CONFIG.session.ttlMs),
        },
      })

      this.logger.log('Cookie session saved to DB')
    } catch (e) {
      this.logger.error(`Session refresh failed: ${e.message}`)
    }
  }
}