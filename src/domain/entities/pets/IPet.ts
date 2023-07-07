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
  date_of_birth: Date
  pet_dimension: {
    height: number
    width: number
    depth: number
  }
  pet_weight: {
    weight: number
    measure_type: string
  }
  pet_death: any
  chronic_diseases: Array<Disease>
  rabies_vaccines: Array<IVaccine>
  anti_echinococcus: Array<IVaccine>
  anti_parasitic: Array<IVaccine>
  others_vaccines: Array<IVaccine>
  diseases: Array<Disease>
}

/**
 * "pet_id": "",
 *      "name": "Kiara",
 *      "coat": "white, cream, gray",
 *      "sex": "female",
 *      "obtained_from": "Rescate",
 *      "country": "",
 *      "other": "",
 *      "sterilised": true,
 *      "is_alive": true,
 *      "date_of_birth": "2018-02-05T03:00:00Z",
 *      "pet_type": {
 * 				"specie": "felino",
 * 				"breed": "Domestico Pelo Largo"
 * 			},
 *      "pet_dimension": {
 * 				"height": 0,
 * 				"width": 0,
 * 				"depth": 0
 * 			},
 *      "pet_weight": {
 * 				"weight": 0,
 * 				"measure_type": ""
 * 			},
 *      "rabies_vaccines": null,
 *      "antichinococcus": null,
 *      "anti_parasitic": null,
 *      "others_vaccines": null,
 *      "chronic_diseases": null,
 *      "diseases": null
 *
 * */
