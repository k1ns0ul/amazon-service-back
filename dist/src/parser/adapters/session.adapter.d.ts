import { OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { PuppeteerAdapter } from './puppeteer.adapter';
export declare class SessionAdapter implements OnModuleInit {
    private readonly prisma;
    private readonly puppeteer;
    private readonly logger;
    private refreshPromise;
    constructor(prisma: PrismaService, puppeteer: PuppeteerAdapter);
    onModuleInit(): Promise<void>;
    getCookieHeader(): Promise<string>;
    forceRefresh(): Promise<void>;
    private refresh;
}
