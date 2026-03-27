import { DomainError } from '../../../common/domain/domain-error';
export declare class FetchFailedError extends DomainError {
    readonly code = "FETCH_FAILED";
    constructor(path: string, reason: string);
}
