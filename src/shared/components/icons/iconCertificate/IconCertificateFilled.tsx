import React, { JSX } from 'react'
import { FaPlane } from 'react-icons/fa'
import { BaseIcon } from '../BaseIcon'
import { IconButtonProps } from '../props'

export const IconCertificateFilled = (props: IconButtonProps): JSX.Element => {
  const { size, color } = props
  return (
    <BaseIcon size={size} color={color}>
      <FaPlane />
    </BaseIcon>
  )
}
