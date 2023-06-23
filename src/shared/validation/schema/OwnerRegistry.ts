import * as yup from 'yup'
import 'yup-phone-lite'
import { messages } from './messages'

export const ownerRegistrySchema = yup.object({
  name: yup.string().required(messages.required),
  surname: yup.string().required(messages.required),
  email: yup.string().email(messages.email).required(messages.required),
  email_confirmed: yup
    .string()
    .email()
    .oneOf([yup.ref('email')], messages.equals('email'))
    .required(messages.required),
  identification: yup.object({
    DNI: yup.object({
      DNI: yup.string(),
    }),
    passport: yup.object({}),
  }),
  phone: yup.object({
    code: yup.string(),
    number: yup
      .string()
      .matches(new RegExp('[0-9]'), messages.phone)
      .min(9, messages.min('9'))
      .max(9, messages.max('9'))
      .required(messages.required),
  }),
  address: yup.object({
    country: yup.string().required(messages.required),
    street: yup.string().required(messages.required),
    city: yup.string().required(messages.required),
    state: yup.string().required(messages.required),
    post_code: yup.string().required(messages.required),
  }),
})
