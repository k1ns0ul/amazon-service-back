import { DomainError } from '../../../common/domain/domain-error'

export class FetchFailedError extends DomainError {
  readonly code = 'FETCH_FAILED'

  constructor(path: string, reason: string) {
    super(`Failed to fetch ${path}: ${reason}`)
  }
}