import { Baseprop } from '../../../../../domain/interfaces/baseprop'
import { IVaccine } from '../../../../../domain/entities/IVaccine'

export interface PetVaccineProps extends Baseprop {
  name: string
  vaccine: IVaccine
}
