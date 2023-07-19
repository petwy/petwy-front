import { VaccineConfig } from '../../adapters/context/VaccineConfigContext'

export const vaccine_config: Array<VaccineConfig> = [
  {
    type: 'canino',
    vaccines: [
      { code: 'raby', label: 'Rabia', optional: false },
      {
        code: 'octuple',
        label: 'Octuple',
        optional: false,
      },
    ],
  },
  {
    type: 'felino',
    vaccines: [
      { code: 'raby', label: 'Rabia', optional: false },
      {
        code: 'triple',
        label: 'Triple Felina',
        optional: false,
      },
      { code: 'leucemia', label: 'Leucemia Felina', optional: false },
    ],
  },
]
