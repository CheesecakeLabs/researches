import { IUseCaseBase } from '.'

export type CliProperty = {
  name: string
  validator?: RegExp
  warning?: string
  hidden?: boolean
}

export interface IUseCaseCli extends IUseCaseBase {
  executeCli(request: unknown): void
  getCliProperties(): CliProperty[]
}
