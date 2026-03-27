export interface SessionPort {
    getCookieHeader(): Promise<string>;
    forceRefresh(): Promise<void>;
}
export declare const SESSION_PORT: unique symbol;
