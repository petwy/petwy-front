import { Baseprop } from '../../../domain/interfaces/baseprop'
import { ReactNode } from 'react'

export interface MenuPetProps extends Baseprop {
  name: string
  isEnable: boolean
}

export interface PetSectionProps extends Baseprop {
  title: string
  children: ReactNode
  isEditable: boolean
  onToggle: () => void
}
