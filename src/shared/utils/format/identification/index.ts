import { format } from './chile/rut'

interface CountryFormatter {
  [countryCode: string]: {
    formatID: (id: string) => string
    formatPassport: (passport: string) => string
  }
}

const validationSchema: CountryFormatter = {
  Chile: {
    formatID: (rut: string): string => {
      return format(rut)
    },
    formatPassport: (value: string): string => value.toUpperCase(),
  },
}
export const countryIDFormat = (country: string, id: string, typeID: string): string => {
  const countryValidator = validationSchema[country]
  return typeID === 'DNI' ? countryValidator.formatID(id) : countryValidator.formatPassport(id)
}
