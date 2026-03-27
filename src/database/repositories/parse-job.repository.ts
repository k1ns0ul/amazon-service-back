import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'

interface CreateJobData {
  userId: string
  nodeId: string
  type: 'OWN_PRODUCTS' | 'COMPETITORS' | 'CATEGORY_TRENDS'
  sellerProfileId?: string
}

interface DoneStats {
  productsFound: number
  productsOk: number
  productsFailed: number
  durationMs: number
}

@Injectable()
export class ParseJobRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateJobData) {
    const category = await this.prisma.category.upsert({
      where: { nodeId: data.nodeId },
      create: { nodeId: data.nodeId },
      update: {},
    })

    return this.prisma.parseJob.create({
      data: {
        userId: data.userId,
        categoryId: category.id,
        type: data.type,
        status: 'PENDING',
        sellerProfileId: data.sellerProfileId ?? null,
      },
    })
  }

  async markRunning(jobId: string) {
    return this.prisma.parseJob.update({
      where: { id: jobId },
      data: { status: 'RUNNING', startedAt: new Date() },
    })
  }

  async markDone(jobId: string, stats: DoneStats) {
    return this.prisma.parseJob.update({
      where: { id: jobId },
      data: { status: 'DONE', finishedAt: new Date(), ...stats },
    })
  }

  async markFailed(jobId: string, errorMessage: string) {
    return this.prisma.parseJob.update({
      where: { id: jobId },
      data: { status: 'FAILED', finishedAt: new Date(), errorMessage },
    })
  }

  async findByIdWithProducts(jobId: string, userId: string) {
    return this.prisma.parseJob.findFirst({
      where: { id: jobId, userId },
      include: {
        snapshots: {
          include: { product: true },
          orderBy: { capturedAt: 'desc' },
        },
        category: true,
      },
    })
  }

  async findById(jobId: string) {
    return this.prisma.parseJob.findUnique({
      where: { id: jobId },
      include: { category: true },
    })
  }
}