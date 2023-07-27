import { Baseprop } from '../../../../../domain/interfaces/baseprop'
import { IPet } from '../../../../../domain/entities/pets/IPet'

export interface SectionProps extends Baseprop {
  id: string
  pet?: IPet
}
