import React, { JSX } from 'react'
import { Tooltip } from '../../../../shared/components/loadingBar/toolTip/ToolTip'
import { ageCalc, dateViewer } from '../../../../shared/utils/ageCalc'
import { SectionProps } from './props'
import { toCapitalize } from '../../../../shared/utils'
import { IconEditFilled } from '../../../../shared/components/icons/iconEdit/IconEdit'
import { styles } from '../../../../config/styles'
import { ButtonCircleFilled } from '../../../../shared/components/buttons/circle/ButtonBackFilled'
import { AiFillEdit } from 'react-icons/ai'
import { getLabel } from '../../../../data'

export const PetIdentitySection = (props: SectionProps): JSX.Element => {
  const { pet } = props
  const specie = toCapitalize(getLabel(pet.pet_type?.specie, 'specie'))
  const breed = toCapitalize(getLabel(pet.pet_type?.breed, 'breed', pet.pet_type?.specie))
  const sterilised = pet.sterilised ? 'si' : 'no'
  const sex = getLabel(pet.sex, 'sex')
  const residenceCountry = toCapitalize(getLabel(pet.country, 'country'))
  const coats = getLabel(pet.coat, 'coat')
  const petIdentityView = (): JSX.Element => {
    return (
      <div className={'flex flex-col justify-between ml-3 mt-3'}>
        <p>Especie: {specie}</p>
        <p>Raza: {breed}</p>
        <p>Sexo: {sex}</p>
        <p>
          Fecha de nacimiento: {dateViewer(pet.birth_date)}, {ageCalc(pet.birth_date, true, undefined, 'y')} de edad{' '}
        </p>
        <p>Color: {coats}</p>
        <p>Esterilizado: {sterilised}</p>
        <p>País de residencia: {residenceCountry}</p>
      </div>
    )
  }
  const petAvatarView = (): JSX.Element => {
    return (
      <div className={'shadow-xl bg-white-abs rounded-xl flex flex-col justify-center items-center'}>
        <img src={pet.avatar} alt={pet.name} className={'w-48 p-3 h-auto rounded-xl'} />
        <Tooltip content={`Cambia el avatar de ${pet.name}`}>
          <ButtonCircleFilled
            size={'sm'}
            onHandle={function (): void {
              console.log('Function not implemented.')
            }}
            iconType={<AiFillEdit />}
          />
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
