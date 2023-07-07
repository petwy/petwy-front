import React, { JSX, ReactNode } from 'react'
import { IconButtonProps } from './props'

interface BaseIconProps extends IconButtonProps {
  children: ReactNode
}
export const BaseIcon = (props: BaseIconProps): JSX.Element => {
  const { children, color, size } = props
  return (
    <div className={`${size} bg-${color} text-white rounded-full flex items-center justify-center`}>{children}</div>
  )
}
