import { IDisease } from '../IDisease'
import { IVaccine } from '../IVaccine'

export interface IPet {
  pet_id: string
  name: string
  coat: string
  chip: {
    is_chipped: boolean
    chip_code: string
    chip_date: Date
    location: string
  }
  pet_type: {
    specie: string
    breed: string
  }
  sex: string
  is_alive: boolean
  is_enable: boolean
  avatar: string
  obtained_from: string
  country: string
  other: string
  sterilised: boolean
  birth_date: Date
  pet_dimension: {
    height: number
    width: number
    depth: number
    weight: number
    measure_weight_type: string
  }
  death: IPetDeath | undefined
  chronic_diseases: Array<IDisease>
  rabies_vaccines: Array<IVaccine>
  anti_echinococcus: Array<IVaccine>
  anti_parasitic: Array<IVaccine>
  others_vaccines: Array<IVaccine>
  diseases: Array<IDisease>
}

export interface IPetDeath {
  death_date: Date
  remain: string
  reason: string
}
