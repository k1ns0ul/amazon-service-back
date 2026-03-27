import { PrismaClient } from '../src/generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

async function main() {
  await prisma.user.upsert({
    where: { email: 'default@amazon-service.local' },
    create: {
      id: 'default-user',
      email: 'default@amazon-service.local',
      apiKey: 'default-api-key',
      role: 'USER',
    },
    update: {},
  })

  console.log('Seed done')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())