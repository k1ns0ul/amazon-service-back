"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaptchaError = void 0;
const domain_error_1 = require("../../../common/domain/domain-error");
class CaptchaError extends domain_error_1.DomainError {
    code = 'CAPTCHA_DETECTED';
    constructor(path) {
        super(`Captcha detected on ${path}`);
    }
}
exports.CaptchaError = CaptchaError;
//# sourceMappingURL=captcha.error.js.map