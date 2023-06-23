import { Baseprop } from '../../../domain/interfaces/baseprop'

export enum Level {
  CRITICAL = 'bg-error text-white',
  WARNING = 'bg-warning text-gray',
  LOW = 'bg-success text-white',
  NONE = 'bg-white text-gray',
}
export interface TagProps extends Baseprop {
  label: string
  level: Level
}
