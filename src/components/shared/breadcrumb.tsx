import React, { JSX } from 'react'
import { IBreadcrumb } from '../../domain/components/appMenu/interfaces/IBreadcrumb'

export default function Breadcrumb(props: { breadcrumbs: Array<IBreadcrumb> }): JSX.Element {
  const { breadcrumbs } = props
  return (
    <div className={'flex col-span-2 mb-3 '}>
      {breadcrumbs.map((b: IBreadcrumb) => (
        <div key={b.label} className={'mr-3 text-sm text-gray'}>
          {b.label}
        </div>
      ))}
    </div>
  )
}
