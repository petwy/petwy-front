export function toCapitalize(str: string): string {
  if (!str) return str
  const firstChar = str.charAt(0).toUpperCase()
  const restOfString = str.slice(1)
  return `${firstChar}${restOfString}`
}
