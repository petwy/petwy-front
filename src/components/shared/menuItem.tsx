import React, { JSX } from 'react'
import Icon from './icon'
import { IconType } from 'react-icons/lib'

export const MenuItem = (props: { label: string; Dep: IconType; style: string }): JSX.Element => {
  const { label, Dep, style } = props
  return (
    <div className={'flex gap-6 mb-3 justify-start items-center'}>
      <Icon style={`${style} text-2xl`} Dep={Dep} />
      <p className={'text-xl'}>{label}</p>
    </div>
  )
}
