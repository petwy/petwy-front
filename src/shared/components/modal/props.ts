import { Baseprop } from '../../../domain/interfaces/baseprop'

export interface ModalProps extends Baseprop {
  title: string
  hide: () => void
  children: any
}
