import React, { JSX } from 'react'
import { SectionProps } from './props'
import { PetSection } from './PetSection'
import { Label } from '../../../../shared/components/label'

export const PetOthersSection = (props: SectionProps): JSX.Element => {
  const { pet } = props

  return (
    <PetSection title={'Otras características'}>
      <div className={'flex flex-row gap-3 items-center'}>
        <Label name={'obtained_from'} text={'Obtenida de'} />
        <p className={'mx-3'}>{pet.obtained_from} </p>
      </div>

      <div className={'flex flex-row gap-3 items-center'}>
        <Label name={'other'} text={'Otros comentarios'} />
        <p className={'mx-3'}>{pet.other ? pet.other : 'Aún no escribes nada'} </p>
      </div>
    </PetSection>
  )
}
