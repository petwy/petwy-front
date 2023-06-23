import { Baseprop } from '../../../domain/interfaces/baseprop'
import { IOwner } from '../../../domain/entities/owners/owner'

export interface AddPetByOwnerProps extends Baseprop {
  owner: IOwner
  show: boolean
  hide: () => void
}
