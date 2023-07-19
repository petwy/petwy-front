import { Option } from '../../domain/interfaces/IOption'

export const diseaseSeverityOption: Array<Option> = [
  {
    label: 'No Aplica',
    code: 'none',
    value: 'none',
  },
  {
    label: 'Media',
    code: 'medium',
    value: 'medium',
  },
  {
    label: 'Baja',
    code: 'low',
    value: 'low',
  },
  {
    label: 'Alta',
    code: 'high',
    value: 'high',
  },
]
