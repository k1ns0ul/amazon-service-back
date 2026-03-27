import { SessionAdapter } from './session.adapter';
import { ProxyAdapter } from './proxy.adapter';
import { FetchResult } from '../domain/types';
export declare class HttpAdapter {
    private readonly session;
    private readonly proxy;
    private readonly logger;
    private readonly client;
    private consecutiveErrors;
    private circuitOpenedAt;
    constructor(session: SessionAdapter, proxy: ProxyAdapter);
    fetchWithRetry(path: string): Promise<FetchResult>;
    ping(url: string, proxyUrl: string): Promise<boolean>;
    private checkCircuit;
    private incrementErrors;
}
