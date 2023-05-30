import { Treatment } from './treatment'

export interface Disease {
  name: string
  severity: string
  treatment: Array<Treatment>
}
