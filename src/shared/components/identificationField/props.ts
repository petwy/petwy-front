import { Baseprop } from '../../../domain/interfaces/baseprop'

export interface IdentificationFieldProps extends Baseprop {
  name: string
  placeholder: string
  errorMessage: string
  validation: (event: any) => boolean
  format: (event: any) => string
}
