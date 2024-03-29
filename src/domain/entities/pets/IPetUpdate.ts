import { ITreatment } from '../ITreatment'

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
  obtained_from?: string
  country?: string
  other?: string
  sterilised?: boolean
  birth_date?: Date
  pet_dimension?: {
    height?: number
    width?: number
    depth?: number
    weight?: number
    measure_weight_type?: string
  }
  death?: {
    death_date?: Date
    reason?: string
    remain?: string
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
  detail?: string
  treatment?: Array<ITreatment>
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
