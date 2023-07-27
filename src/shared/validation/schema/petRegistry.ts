import * as yup from 'yup'
import { messages } from './messages'

export const petRegistrySchema = yup.object({
  name: yup.string().required(messages.required),
  country: yup.string().required(messages.required),
  birth_date: yup.date().nonNullable().required(messages.required),
  sex: yup.string().required(messages.required),
  coat: yup.string().required(messages.required),
  specie: yup.string().required(messages.required),
  breed: yup.string().required(messages.required),
  // height: yup.string().matches(new RegExp('[0-9]'), messages.number).required(messages.required),
  // width: yup.string().matches(new RegExp('[0-9]'), messages.number),
  // weight: yup.string().matches(new RegExp('[0-9]'), messages.number).required(messages.required),
  // weight_unit: yup.string().required(messages.required),
  obtained_from: yup.string(),
  others: yup.string(),
  sterilised: yup.boolean(),
  chip: yup.object({
    chip_number: yup.string().matches(new RegExp('[0-9]'), messages.number),
    chip_location: yup.string(),
    chip_date: yup.date(),
  }),
})
