import { DomainError } from '../../../common/domain/domain-error'

export class CaptchaError extends DomainError {
  readonly code = 'CAPTCHA_DETECTED'

  constructor(path: string) {
    super(`Captcha detected on ${path}`)
  }
}