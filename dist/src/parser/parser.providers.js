"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adapters = exports.EventHandlers = exports.QueryHandlers = exports.CommandHandlers = void 0;
const parse_category_trends_handler_1 = require("./application/commands/parse-category-trends/parse-category-trends.handler");
const get_category_trends_handler_1 = require("./application/queries/get-category-trends/get-category-trends.handler");
const product_parsed_handler_1 = require("./application/events/product-parsed.handler");
const http_adapter_1 = require("./adapters/http.adapter");
const extractor_adapter_1 = require("./adapters/extractor.adapter");
const proxy_adapter_1 = require("./adapters/proxy.adapter");
const puppeteer_adapter_1 = require("./adapters/puppeteer.adapter");
const session_adapter_1 = require("./adapters/session.adapter");
exports.CommandHandlers = [parse_category_trends_handler_1.ParseCategoryTrendsHandler];
exports.QueryHandlers = [get_category_trends_handler_1.GetCategoryTrendsHandler];
exports.EventHandlers = [product_parsed_handler_1.ProductParsedHandler];
exports.Adapters = [http_adapter_1.HttpAdapter, extractor_adapter_1.ExtractorAdapter, proxy_adapter_1.ProxyAdapter, puppeteer_adapter_1.PuppeteerAdapter, session_adapter_1.SessionAdapter];
//# sourceMappingURL=parser.providers.js.map