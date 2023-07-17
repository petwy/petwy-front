import React, { createContext, JSX, useContext, useState } from 'react'
import { IBreadcrumb } from '../../domain/components/appMenu/interfaces/IBreadcrumb'

const MY_PETS = 'Mis Mascotas'

interface ContextProps {
  titlePage: string
  breadcrumbs: Array<IBreadcrumb>
  handleTitlePage: (value: string) => void
  handleBreadcrumbs: (value: Array<IBreadcrumb>) => void
}

export const AppContext = createContext<ContextProps>({
  titlePage: '',
  breadcrumbs: [],
  handleBreadcrumbs: () => {
    return
  },
  handleTitlePage: () => {
    return
  },
})

export const AppMenuProvider = (props: { children: React.ReactNode }): JSX.Element => {
  const { children } = props
  const [titlePage, setTitlePage] = useState<string>(MY_PETS)
  const [breadcrumbs, setBreadcrumbs] = useState<Array<IBreadcrumb>>([])
  const handleTitlePage = (value: string) => {
    if (value === 'Home') {
      value = MY_PETS
    }
    setTitlePage(value)
  }

  const handleBreadcrumbs = (next: Array<IBreadcrumb>) => {
    setBreadcrumbs(next)
  }

  return (
    <AppContext.Provider value={{ titlePage, breadcrumbs, handleBreadcrumbs, handleTitlePage }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppMenu = (): ContextProps => useContext(AppContext)
