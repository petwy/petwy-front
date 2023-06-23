import { ReactNode } from 'react'
import { Baseprop } from '../../../../domain/interfaces/baseprop'

export interface ToolTipProps extends Baseprop {
  content: ReactNode
  children: ReactNode
}
