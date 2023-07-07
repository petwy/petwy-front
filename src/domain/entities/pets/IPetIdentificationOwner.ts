import { Identification } from '../owners/owner'

export interface IPetIdentificationOwner {
  type: string
  id: string
}

export function getIdentificationOwner(id: Identification): IPetIdentificationOwner {
  if (id === undefined) {
    return {} as IPetIdentificationOwner
  }
  if (Object.keys(id?.DNI).length > 0) {
    return {
      type: 'DNI',
      id: id.DNI.DNI as string,
    }
  }

  if (Object.keys(id?.passport).length > 0) {
    return {
      type: 'passport',
      id: id.passport.passport as string,
    }
  }
  return {} as IPetIdentificationOwner
}
