"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParserModule = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const parser_providers_1 = require("./parser.providers");
const user_controller_1 = require("./entrypoints/user.controller");
const admin_controller_1 = require("./entrypoints/admin.controller");
const database_module_1 = require("../database/database.module");
let ParserModule = class ParserModule {
};
exports.ParserModule = ParserModule;
exports.ParserModule = ParserModule = __decorate([
    (0, common_1.Module)({
        imports: [cqrs_1.CqrsModule, database_module_1.DatabaseModule],
        controllers: [user_controller_1.UserController, admin_controller_1.AdminController],
        providers: [...parser_providers_1.CommandHandlers, ...parser_providers_1.QueryHandlers, ...parser_providers_1.EventHandlers, ...parser_providers_1.Adapters],
    })
], ParserModule);
//# sourceMappingURL=parser.module.js.map