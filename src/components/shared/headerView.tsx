import React, { JSX } from 'react'
import { IoMdAddCircleOutline } from 'react-icons/io'
import Breadcrumb from '../shared/breadcrumb'
import { IBreadcrumb } from '../../domain/components/appMenu/interfaces/IBreadcrumb'

import Icon from './icon'

export default function HeaderView(props: { title: string; breadcrumbs: Array<IBreadcrumb> }): JSX.Element {
  const { title, breadcrumbs } = props

  return (
    <div className={'gap-3 p-3 mb-3 border-b border-main-light'}>
      <div className="grid grid-cols-2 grid-rows-2">
        <Breadcrumb breadcrumbs={breadcrumbs} />
        <div className={'flex justify-start items-center'}>
          <h1 className={'title-main text-2xl'}>{title}</h1>
        </div>
        <div className={'flex justify-end items-center'}>
          <Icon Dep={IoMdAddCircleOutline} style={'main text-xl'} />
        </div>
      </div>
    </div>
  )
}
