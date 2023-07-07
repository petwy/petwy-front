import React, { JSX } from 'react'
import { Level, TagProps } from './props'

export const Tag = (props: TagProps): JSX.Element => {
  const { label, className, level } = props
  const styleDefault = 'border border-gray-light'
  return (
    <div
      className={`${className ? className : styleDefault} ${
        level !== undefined ? level : Level.NONE
      } w-fit px-3 py-1 rounded-2xl text-xs`}
    >
      {label}
    </div>
  )
}
