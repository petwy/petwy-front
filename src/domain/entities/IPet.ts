import { Disease } from './disease'

export interface IPet {
  pet_id: string
  name: string
  birthDate: Date
  isAlive: boolean
  avatar: string
  chronic_diseases: Array<Disease>
}
