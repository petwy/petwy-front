import { Baseprop } from '../../../../../domain/interfaces/baseprop'
import { IOwner } from '../../../../../domain/entities/owners/owner'

export interface FormNewPetProps extends Baseprop {
  owner: IOwner
}
