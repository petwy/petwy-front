import { AppDate } from '../../domain/interfaces/date'
import moment from 'moment/moment'

export function ageCalc(birthDay: AppDate, isAlive: boolean, petDeath?: AppDate, sep?: string): string {
  const ageInYears = moment().diff(birthDay, 'years')
  const ageInMonths = moment().diff(birthDay, 'months')

  if (!isAlive) {
    const ageOfDeath = moment().diff(petDeath, 'years')
    return `${ageInYears - ageOfDeath} años`
  }

  return `${ageInYears > 1 ? ageInYears + ' años' : ageInYears + ' año'}  
  ${sep !== undefined ? sep : '/'} ${
    ageInMonths - ageInYears * 12 > 1
      ? ageInMonths - ageInYears * 12 + ' meses'
      : ageInMonths - ageInYears * 12 + ' mes'
  } `
}

export function dateViewer(date: AppDate): string {
  return moment(date).format('L')
}
