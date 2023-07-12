import { Treatment } from '../treatment'

export interface IPetUpdate {
  pet_id: string
  name?: string
  coat?: string
  chip?: {
    chipped?: boolean
    chip_code?: string
    chip_date?: Date
    location?: string
  }
  pet_type?: {
    specie?: string
    breed?: string
  }
  sex?: string
  is_alive?: boolean
  is_enable?: boolean
  avatar?: string
  height?: string
  width?: string
  weight?: string
  weight_unit?: string
  obtained_from?: string
  country?: string
  other?: string
  sterilised?: boolean
  birth_date?: Date
  pet_dimension?: {
    height?: number
    width?: number
    depth?: number
  }
  pet_weight?: {
    weight?: number
    measure_type?: string
  }
  death?: {
    death_date?: Date
  }
  chronic_diseases?: Array<IDiseaseUpdate>
  rabies_vaccines?: Array<IVaccineUpdate>
  anti_echinococcus?: Array<IVaccineUpdate>
  anti_parasitic?: Array<IVaccineUpdate>
  others_vaccines?: Array<IVaccineUpdate>
  diseases?: Array<IDiseaseUpdate>
}

export interface IDiseaseUpdate {
  name?: string
  severity?: string
  treatment?: Array<Treatment>
}

export interface IVaccineUpdate {
  name?: string
  manufacturer?: string
  batch?: string
  vaccination_date?: Date
  valid_from?: Date
  valid_until?: Date
}

export interface IChipUpdate {
  pet_id: string
  chip_code: string
  chip_date: Date
  location: string
}
