import { validate } from './chile/rut'

interface CountryValidator {
  [countryCode: string]: {
    validateID: (id: string) => boolean
    validatePassport: (passport: string) => boolean
  }
}

const validationSchema: CountryValidator = {
  Chile: {
    validateID: (rut: string): boolean => {
      return validate(rut)
    },
    validatePassport: () => true,
  },
}
export const countryIDValidation = (country: string, id: string, typeID: string): boolean => {
  const countryValidator = validationSchema[country]
  return typeID === 'DNI' ? countryValidator.validateID(id) : countryValidator.validatePassport(id)
}
