"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoAsinsError = void 0;
const domain_error_1 = require("../../../common/domain/domain-error");
class NoAsinsError extends domain_error_1.DomainError {
    code = 'NO_ASINS_FOUND';
    constructor(nodeId) {
        super(`No ASINs found for node ${nodeId}`);
    }
}
exports.NoAsinsError = NoAsinsError;
//# sourceMappingURL=no-asins.error.js.map