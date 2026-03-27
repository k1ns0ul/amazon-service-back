import { FetchResult } from '../types';
export interface HttpClientPort {
    fetchWithRetry(path: string): Promise<FetchResult>;
    ping(url: string, proxyUrl: string): Promise<boolean>;
}
export declare const HTTP_CLIENT_PORT: unique symbol;
