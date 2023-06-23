import { IPet } from '../pets/IPet'
import { Address } from '../address'
import { Phone } from '../phone'

export interface IOwner {
  owner_id: string
  name: string
  surname: string
  identification: Identification
  address: Address
  phone: Phone
  pets: IPet[]
}
export interface Identification {
  DNI: {
    DNI?: string
    country?: string
  }
  passport: {
    passport?: string
    country?: string
  }
}
