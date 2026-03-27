import { PrismaService } from '../prisma.service';
export declare class ProxyRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllActive(): Promise<{
        url: string;
        id: string;
        createdAt: Date;
        host: string;
        port: number;
        username: string | null;
        isActive: boolean;
        failureCount: number;
        successCount: number;
        disabledUntil: Date | null;
        lastCheckedAt: Date | null;
        lastStatus: import("../../generated/prisma/enums").ProxyStatus;
    }[]>;
    markSuccess(proxyId: string): Promise<{
        url: string;
        id: string;
        createdAt: Date;
        host: string;
        port: number;
        username: string | null;
        isActive: boolean;
        failureCount: number;
        successCount: number;
        disabledUntil: Date | null;
        lastCheckedAt: Date | null;
        lastStatus: import("../../generated/prisma/enums").ProxyStatus;
    }>;
    markFailure(proxyId: string): Promise<{
        url: string;
        id: string;
        createdAt: Date;
        host: string;
        port: number;
        username: string | null;
        isActive: boolean;
        failureCount: number;
        successCount: number;
        disabledUntil: Date | null;
        lastCheckedAt: Date | null;
        lastStatus: import("../../generated/prisma/enums").ProxyStatus;
    }>;
    disable(proxyId: string, untilMs: number): Promise<{
        url: string;
        id: string;
        createdAt: Date;
        host: string;
        port: number;
        username: string | null;
        isActive: boolean;
        failureCount: number;
        successCount: number;
        disabledUntil: Date | null;
        lastCheckedAt: Date | null;
        lastStatus: import("../../generated/prisma/enums").ProxyStatus;
    }>;
    updateHealthCheck(proxyId: string, status: 'OK' | 'BANNED' | 'DEAD'): Promise<{
        url: string;
        id: string;
        createdAt: Date;
        host: string;
        port: number;
        username: string | null;
        isActive: boolean;
        failureCount: number;
        successCount: number;
        disabledUntil: Date | null;
        lastCheckedAt: Date | null;
        lastStatus: import("../../generated/prisma/enums").ProxyStatus;
    }>;
}
