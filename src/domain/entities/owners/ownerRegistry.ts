import { Identification } from './owner'
import { Address } from '../address'
import { Phone } from '../phone'

export interface OwnerRegistry {
  name: string
  surname: string
  email: string
  email_confirmed: string
  identification: Identification
  address: Address
  phone: Phone
}
