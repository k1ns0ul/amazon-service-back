import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'

@Injectable()
export class ProxyRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAllActive() {
    return this.prisma.proxyEntry.findMany({
      where: { isActive: true },
    })
  }

  async markSuccess(proxyId: string) {
    return this.prisma.proxyEntry.update({
      where: { id: proxyId },
      data: {
        failureCount: 0,
        successCount: { increment: 1 },
        lastStatus: 'OK',
      },
    })
  }

  async markFailure(proxyId: string) {
    return this.prisma.proxyEntry.update({
      where: { id: proxyId },
      data: { failureCount: { increment: 1 } },
    })
  }

  async disable(proxyId: string, untilMs: number) {
    return this.prisma.proxyEntry.update({
      where: { id: proxyId },
      data: {
        disabledUntil: new Date(Date.now() + untilMs),
        lastStatus: 'BANNED',
      },
    })
  }

  async updateHealthCheck(proxyId: string, status: 'OK' | 'BANNED' | 'DEAD') {
    return this.prisma.proxyEntry.update({
      where: { id: proxyId },
      data: { lastCheckedAt: new Date(), lastStatus: status },
    })
  }
}