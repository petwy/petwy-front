import React, { JSX } from 'react'
import { IBreadcrumb } from '../../../domain/components/appMenu/interfaces/IBreadcrumb'
import { Link } from 'react-router-dom'

export default function Breadcrumb(props: { breadcrumbs: Array<IBreadcrumb> }): JSX.Element {
  const { breadcrumbs } = props
  return (
    <div className={'flex col-span-2 lg:mb-3 '}>
      {breadcrumbs?.map((b: IBreadcrumb, index) => (
        <p key={b.label} className={'mr-3 text-sm text-gray'}>
          <Link to={b.link}>{b.label}</Link> {index === breadcrumbs.length - 1 ? '' : '>'}
        </p>
      ))}
    </div>
  )
}
