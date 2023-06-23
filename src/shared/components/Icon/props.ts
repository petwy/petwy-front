import { Baseprop } from '../../../domain/interfaces/baseprop'
import { ReactNode } from 'react'

export interface IconProps extends Baseprop {
  children?: ReactNode
  size?: string | number
  color?: string
  title?: string
}
