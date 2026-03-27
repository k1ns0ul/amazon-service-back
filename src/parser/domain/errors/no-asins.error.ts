import { DomainError } from '../../../common/domain/domain-error'

export class NoAsinsError extends DomainError {
  readonly code = 'NO_ASINS_FOUND'

  constructor(nodeId: string) {
    super(`No ASINs found for node ${nodeId}`)
  }
}