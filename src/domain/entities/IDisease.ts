import { ITreatment } from './ITreatment'

export interface IDisease {
  name: string
  severity: string
  detail: string
  treatment: Array<ITreatment>
}
