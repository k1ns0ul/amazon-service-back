"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var HttpAdapter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpAdapter = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = __importDefault(require("axios"));
const https_proxy_agent_1 = require("https-proxy-agent");
const parser_config_1 = require("../config/parser.config");
const session_adapter_1 = require("./session.adapter");
const proxy_adapter_1 = require("./proxy.adapter");
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const jitter = (max) => Math.floor(Math.random() * max);
let HttpAdapter = HttpAdapter_1 = class HttpAdapter {
    session;
    proxy;
    logger = new common_1.Logger(HttpAdapter_1.name);
    client;
    consecutiveErrors = 0;
    circuitOpenedAt = null;
    constructor(session, proxy) {
        this.session = session;
        this.proxy = proxy;
        this.client = axios_1.default.create({
            baseURL: 'https://www.amazon.com',
            timeout: parser_config_1.PARSER_CONFIG.http.timeoutMs,
            decompress: true,
        });
    }
    async fetchWithRetry(path) {
        const circuitBlock = await this.checkCircuit();
        if (circuitBlock)
            return circuitBlock;
        const { maxAttempts, retryBaseMs, retryJitterMs } = parser_config_1.PARSER_CONFIG.http;
        for (let attempt = 1; attempt <= maxAttempts; attempt++) {
            const t0 = Date.now();
            const proxyUrl = this.proxy.getNext();
            const ua = pick(parser_config_1.PARSER_CONFIG.userAgents);
            const vp = pick(parser_config_1.PARSER_CONFIG.viewports);
            const cookie = await this.session.getCookieHeader();
            const config = {
                headers: {
                    'User-Agent': ua,
                    Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                    'Accept-Language': 'en-US,en;q=0.9',
                    'Accept-Encoding': 'gzip, deflate, br',
                    Connection: 'keep-alive',
                    'Upgrade-Insecure-Requests': '1',
                    'Cache-Control': 'max-age=0',
                    'viewport-width': vp.width,
                    dpr: vp.dpr,
                    ...(cookie ? { Cookie: cookie } : {}),
                },
                ...(proxyUrl
                    ? { proxy: false, httpsAgent: new https_proxy_agent_1.HttpsProxyAgent(proxyUrl) }
                    : {}),
            };
            try {
                if (attempt > 1) {
                    const backoff = Math.pow(2, attempt - 1) * retryBaseMs + jitter(retryJitterMs);
                    this.logger.warn(`[retry ${attempt}/${maxAttempts}] ${path} — ${backoff}ms`);
                    await sleep(backoff);
                }
                const res = await this.client.get(path, config);
                const ms = Date.now() - t0;
                this.logger.log(`GET ${path} → ${res.status} (${ms}ms)`);
                this.consecutiveErrors = 0;
                if (proxyUrl)
                    this.proxy.markSuccess(proxyUrl);
                return { ok: true, html: res.data };
            }
            catch (err) {
                const e = err;
                const status = e.response?.status;
                const ms = Date.now() - t0;
                this.logger.warn(`GET ${path} → ${status ?? e.code} attempt=${attempt} (${ms}ms)`);
                this.incrementErrors();
                if (proxyUrl)
                    this.proxy.markFailure(proxyUrl);
                if (attempt === maxAttempts) {
                    if (status === 429 || status === 503)
                        return { ok: false, reason: 'blocked', status };
                    if (e.code === 'ECONNABORTED' || e.code === 'ETIMEDOUT')
                        return { ok: false, reason: 'timeout' };
                    return { ok: false, reason: 'network_error' };
                }
            }
        }
        return { ok: false, reason: 'network_error' };
    }
    async ping(url, proxyUrl) {
        try {
            await axios_1.default.get(url, {
                timeout: 8_000,
                httpsAgent: new https_proxy_agent_1.HttpsProxyAgent(proxyUrl),
                proxy: false,
            });
            return true;
        }
        catch {
            return false;
        }
    }
    async checkCircuit() {
        if (!this.circuitOpenedAt)
            return null;
        const elapsed = Date.now() - this.circuitOpenedAt;
        const { cooldownMs } = parser_config_1.PARSER_CONFIG.circuitBreaker;
        if (elapsed < cooldownMs) {
            const wait = cooldownMs - elapsed;
            this.logger.error(`Circuit OPEN — cooling down ${Math.ceil(wait / 1000)}s`);
            await sleep(wait);
        }
        this.logger.log('Circuit CLOSED');
        this.circuitOpenedAt = null;
        this.consecutiveErrors = 0;
        return null;
    }
    incrementErrors() {
        this.consecutiveErrors++;
        const { threshold } = parser_config_1.PARSER_CONFIG.circuitBreaker;
        if (this.consecutiveErrors >= threshold && !this.circuitOpenedAt) {
            this.logger.error(`Circuit OPENED after ${this.consecutiveErrors} errors`);
            this.circuitOpenedAt = Date.now();
        }
    }
};
exports.HttpAdapter = HttpAdapter;
exports.HttpAdapter = HttpAdapter = HttpAdapter_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [session_adapter_1.SessionAdapter,
        proxy_adapter_1.ProxyAdapter])
], HttpAdapter);
//# sourceMappingURL=http.adapter.js.map