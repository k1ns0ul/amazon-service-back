"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyStatus = exports.ParseStatus = exports.ParseJobStatus = exports.ParseJobType = exports.UserRole = void 0;
exports.UserRole = {
    USER: 'USER',
    ADMIN: 'ADMIN'
};
exports.ParseJobType = {
    OWN_PRODUCTS: 'OWN_PRODUCTS',
    COMPETITORS: 'COMPETITORS',
    CATEGORY_TRENDS: 'CATEGORY_TRENDS'
};
exports.ParseJobStatus = {
    PENDING: 'PENDING',
    RUNNING: 'RUNNING',
    DONE: 'DONE',
    FAILED: 'FAILED'
};
exports.ParseStatus = {
    OK: 'OK',
    CAPTCHA: 'CAPTCHA',
    PARSE_ERROR: 'PARSE_ERROR',
    NETWORK_ERROR: 'NETWORK_ERROR'
};
exports.ProxyStatus = {
    UNKNOWN: 'UNKNOWN',
    OK: 'OK',
    BANNED: 'BANNED',
    DEAD: 'DEAD'
};
//# sourceMappingURL=enums.js.map