import React, { JSX } from 'react'
import Icon from '../../Icon'
import { FaPaw } from 'react-icons/fa'
import { Baseprop } from '../../../../domain/interfaces/baseprop'

export const PawIcon = (props: Baseprop): JSX.Element => {
  const { className } = props
  const styles = className !== undefined && className !== '' ? className : 'text-white'
  return <Icon IconType={FaPaw} className={styles} />
}
