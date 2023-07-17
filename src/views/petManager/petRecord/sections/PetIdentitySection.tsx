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
import { PetSection } from './PetSection'
import { PetSectionLabel } from './PetSectionLabel'

export const PetIdentitySection = (props: SectionProps): JSX.Element => {
  const { pet } = props
  const specie = toCapitalize(getLabel(pet.pet_type?.specie, 'specie'))
  const breed = toCapitalize(getLabel(pet.pet_type?.breed, 'breed', pet.pet_type?.specie))
  const sterilised = pet.sterilised ? 'si' : 'no'
  const sex = getLabel(pet.sex, 'sex')
  const residenceCountry = toCapitalize(getLabel(pet.country, 'country'))
  const coats = getLabel(pet.coat, 'coat')
  const dateBirth = `${dateViewer(pet.birth_date)}, ${ageCalc(pet.birth_date, true, undefined, 'y')} de edad.`
  const petIdentityView = (): JSX.Element => {
    return (
      <div className={'flex flex-col justify-between ml-3'}>
        <PetSectionLabel title={'Especie'} value={specie} />
        <PetSectionLabel title={'Raza'} value={breed} />
        <PetSectionLabel title={'Sexo'} value={sex} />
        <PetSectionLabel title={'Fecha de Nacimiento'} value={dateBirth} />
        <PetSectionLabel title={'Color'} value={coats} />
        <PetSectionLabel title={'Esterilización'} value={sterilised} />
        <PetSectionLabel title={'País de residencia'} value={residenceCountry} />
      </div>
    )
  }
  const petAvatarView = (): JSX.Element => {
    return (
      <div className={'shadow-xl bg-white-abs rounded-xl flex flex-col justify-center items-center p-3 gap-1'}>
        <img src={pet.avatar} alt={pet.name} className={'w-56 h-auto'} />
        <Tooltip content={`Cambia el avatar de ${pet.name}`}>
          <ButtonCircleFilled
            size={'sm'}
            onHandle={function (): void {
              return
            }}
            iconType={<AiFillEdit />}
          />
        </Tooltip>
      </div>
    )
  }
  return (
    <PetSection
      title={'Identificación'}
      isEditable={false}
      onToggle={() => {
        return
      }}
    >
      <div className={'flex flex-row gap-3 justify-between items-center'}>
        {petIdentityView()}
        {petAvatarView()}
      </div>
    </PetSection>
  )
}
