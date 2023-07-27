import React, { ReactNode, useEffect, useState } from 'react'
import { Baseprop } from '../../../domain/interfaces/baseprop'
import { tabShowService } from '../../channels/tab'
import { IBreadcrumb } from '../../../domain/interfaces/IBreadcrumb'
import { useAppMenu } from '../../hooks/useAppMenu'

export interface TabComponent {
  title: ReactNode
  name: string
  children: ReactNode
  is_active: boolean
  onClick: (event: any) => void
}

export interface TabProps extends Baseprop {
  tabs: Array<TabComponent>
}

export const Tab: React.FC<TabProps> = ({ tabs }): React.JSX.Element => {
  const subscription$ = tabShowService.getSubjectManager()
  const { addBreadcrumbs } = useAppMenu()
  const [show, setShow] = useState<TabComponent>(tabs[0])
  useEffect(() => {
    subscription$.subscribe((data) => {
      if (data !== undefined && data.name !== undefined && data.name !== '') {
        const tabActive = tabs
          .map((t) => {
            t.is_active = t.name === data.name
            return t
          })
          .filter((t) => t.name === data.name)[0]
        setShow(tabActive)
      }
    })
  }, [setShow, tabs])
  return (
    <div className={`w-full`}>
      <div className={'flex flex-wrap gap-2'}>
        {tabs?.map((t, index) => {
          return (
            <button
              id={t.name}
              key={index}
              className={`${
                t.name === show.name ? 'border-b-4 border-b-main' : ''
              } px-3 py-2 text-xl font-medium text-center text-main`}
              onClick={t.onClick}
            >
              {t.title}
            </button>
          )
        })}
      </div>
      <div className={'h-max-128 h-fit'}>{show !== undefined && show.is_active ? show.children : null}</div>
    </div>
  )
}
