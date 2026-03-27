import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common'
import { PrismaClient } from '../generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const createPrismaClient = () => {
  const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
  })
  return new PrismaClient({ adapter })
}

type ExtendedPrismaClient = ReturnType<typeof createPrismaClient>

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name)
  private readonly client: ExtendedPrismaClient

  constructor() {
    this.client = createPrismaClient()
  }

  get user() { return this.client.user }
  get sellerProfile() { return this.client.sellerProfile }
  get category() { return this.client.category }
  get parseJob() { return this.client.parseJob }
  get product() { return this.client.product }
  get productSnapshot() { return this.client.productSnapshot }
  get review() { return this.client.review }
  get proxyEntry() { return this.client.proxyEntry }
  get cookieSession() { return this.client.cookieSession }

  async onModuleInit() {
    await this.client.$connect()
    this.logger.log('Database connected')
  }

  async onModuleDestroy() {
    await this.client.$disconnect()
  }
}