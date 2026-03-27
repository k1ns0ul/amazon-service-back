import { OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
export declare class ProxyAdapter implements OnModuleInit {
    private readonly config;
    private readonly logger;
    private proxies;
    private currentIndex;
    private readonly MAX_FAILURES;
    private readonly DISABLE_MS;
    constructor(config: ConfigService);
    onModuleInit(): void;
    getNext(): string | null;
    markSuccess(proxyUrl: string): void;
    markFailure(proxyUrl: string): void;
}
