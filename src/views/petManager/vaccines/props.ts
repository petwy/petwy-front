import { Baseprop } from '../../../domain/interfaces/baseprop'
import { IPet } from '../../../domain/entities/pets/IPet'

export interface VaccineProps extends Baseprop {
  pets: Array<IPet>
}
