import CountConsultsDocs from './use-cases/count-consults/index.docs'
import CountUniquePatientsDocs from './use-cases/count-unique-patients/index.docs'

export default {
  '/consult/count': {
    ...CountConsultsDocs,
  },
  'consults/unique-patients-count': {
    ...CountUniquePatientsDocs,
  },
}
