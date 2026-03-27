"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ProductParsedHandler_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductParsedHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const common_1 = require("@nestjs/common");
const product_parsed_event_1 = require("./product-parsed.event");
let ProductParsedHandler = ProductParsedHandler_1 = class ProductParsedHandler {
    logger = new common_1.Logger(ProductParsedHandler_1.name);
    handle(event) {
        this.logger.debug(`ProductParsed asin=${event.asin} job=${event.jobId}`);
    }
};
exports.ProductParsedHandler = ProductParsedHandler;
exports.ProductParsedHandler = ProductParsedHandler = ProductParsedHandler_1 = __decorate([
    (0, cqrs_1.EventsHandler)(product_parsed_event_1.ProductParsedEvent)
], ProductParsedHandler);
//# sourceMappingURL=product-parsed.handler.js.map