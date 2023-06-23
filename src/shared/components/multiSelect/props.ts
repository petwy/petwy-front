import { Baseprop } from '../../../domain/interfaces/baseprop'
import { Option } from '../../../domain/interfaces/select'

export interface SelectProps extends Baseprop {
  name: string
  data: Array<Option>
}
