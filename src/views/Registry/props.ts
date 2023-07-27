import { Baseprop } from '../../domain/interfaces/baseprop'

export interface OwnerRegistryProps extends Baseprop {
  show: boolean
  hide: () => void
}
