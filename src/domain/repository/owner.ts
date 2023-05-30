import { Owner } from '@/domain/entities/owners/owner'

export interface OwnerCrud {
  create(o: Owner): Promise<Owner>
}
