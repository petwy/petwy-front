import React, { JSX } from 'react'
import { SectionProps } from './props'
import { PetSection } from './PetSection'

export const PetDimensionSection = (props: SectionProps): JSX.Element => {
  const { pet } = props
  const petWeight = pet.pet_weight ? (pet.pet_weight.weight != 0 ? pet.pet_weight : null) : null
  return (
    <PetSection title={'Dimensiones de tu mascota'}>
      <p>Peso: {petWeight != null ? `${petWeight.weight} ${petWeight.measure_type}` : '0 kilos'}</p>
      <p>Altura: {pet.pet_dimension?.height} </p>
      <p>Largo: {pet.pet_dimension?.width} </p>
      <p>Ancho: {pet.pet_dimension?.depth} </p>
    </PetSection>
  )
}
