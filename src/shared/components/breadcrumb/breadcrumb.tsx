import React, { JSX } from 'react'
import { IBreadcrumb } from '../../../domain/interfaces/IBreadcrumb'
import { Link } from 'react-router-dom'

export default function Breadcrumb(props: { breadcrumbs: Array<IBreadcrumb> }): JSX.Element {
  const { breadcrumbs } = props
  return (
    <div className={'flex flex-row '}>
      {breadcrumbs?.map((b: IBreadcrumb, index) => (
        <p key={index} className={'mr-3 text-sm text-gray-light'}>
          <Link to={b.link}>{b.label}</Link> {index === breadcrumbs.length - 1 ? '' : '>'}
        </p>
      ))}
    </div>
  )
}
