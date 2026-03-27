import { Controller, Get, Post } from '@nestjs/common'
import { PrismaService } from '../../database/prisma.service'
import { ProxyAdapter } from '../adapters/proxy.adapter'
import { HttpAdapter } from '../adapters/http.adapter'
import { SessionAdapter } from '../adapters/session.adapter'

@Controller('admin')
export class AdminController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly proxy: ProxyAdapter,
    private readonly http: HttpAdapter,
    private readonly session: SessionAdapter,
  ) {}

  @Get('stats')
  async getStats() {
    const [totalUsers, totalJobs, totalProducts, totalSnapshots, jobsByStatus, jobsByType] =
      await Promise.all([
        this.prisma.user.count(),
        this.prisma.parseJob.count(),
        this.prisma.product.count(),
        this.prisma.productSnapshot.count(),
        this.prisma.parseJob.groupBy({ by: ['status'], _count: { id: true } }),
        this.prisma.parseJob.groupBy({ by: ['type'], _count: { id: true } }),
      ])

    return {
      ok: true,
      totalUsers,
      totalJobs,
      totalProducts,
      totalSnapshots,
      jobsByStatus: Object.fromEntries(jobsByStatus.map((r) => [r.status, r._count.id])),
      jobsByType: Object.fromEntries(jobsByType.map((r) => [r.type, r._count.id])),
    }
  }

  @Get('proxy-health')
  async proxyHealth() {
    const proxies = await this.prisma.proxyEntry.findMany()

    const results = await Promise.all(
      proxies.map(async (p) => {
        const [amazonReachable, externalReachable] = await Promise.allSettled([
          this.http.ping('https://www.amazon.com', p.url),
          this.http.ping('https://httpbin.org/ip', p.url),
        ])

        const amazonOk = amazonReachable.status === 'fulfilled' && amazonReachable.value
        const externalOk = externalReachable.status === 'fulfilled' && externalReachable.value
        const status = amazonOk && externalOk ? 'OK' : !amazonOk ? 'BANNED' : 'DEAD'

        await this.prisma.proxyEntry.update({
          where: { id: p.id },
          data: { lastCheckedAt: new Date(), lastStatus: status },
        })

        return {
          url: p.url,
          status,
          failureCount: p.failureCount,
          successCount: p.successCount,
          disabledUntil: p.disabledUntil,
          lastCheckedAt: new Date(),
          amazonReachable: amazonOk,
          externalReachable: externalOk,
        }
      }),
    )

    return { ok: true, proxies: results }
  }

  @Get('cookie-status')
  async cookieStatus() {
    const sessions = await this.prisma.cookieSession.findMany({
      orderBy: { capturedAt: 'desc' },
    })

    return {
      ok: true,
      sessions: sessions.map((s) => ({
        id: s.id,
        isValid: s.isValid,
        capturedAt: s.capturedAt,
        expiresAt: s.expiresAt,
        lastUsedAt: s.lastUsedAt,
        isExpired: s.expiresAt < new Date(),
      })),
    }
  }

  @Post('cookie-refresh')
  async cookieRefresh() {
    await this.session.forceRefresh()
    return { ok: true, message: 'Cookie refresh triggered' }
  }
}