import React, { JSX } from 'react'
import { IconActiveFilled } from '../../../shared/components/icons/iconActive/IconActiveFilled'
import moment from 'moment/moment'
import { PetVaccineProps } from './props'
import { styles } from '../../../config/styles'
import { IconAlertFilled } from '../../../shared/components/icons/iconAlert/IconAlert'
import { toCapitalize } from '../../../shared/utils'

export const PetAntiparasiticCard = (props: PetVaccineProps): JSX.Element => {
  const { name, vaccine } = props
  const applicationDate = vaccine?.vaccination_date ? vaccine.vaccination_date : null
  const expirationDate = vaccine?.valid_until ? vaccine.valid_until : null
  const isValidAntiparasitic = (): boolean => {
    return moment() < moment(vaccine.valid_until)
  }
  return (
    <div className={'flex flex-col gap-2 border rounded-xl p-3 w-full font-normal'}>
      <div className={'flex flex-col gap-2 text-left'}>
        <div className={'flex flex-row gap-3 w-full'}>
          {isValidAntiparasitic() ? (
            <IconActiveFilled size={styles.icon.size.sm} color={'success'} />
          ) : (
            <IconAlertFilled size={styles.icon.size.sm} color={'error'} />
          )}
          <h1 className={'font-bold text-md flex flex-row gap-3'}>{toCapitalize(name)} </h1>
        </div>
        <div className={'mx-9'}>
          {!isValidAntiparasitic() ? (
            <p className={'text-left text-error text-sm'}>Antiparasitario atrasado</p>
          ) : (
            <p className={'text-left text-success text-sm'}>Antiparasitario al día</p>
          )}
        </div>
      </div>
      <div className={'text-left font-normal text-sm mx-3'}>
        <p>Nombre: {toCapitalize(vaccine.name)}</p>
        <p>Lote: {vaccine.batch}</p>
        <p>Fabricante: {vaccine.manufacturer}</p>
        <p>Fecha de Aplicación: {applicationDate != null ? moment(vaccine.valid_from).format('DD/MM/YYYY') : ''}</p>
        <p className={`${!isValidAntiparasitic() && 'text-error'}`}>
          Fecha de Expiración: {expirationDate != null ? moment(vaccine.valid_until).format('DD/MM/YYYY') : ''}
        </p>
      </div>
    </div>
  )
}
