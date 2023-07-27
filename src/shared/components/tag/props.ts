import { Baseprop } from '../../../domain/interfaces/baseprop'

export enum Level {
  high = 'bg-error-light text-white',
  medium = 'bg-warning-light text-black',
  low = 'bg-main-light text-main',
  none = 'bg-white text-black border border-gray-light',
}

export type TagLevel = 'none' | 'low' | 'medium' | 'high'
export interface TagProps extends Baseprop {
  label: string
  level: TagLevel
}
