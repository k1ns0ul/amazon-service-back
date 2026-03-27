"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchFailedError = void 0;
const domain_error_1 = require("../../../common/domain/domain-error");
class FetchFailedError extends domain_error_1.DomainError {
    code = 'FETCH_FAILED';
    constructor(path, reason) {
        super(`Failed to fetch ${path}: ${reason}`);
    }
}
exports.FetchFailedError = FetchFailedError;
//# sourceMappingURL=fetch-failed.error.js.map