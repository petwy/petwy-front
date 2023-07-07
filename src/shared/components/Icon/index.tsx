import React, { JSX } from 'react'
import { IconProps } from './props'

export default function Icon(props: IconProps): JSX.Element {
  const { children, className } = props
  const styles = className !== undefined || className !== '' ? className : `group text-main`
  return <div className={styles}>{children}</div>
}
