import { IUseCaseCli } from './framework/use-case/cli'
import DigitalHealthCli from '../digital-health/cli'

export const useCasesCli: Record<string, IUseCaseCli> = { ...DigitalHealthCli }
