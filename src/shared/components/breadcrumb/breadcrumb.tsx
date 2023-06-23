import React, { JSX, useEffect, useState } from 'react'
import { IBreadcrumb } from '../../../domain/components/appMenu/interfaces/IBreadcrumb'
import { Link } from 'react-router-dom'
import { useBreadcrumbs } from '../../hooks/useBreadcrumbs'

export default function Breadcrumb(): JSX.Element {
  const { breadCrumbs } = useBreadcrumbs()
  const [breads, setBreads] = useState<Array<IBreadcrumb>>([])
  useEffect(() => {
    console.log('show breadcrumbs', breadCrumbs)
    setBreads(breadCrumbs)
  }, [])
  return (
    <div className={'flex col-span-2 lg:mb-3 '}>
      {breads?.map((b: IBreadcrumb, index) => (
        <p key={b.label} className={'mr-3 text-sm text-gray'}>
          <Link to={b.link}>{b.label}</Link> {index === breads.length - 1 ? '' : '>'}
        </p>
      ))}
    </div>
  )
}
