import { Global, Module } from '@nestjs/common'
import { PrismaService } from './prisma.service'
import { ProductRepository } from './repositories/product.repository'
import { ReviewRepository } from './repositories/review.repository'
import { ParseJobRepository } from './repositories/parse-job.repository'
import { ProxyRepository } from './repositories/proxy.repository'

@Global()
@Module({
  providers: [PrismaService, ProductRepository, ReviewRepository, ParseJobRepository, ProxyRepository],
  exports: [PrismaService, ProductRepository, ReviewRepository, ParseJobRepository, ProxyRepository],
})
export class DatabaseModule {}