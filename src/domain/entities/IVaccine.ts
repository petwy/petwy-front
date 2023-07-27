export interface IVaccine {
  name: string
  commercial_name: string
  manufacturer: string
  batch: string
  vaccination_date: Date
  valid_from: Date
  valid_until: Date
  is_enable: boolean
}
