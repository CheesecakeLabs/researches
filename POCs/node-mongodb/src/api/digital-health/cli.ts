import { IUseCaseCli } from 'api/core/framework/use-case/cli'

import { TempSeedUseCase } from './v1/use-cases/temp/seed'

export default {
  TEMP_SEED: TempSeedUseCase.init(),
} as Record<string, IUseCaseCli>
