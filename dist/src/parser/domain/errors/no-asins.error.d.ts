import { DomainError } from '../../../common/domain/domain-error';
export declare class NoAsinsError extends DomainError {
    readonly code = "NO_ASINS_FOUND";
    constructor(nodeId: string);
}
