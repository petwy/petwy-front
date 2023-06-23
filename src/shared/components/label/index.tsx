import React, { Fragment } from 'react'
import { LabelProps } from './props'

export function Label(props: LabelProps) {
  const { name, text, className } = props
  const styles = className !== undefined && className !== '' ? className : 'text-main text-lg font-bold'
  return (
    <Fragment>
      <label className={styles} htmlFor={name}>
        {text}
      </label>
    </Fragment>
  )
}
