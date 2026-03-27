"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("../src/generated/prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const adapter = new adapter_pg_1.PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new client_1.PrismaClient({ adapter });
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
    });
    console.log('Seed done');
}
main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
//# sourceMappingURL=seed.js.map