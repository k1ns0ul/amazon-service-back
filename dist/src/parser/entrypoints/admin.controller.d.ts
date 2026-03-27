import { PrismaService } from '../../database/prisma.service';
import { ProxyAdapter } from '../adapters/proxy.adapter';
import { HttpAdapter } from '../adapters/http.adapter';
import { SessionAdapter } from '../adapters/session.adapter';
export declare class AdminController {
    private readonly prisma;
    private readonly proxy;
    private readonly http;
    private readonly session;
    constructor(prisma: PrismaService, proxy: ProxyAdapter, http: HttpAdapter, session: SessionAdapter);
    getStats(): Promise<{
        ok: boolean;
        totalUsers: number;
        totalJobs: number;
        totalProducts: number;
        totalSnapshots: number;
        jobsByStatus: {
            [k: string]: number;
        };
        jobsByType: {
            [k: string]: number;
        };
    }>;
    proxyHealth(): Promise<{
        ok: boolean;
        proxies: {
            url: string;
            status: string;
            failureCount: number;
            successCount: number;
            disabledUntil: Date | null;
            lastCheckedAt: Date;
            amazonReachable: boolean;
            externalReachable: boolean;
        }[];
    }>;
    cookieStatus(): Promise<{
        ok: boolean;
        sessions: {
            id: string;
            isValid: boolean;
            capturedAt: Date;
            expiresAt: Date;
            lastUsedAt: Date | null;
            isExpired: boolean;
        }[];
    }>;
    cookieRefresh(): Promise<{
        ok: boolean;
        message: string;
    }>;
}
