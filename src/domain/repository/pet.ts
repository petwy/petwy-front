import { IPet } from '../entities/pets/IPet'
import { IPetRegistry } from '../entities/pets/PetRegistry'
import { IPetIdentificationOwner } from '../entities/pets/IPetIdentificationOwner'

export interface PetCrud {
  create(id: IPetIdentificationOwner, o: IPetRegistry): Promise<IPet>
}
