"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.CookieSessionScalarFieldEnum = exports.ProxyEntryScalarFieldEnum = exports.ReviewScalarFieldEnum = exports.ProductSnapshotScalarFieldEnum = exports.ProductScalarFieldEnum = exports.ParseJobScalarFieldEnum = exports.CategoryScalarFieldEnum = exports.SellerProfileScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    SellerProfile: 'SellerProfile',
    Category: 'Category',
    ParseJob: 'ParseJob',
    Product: 'Product',
    ProductSnapshot: 'ProductSnapshot',
    Review: 'Review',
    ProxyEntry: 'ProxyEntry',
    CookieSession: 'CookieSession'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    apiKey: 'apiKey',
    email: 'email',
    role: 'role',
    createdAt: 'createdAt'
};
exports.SellerProfileScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    amazonSellerId: 'amazonSellerId',
    name: 'name',
    createdAt: 'createdAt'
};
exports.CategoryScalarFieldEnum = {
    id: 'id',
    nodeId: 'nodeId',
    name: 'name',
    lastParsedAt: 'lastParsedAt',
    createdAt: 'createdAt'
};
exports.ParseJobScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    categoryId: 'categoryId',
    sellerProfileId: 'sellerProfileId',
    type: 'type',
    status: 'status',
    productsFound: 'productsFound',
    productsOk: 'productsOk',
    productsFailed: 'productsFailed',
    requestedAt: 'requestedAt',
    startedAt: 'startedAt',
    finishedAt: 'finishedAt',
    durationMs: 'durationMs',
    errorMessage: 'errorMessage'
};
exports.ProductScalarFieldEnum = {
    id: 'id',
    asin: 'asin',
    categoryId: 'categoryId',
    title: 'title',
    sellerId: 'sellerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ProductSnapshotScalarFieldEnum = {
    id: 'id',
    productId: 'productId',
    parseJobId: 'parseJobId',
    price: 'price',
    currency: 'currency',
    rating: 'rating',
    reviewCount: 'reviewCount',
    parseStatus: 'parseStatus',
    capturedAt: 'capturedAt'
};
exports.ReviewScalarFieldEnum = {
    id: 'id',
    productId: 'productId',
    externalId: 'externalId',
    title: 'title',
    rating: 'rating',
    reviewDate: 'reviewDate',
    rawDateText: 'rawDateText',
    capturedAt: 'capturedAt'
};
exports.ProxyEntryScalarFieldEnum = {
    id: 'id',
    url: 'url',
    host: 'host',
    port: 'port',
    username: 'username',
    isActive: 'isActive',
    failureCount: 'failureCount',
    successCount: 'successCount',
    disabledUntil: 'disabledUntil',
    lastCheckedAt: 'lastCheckedAt',
    lastStatus: 'lastStatus',
    createdAt: 'createdAt'
};
exports.CookieSessionScalarFieldEnum = {
    id: 'id',
    cookieHeader: 'cookieHeader',
    isValid: 'isValid',
    capturedAt: 'capturedAt',
    expiresAt: 'expiresAt',
    lastUsedAt: 'lastUsedAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map