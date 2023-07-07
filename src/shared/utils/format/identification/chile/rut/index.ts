const RUTRegex = /[0-9kK]/g
export function format(rut: string): string {
  const formatter = new Intl.NumberFormat('es-CL')
  if (rut === '0-') return ''
  let verificationDigit = rut.charAt(rut.length - 1) === '-' ? '' : rut.charAt(rut.length - 1)
  verificationDigit = verificationDigit.match(RUTRegex) ? verificationDigit : ''
  const body = rut.slice(0, -1).replace(/\D/g, '')
  const bodyFormatted = formatter.format(Number(body))
  if (body.length > 8) return `${bodyFormatted.slice(0, 8)}-${verificationDigit.toUpperCase()}`
  return `${bodyFormatted}-${verificationDigit.toUpperCase()}`
}
