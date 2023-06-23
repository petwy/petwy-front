import React, { JSX } from 'react'
import { styles } from '../../../../config/styles'
import { PetSectionProps } from '../props'

export const PetSection = (props: PetSectionProps): JSX.Element => {
  const { title, children } = props
  return (
    <section className={' flex flex-col gap-3 py-3 border-t border-t-gray-light'}>
      <div className={'mx-3 flex flex-col gap-3'}>
        <h1 className={styles.text.title}>{title}</h1>
        <div className={'mx-3'}>{children}</div>
      </div>
    </section>
  )
}
