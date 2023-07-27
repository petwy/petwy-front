import React, { JSX } from 'react'
import { IconActiveFilled } from '../../../../../shared/components/icons/iconActive/IconActiveFilled'
import moment from 'moment/moment'
import { PetVaccineProps } from './props'
import { styles } from '../../../../../config/styles'
import { Tooltip } from '../../../../../shared/components/loadingBar/toolTip/ToolTip'
import { ButtonUpdateVaccine } from '../../../../../shared/components/buttons/update/ButtonUpdateVaccine'

export const PetVaccineCard = (props: PetVaccineProps): JSX.Element => {
  const { name, vaccine } = props
  const applicationDate = vaccine?.vaccination_date ? vaccine.vaccination_date : null
  const expirationDate = vaccine?.valid_until ? vaccine.valid_until : null
  const isValidVaccine = (): boolean => {
    return moment() < moment(vaccine.valid_until)
  }
  return (
    <div className={'flex flex-col gap-2 border rounded-xl p-3 w-full font-normal'}>
      <div className={'flex flex-col gap-2 text-left'}>
        <div className={'flex flex-row gap-3 w-full'}>
          {isValidVaccine() ? (
            <>
              <IconActiveFilled size={styles.icon.size.sm} color={'success'} />
              <h1 className={'font-bold text-md flex flex-row gap-3'}>{name} </h1>
            </>
          ) : (
            <>
              <Tooltip content={'Actualiza su vacuna'}>
                <ButtonUpdateVaccine
                  size={'sm'}
                  onHandle={() => {
                    return
                  }}
                />
              </Tooltip>
              <h1 className={'font-bold text-md flex flex-row gap-3'}>{name} </h1>
            </>
          )}
        </div>
        <div className={'mx-9'}>
          {!isValidVaccine() ? (
            <p className={'text-left text-error text-sm'}>Vacuna atrasada</p>
          ) : (
            <p className={'text-left text-success text-sm'}>Vacuna al día</p>
          )}
        </div>
      </div>
      <div className={'text-left font-normal text-sm mx-3'}>
        <p>Nombre: {vaccine.name}</p>
        <p>Lote: {vaccine.batch}</p>
        <p>Fabricante: {vaccine.manufacturer}</p>
        <p>Fecha de Aplicación: {applicationDate != null ? moment(vaccine.valid_from).format('DD/MM/YYYY') : ''}</p>
        <p className={`${!isValidVaccine() && 'text-error'}`}>
          Fecha de Expiración: {expirationDate != null ? moment(vaccine.valid_until).format('DD/MM/YYYY') : ''}
        </p>
      </div>
    </div>
  )
}
