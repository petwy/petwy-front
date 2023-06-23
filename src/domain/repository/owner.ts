import { IOwner } from '../entities/owners/owner'

export interface OwnerCrud {
  create(o: IOwner): Promise<IOwner>
}
