import { Option } from '../../domain/interfaces/IOption'

export const weight_type_measure: Array<Option> = [
  { value: 'kg', label: 'kilos', code: 'kg' },
  { value: 'gr', label: 'gramos', code: 'gr' },
]

export const getWeightTypeMeasureLabel = (value: string): string => {
  if (value === undefined || value === '') return 'kilos'
  return weight_type_measure.filter((f) => f.value === value)[0].label
}
