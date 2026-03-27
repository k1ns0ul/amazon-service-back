export interface ProxyPort {
    getNext(): string | null;
    markSuccess(proxyUrl: string): void;
    markFailure(proxyUrl: string): void;
}
export declare const PROXY_PORT: unique symbol;
