import { DomainError } from '../../../common/domain/domain-error';
export declare class CaptchaError extends DomainError {
    readonly code = "CAPTCHA_DETECTED";
    constructor(path: string);
}
