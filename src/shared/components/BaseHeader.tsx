import React, { JSX } from 'react'

export default function BaseHeader(props: { children: any }): JSX.Element {
  const { children } = props

  return <div className={'container flex flex-col gap-3 lg:p-3 lg:mb-3 border-b border-main-light'}>{children}</div>
}
