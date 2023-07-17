import React, { JSX } from 'react'
import { styles } from '../../../../config/styles'
import { PetSectionProps } from '../props'
import { EditIcon } from '../../../../shared/components/icons'
import { ButtonCircleFilled } from '../../../../shared/components/buttons/circle/ButtonBackFilled'

export const PetSection = (props: PetSectionProps): JSX.Element => {
  const { title, children, isEditable, onToggle } = props
  return (
    <div className={'flex flex-col gap-3 py-3 border-t border-t-gray-light'}>
      <div className={'mx-3 flex flex-row justify-between items-center'}>
        <h1 className={styles.text.title}>{title}</h1>
        {isEditable && <ButtonCircleFilled size={'sm'} iconType={<EditIcon />} onHandle={onToggle} />}
      </div>
      <div className={'mx-3'}>{children}</div>
    </div>
  )
}
