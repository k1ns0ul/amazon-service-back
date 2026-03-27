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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const parse_category_trends_dto_1 = require("./dto/parse-category-trends.dto");
const parse_category_trends_command_1 = require("../application/commands/parse-category-trends/parse-category-trends.command");
const get_category_trends_query_1 = require("../application/queries/get-category-trends/get-category-trends.query");
const constants_1 = require("./constants");
let UserController = class UserController {
    commandBus;
    queryBus;
    constructor(commandBus, queryBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
    }
    async parseTrends(dto) {
        const jobId = await this.commandBus.execute(new parse_category_trends_command_1.ParseCategoryTrendsCommand(constants_1.DEFAULT_USER_ID, dto.nodeId, dto.limit ?? 50));
        return { ok: true, jobId };
    }
    async getTrends(jobId) {
        const data = await this.queryBus.execute(new get_category_trends_query_1.GetCategoryTrendsQuery(constants_1.DEFAULT_USER_ID, jobId));
        return { ok: true, data };
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)('trends'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [parse_category_trends_dto_1.ParseCategoryTrendsDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "parseTrends", null);
__decorate([
    (0, common_1.Get)('trends/:jobId'),
    __param(0, (0, common_1.Param)('jobId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getTrends", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('parser'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true })),
    __metadata("design:paramtypes", [cqrs_1.CommandBus,
        cqrs_1.QueryBus])
], UserController);
//# sourceMappingURL=user.controller.js.map