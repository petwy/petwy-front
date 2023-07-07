import moment from 'moment'
import 'moment/locale/es'
export function toDate(input: string): Date {
  return moment(input).toDate()
}
