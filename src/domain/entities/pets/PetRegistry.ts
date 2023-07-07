import { IPetChip } from './IChip'
import { IOwner } from '../owners/owner'

export interface IPetRegistry {
  owner_id: string
  name: string
  country: string
  date_of_birth: Date
  sex: string
  coat: string
  specie: string
  breed: string
  obtained_from?: string
  sterilised?: boolean
  is_chipped?: boolean
  others?: string
  isCountryChanged?: boolean
  chip?: IPetChip
}

export interface IPetIdentificationOwner {
  type: string
  id: string
}

export function getPetOwnerID(owner: IOwner): IPetIdentificationOwner {
  if (owner?.identification?.DNI) {
    return {
      type: 'DNI',
      id: owner?.identification?.DNI?.DNI || '',
    }
  }
  if (owner?.identification?.passport) {
    return {
      type: 'passport',
      id: owner?.identification?.passport?.passport || '',
    }
  }
  return {} as IPetIdentificationOwner
}
