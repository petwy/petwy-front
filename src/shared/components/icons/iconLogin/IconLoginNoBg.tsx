import React, { JSX } from 'react'
import { IconButtonProps } from '../props'
import { BaseIcon } from '../BaseIcon'
import { LoginIcon } from '../index'

export const IconLoginNoBg = (props: IconButtonProps): JSX.Element => {
  const { size, color } = props
  return (
    <BaseIcon size={size} color={'transparent'}>
      <LoginIcon className={`text-${color}`} />
    </BaseIcon>
  )
}
