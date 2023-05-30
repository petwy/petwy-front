import React, { JSX } from 'react'
import Icon from '../icon'
import { FaPaw } from 'react-icons/fa'

export default function PawIcon(props: { style: string }): JSX.Element {
  const { style } = props
  return <Icon Dep={FaPaw} style={style} />
}
