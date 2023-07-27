import React, { JSX, useEffect } from 'react'
import { Outlet, useParams } from 'react-router'
import Header from './Layout/Header'
import { AppMenuProvider } from '../../../shared/hooks/useAppMenu'
import { useOwner } from '../../../shared/hooks/useOwner'
import { LoadingBar } from '../../../shared/components/loadingBar/LoadingBar'

const breadcrumbs = [
  { label: 'Home', link: '' },
  { label: 'Mis Mascotas', link: '' },
]
export default function OwnerManager(): JSX.Element {
  const { owner_id } = useParams()
  const { isLoading, loading, fetchOwner } = useOwner()
  // const { breadcrumbs } = useAppMenu()

  useEffect(() => {
    loading()
    if (owner_id) {
      fetchOwner(owner_id)
      // setBreadcrumbs([{ label: 'Home', link: routes.owners.manager.home(owner_id) }])
    }
  }, [])
  return (
    <AppMenuProvider>
      <div className={'flex flex-col gap-3 bg-white-abs h-full w-full overflow-hidden'}>
        <Header />
        <div className={'container flex justify-center h-full w-full px-3 py-2 overflow-y-auto overflow-x-hidden'}>
          {isLoading ? <h1>Loading</h1> : <Outlet />}
        </div>
      </div>
    </AppMenuProvider>
  )
}
