export function validate(rut: string): boolean {
  if (rut === undefined || rut === '') return false
  let sum = 0
  let multiple = 2

  rut = rut.replace(/\./g, '')
  rut = rut.replace(/-/g, '')

  const body = rut.slice(0, -1)
  let dv: string | number = rut.slice(-1).toUpperCase()

  if (body.length < 7) {
    return false
  }

  for (let i = 1; i <= body.length; i++) {
    const index = multiple * Number(rut.charAt(body.length - i))
    sum = sum + index
    if (multiple < 7) {
      multiple = multiple + 1
    } else {
      multiple = 2
    }
  }

  const dvExpect = 11 - (sum % 11)
  dv = dv === 'K' ? 10 : parseInt(dv, 10)

  return dv === dvExpect
}
