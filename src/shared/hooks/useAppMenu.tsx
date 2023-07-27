import React, { createContext, useState } from 'react'
import { IBreadcrumb } from '../../domain/interfaces/IBreadcrumb'

const MY_PETS = 'Mis Mascotas'

interface IAppMenuContext {
  titlePage: string
  breadcrumbs: Array<IBreadcrumb>
  setTitlePage: (value: string) => void
  addBreadcrumbs: (value: Array<IBreadcrumb>) => void
  getBreadcrumbs: () => Array<IBreadcrumb>
}

const defaultState = {
  titlePage: '',
  breadcrumbs: [],
  setTitlePage: (value: string) => {
    return
  },
  addBreadcrumbs: (next: Array<IBreadcrumb>) => {
    return
  },
  getBreadcrumbs: (): Array<IBreadcrumb> => {
    return []
  },
}

export const AppMenuContext = createContext<IAppMenuContext>(defaultState)

export const AppMenuProvider = (props: { children: React.ReactNode }) => {
  const { children } = props
  const [titlePage, setTitlePage] = useState<string>(MY_PETS)
  const [breadcrumbs, setBreadcrumbs] = useState<Array<IBreadcrumb>>([])

  const addBreadcrumbs = (value: Array<IBreadcrumb>) => {
    localStorage.setItem('breadcrumbs', JSON.stringify(value))
    setBreadcrumbs(value)
  }
  const getBreadcrumbs = (): Array<IBreadcrumb> => {
    const localStorageBreadcrumbs = localStorage.getItem('breadcrumbs')
    if (localStorageBreadcrumbs) setBreadcrumbs(JSON.parse(localStorageBreadcrumbs))
    return breadcrumbs
  }
  return (
    <AppMenuContext.Provider value={{ titlePage, breadcrumbs, getBreadcrumbs, setTitlePage, addBreadcrumbs }}>
      {children}
    </AppMenuContext.Provider>
  )
}

export const useAppMenu = (): IAppMenuContext => {
  const ctx = React.useContext(AppMenuContext)
  if (!ctx) {
    throw new Error('No context available')
  }
  return ctx
}
