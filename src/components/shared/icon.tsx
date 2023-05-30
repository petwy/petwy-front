import React from 'react'
import { IconType } from 'react-icons/lib'

export default function Icon(props: { Dep: IconType; style: string }) {
  const { Dep, style } = props
  return (
    <span className={`group text-${style}`}>
      <Dep />
    </span>
  )
}
