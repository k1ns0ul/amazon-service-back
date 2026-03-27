export declare const PARSER_CONFIG: {
    readonly productsLimit: 50;
    readonly concurrency: 8;
    readonly intraProductDelayMs: 500;
    readonly http: {
        readonly timeoutMs: 20000;
        readonly maxAttempts: 3;
        readonly retryBaseMs: 1000;
        readonly retryJitterMs: 500;
    };
    readonly circuitBreaker: {
        readonly threshold: 5;
        readonly cooldownMs: 30000;
    };
    readonly session: {
        readonly refreshIntervalMs: number;
        readonly ttlMs: number;
    };
    readonly userAgents: readonly ["Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36 Edg/143.0.0.0", "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_7_2) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.2 Safari/605.1.15", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36"];
    readonly viewports: readonly [{
        readonly width: "1280";
        readonly dpr: "1";
    }, {
        readonly width: "1440";
        readonly dpr: "2";
    }, {
        readonly width: "1920";
        readonly dpr: "1";
    }, {
        readonly width: "1366";
        readonly dpr: "1";
    }, {
        readonly width: "1536";
        readonly dpr: "2";
    }];
};
