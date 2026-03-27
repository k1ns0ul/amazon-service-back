export declare const UserRole: {
    readonly USER: "USER";
    readonly ADMIN: "ADMIN";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const ParseJobType: {
    readonly OWN_PRODUCTS: "OWN_PRODUCTS";
    readonly COMPETITORS: "COMPETITORS";
    readonly CATEGORY_TRENDS: "CATEGORY_TRENDS";
};
export type ParseJobType = (typeof ParseJobType)[keyof typeof ParseJobType];
export declare const ParseJobStatus: {
    readonly PENDING: "PENDING";
    readonly RUNNING: "RUNNING";
    readonly DONE: "DONE";
    readonly FAILED: "FAILED";
};
export type ParseJobStatus = (typeof ParseJobStatus)[keyof typeof ParseJobStatus];
export declare const ParseStatus: {
    readonly OK: "OK";
    readonly CAPTCHA: "CAPTCHA";
    readonly PARSE_ERROR: "PARSE_ERROR";
    readonly NETWORK_ERROR: "NETWORK_ERROR";
};
export type ParseStatus = (typeof ParseStatus)[keyof typeof ParseStatus];
export declare const ProxyStatus: {
    readonly UNKNOWN: "UNKNOWN";
    readonly OK: "OK";
    readonly BANNED: "BANNED";
    readonly DEAD: "DEAD";
};
export type ProxyStatus = (typeof ProxyStatus)[keyof typeof ProxyStatus];
