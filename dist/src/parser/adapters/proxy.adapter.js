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
var ProxyAdapter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyAdapter = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let ProxyAdapter = ProxyAdapter_1 = class ProxyAdapter {
    config;
    logger = new common_1.Logger(ProxyAdapter_1.name);
    proxies = [];
    currentIndex = 0;
    MAX_FAILURES = 3;
    DISABLE_MS = 5 * 60 * 1000;
    constructor(config) {
        this.config = config;
    }
    onModuleInit() {
        const raw = this.config.get('PROXY_LIST') ?? '';
        this.proxies = raw
            .split(',')
            .map((s) => s.trim())
            .filter(Boolean)
            .map((url) => ({ url, failures: 0, disabledUntil: 0 }));
        if (this.proxies.length) {
            this.logger.log(`Loaded ${this.proxies.length} proxies`);
        }
        else {
            this.logger.warn('No proxies configured');
        }
    }
    getNext() {
        if (!this.proxies.length)
            return null;
        const now = Date.now();
        const available = this.proxies.filter((p) => p.disabledUntil < now);
        if (!available.length) {
            this.logger.warn('All proxies disabled');
            return null;
        }
        const proxy = available[this.currentIndex % available.length];
        this.currentIndex++;
        return proxy.url;
    }
    markSuccess(proxyUrl) {
        const entry = this.proxies.find((p) => p.url === proxyUrl);
        if (entry)
            entry.failures = 0;
    }
    markFailure(proxyUrl) {
        const entry = this.proxies.find((p) => p.url === proxyUrl);
        if (!entry)
            return;
        entry.failures++;
        if (entry.failures >= this.MAX_FAILURES) {
            entry.disabledUntil = Date.now() + this.DISABLE_MS;
            this.logger.warn(`Proxy ${proxyUrl} disabled for ${this.DISABLE_MS / 60_000}min`);
        }
    }
};
exports.ProxyAdapter = ProxyAdapter;
exports.ProxyAdapter = ProxyAdapter = ProxyAdapter_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], ProxyAdapter);
//# sourceMappingURL=proxy.adapter.js.map