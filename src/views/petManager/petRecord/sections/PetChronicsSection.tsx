import React, { JSX } from 'react'
import { styles } from '../../../../config/styles'
import { SectionProps } from './props'
import { PetSection } from './PetSection'
import { Tag } from '../../../../shared/components/tag/Tag'
import { Level } from '../../../../shared/components/tag/props'

export const PetChronicsSection = (props: SectionProps): JSX.Element => {
  const { pet } = props

  return (
    <PetSection title={'Enfermedades crónicas'}>
      <p className={styles.text.italic}>
        {'Este listado te puede ayudar para prevenir tratamientos riesgosos para tu mascota'}
      </p>
      <div className={'flex flex-row gap-3 mt-3'}>
        <Tag label={'Bipolaridad'} level={Level.WARNING} />
      </div>
    </PetSection>
  )
}
