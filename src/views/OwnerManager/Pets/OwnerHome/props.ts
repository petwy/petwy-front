import { Baseprop } from '../../../../domain/interfaces/baseprop'
import { IOwner } from '../../../../domain/entities/owners/owner'

export interface OwnerHomeProps extends Baseprop {
  owner: IOwner
}
