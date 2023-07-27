import React, { JSX } from 'react'
import { BaseIcon } from '../BaseIcon'
import { IconButtonProps } from '../props'
import { CertIcon } from '../index'

export const IconCertificateFilled = (props: IconButtonProps): JSX.Element => {
  const { size, color } = props
  return (
    <BaseIcon size={size} color={color}>
      <CertIcon />
    </BaseIcon>
  )
}
