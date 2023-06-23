export const messages = {
  required: '* Este campo es requerido',
  email: '* Este campo debe ser un correo válido',
  number: '* Este campo debe ser numérico: 7 o 7.0',
  phone: '* Este campo debe ser un número de teléfono válido',
  min: (min: string) => `* Debe tener al menos ${min} números`,
  max: (max: string) => `* No puede tener más de ${max} números`,
  equals: (field: string) => `Este campo debe ser igual a ${field}`,
}
