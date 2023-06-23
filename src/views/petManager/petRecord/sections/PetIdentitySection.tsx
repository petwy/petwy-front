import React, { JSX } from 'react'
import { Tooltip } from '../../../../shared/components/loadingBar/toolTip/ToolTip'
import { ageCalc, dateViewer } from '../../../../shared/utils/ageCalc'
import { SectionProps } from './props'
import { toCapitalize } from '../../../../shared/utils'
import { IconEditFilled } from '../../../../shared/components/icons/iconEdit/IconEdit'
import { styles } from '../../../../config/styles'

export const PetIdentitySection = (props: SectionProps): JSX.Element => {
  const { pet } = props
  const petIdentityView = (): JSX.Element => {
    return (
      <div className={'flex flex-col justify-between ml-3 mt-3'}>
        <p>Especie: {toCapitalize(pet.pet_type?.specie)}</p>
        <p>Raza: {toCapitalize(pet.pet_type?.breed)}</p>
        <p>Sexo: {pet.sex}</p>
        <p>
          Fecha de nacimiento: {dateViewer(pet.date_of_birth)}, {ageCalc(pet.date_of_birth, true, undefined, 'y')} de
          edad{' '}
        </p>
        <p>Color: {pet.coat}</p>
        <p>Esterilizado: {pet.sterilised ? 'si' : 'no'}</p>
        <p>País de residencia: {pet.country}</p>
      </div>
    )
  }
  const petAvatarView = (): JSX.Element => {
    return (
      <div className={'shadow-xl bg-white-abs rounded-xl flex flex-col justify-center items-center'}>
        <img src={pet.avatar} alt={pet.name} className={'w-48 p-3 h-auto rounded-xl'} />
        <Tooltip content={`Cambia el avatar de ${pet.name}`}>
          <IconEditFilled color={'main'} size={styles.icon.size.sm} />
        </Tooltip>
      </div>
    )
  }
  return (
    <div className={'flex flex-row justify-between gap-3 py-3'}>
      {petIdentityView()}
      {petAvatarView()}
    </div>
  )
}
