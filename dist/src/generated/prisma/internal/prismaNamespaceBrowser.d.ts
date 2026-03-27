import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly SellerProfile: "SellerProfile";
    readonly Category: "Category";
    readonly ParseJob: "ParseJob";
    readonly Product: "Product";
    readonly ProductSnapshot: "ProductSnapshot";
    readonly Review: "Review";
    readonly ProxyEntry: "ProxyEntry";
    readonly CookieSession: "CookieSession";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly apiKey: "apiKey";
    readonly email: "email";
    readonly role: "role";
    readonly createdAt: "createdAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const SellerProfileScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly amazonSellerId: "amazonSellerId";
    readonly name: "name";
    readonly createdAt: "createdAt";
};
export type SellerProfileScalarFieldEnum = (typeof SellerProfileScalarFieldEnum)[keyof typeof SellerProfileScalarFieldEnum];
export declare const CategoryScalarFieldEnum: {
    readonly id: "id";
    readonly nodeId: "nodeId";
    readonly name: "name";
    readonly lastParsedAt: "lastParsedAt";
    readonly createdAt: "createdAt";
};
export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum];
export declare const ParseJobScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly categoryId: "categoryId";
    readonly sellerProfileId: "sellerProfileId";
    readonly type: "type";
    readonly status: "status";
    readonly productsFound: "productsFound";
    readonly productsOk: "productsOk";
    readonly productsFailed: "productsFailed";
    readonly requestedAt: "requestedAt";
    readonly startedAt: "startedAt";
    readonly finishedAt: "finishedAt";
    readonly durationMs: "durationMs";
    readonly errorMessage: "errorMessage";
};
export type ParseJobScalarFieldEnum = (typeof ParseJobScalarFieldEnum)[keyof typeof ParseJobScalarFieldEnum];
export declare const ProductScalarFieldEnum: {
    readonly id: "id";
    readonly asin: "asin";
    readonly categoryId: "categoryId";
    readonly title: "title";
    readonly sellerId: "sellerId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum];
export declare const ProductSnapshotScalarFieldEnum: {
    readonly id: "id";
    readonly productId: "productId";
    readonly parseJobId: "parseJobId";
    readonly price: "price";
    readonly currency: "currency";
    readonly rating: "rating";
    readonly reviewCount: "reviewCount";
    readonly parseStatus: "parseStatus";
    readonly capturedAt: "capturedAt";
};
export type ProductSnapshotScalarFieldEnum = (typeof ProductSnapshotScalarFieldEnum)[keyof typeof ProductSnapshotScalarFieldEnum];
export declare const ReviewScalarFieldEnum: {
    readonly id: "id";
    readonly productId: "productId";
    readonly externalId: "externalId";
    readonly title: "title";
    readonly rating: "rating";
    readonly reviewDate: "reviewDate";
    readonly rawDateText: "rawDateText";
    readonly capturedAt: "capturedAt";
};
export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum];
export declare const ProxyEntryScalarFieldEnum: {
    readonly id: "id";
    readonly url: "url";
    readonly host: "host";
    readonly port: "port";
    readonly username: "username";
    readonly isActive: "isActive";
    readonly failureCount: "failureCount";
    readonly successCount: "successCount";
    readonly disabledUntil: "disabledUntil";
    readonly lastCheckedAt: "lastCheckedAt";
    readonly lastStatus: "lastStatus";
    readonly createdAt: "createdAt";
};
export type ProxyEntryScalarFieldEnum = (typeof ProxyEntryScalarFieldEnum)[keyof typeof ProxyEntryScalarFieldEnum];
export declare const CookieSessionScalarFieldEnum: {
    readonly id: "id";
    readonly cookieHeader: "cookieHeader";
    readonly isValid: "isValid";
    readonly capturedAt: "capturedAt";
    readonly expiresAt: "expiresAt";
    readonly lastUsedAt: "lastUsedAt";
};
export type CookieSessionScalarFieldEnum = (typeof CookieSessionScalarFieldEnum)[keyof typeof CookieSessionScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
