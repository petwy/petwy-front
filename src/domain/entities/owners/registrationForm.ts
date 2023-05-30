import { Identification } from './owner'
import { Address } from '../address'
import { Phone } from '../phone'

export interface RegistrationFormProps {
  onSubmit: (data: OwnerRegistry) => void
}

export interface OwnerRegistry {
  name: string
  surname: string
  email: string
  username: string
  identification: Identification
  address: Address
  phone: Phone
}
