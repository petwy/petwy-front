import React, { JSX } from 'react'
import { SectionProps } from './props'
import { PetSection } from './PetSection'

export const PetChipSection = (props: SectionProps): JSX.Element => {
  const { pet } = props

  return (
    pet.chip?.chipped ? null : (
      <PetSection title={'Información del Chip'}>
        <p>Código del chip: 992003000200019</p>
        <p>Fecha de instalación: 2018</p>
        <p>Ubicación del chip: Lomo</p>
        <p>País de instalación: Chile</p>
      </PetSection>
    )
  ) as JSX.Element
}
