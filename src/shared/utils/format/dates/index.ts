import moment from 'moment'
import 'moment/locale/es'
moment.suppressDeprecationWarnings = true
export function toDate(input: string): Date {
  return moment(input).toDate()
}
