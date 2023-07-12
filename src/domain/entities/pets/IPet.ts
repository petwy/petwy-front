import { Disease } from '../disease'
import { IVaccine } from '../IVaccine'

export interface IPet {
  pet_id: string
  name: string
  coat: string
  chip: {
    chipped: boolean
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
  height: string
  width: string
  weight: string
  weight_unit: string
  obtained_from: string
  country: string
  other: string
  sterilised: boolean
  birth_date: Date
  pet_dimension: {
    height: number
    width: number
    depth: number
  }
  pet_weight: {
    weight: number
    measure_type: string
  }
  death: {
    death_date: Date
  }
  chronic_diseases: Array<Disease>
  rabies_vaccines: Array<IVaccine>
  anti_echinococcus: Array<IVaccine>
  anti_parasitic: Array<IVaccine>
  others_vaccines: Array<IVaccine>
  diseases: Array<Disease>
}
