import { Baseprop } from '../../../../domain/interfaces/baseprop'

export interface SuccessProps extends Baseprop {
  name: string
  surname: string
  email: string
  hide: () => void
}
