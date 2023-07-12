import { Option } from '../../../domain/interfaces/select'
import { Baseprop } from '../../../domain/interfaces/baseprop'

export interface SelectProps extends Baseprop {
  name: string
  options: Array<Option>
}
