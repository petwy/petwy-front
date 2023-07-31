import React, { JSX, useEffect } from 'react'
import { Outlet, useParams } from 'react-router'
import Header from './Pets/Layout/Header'
import { AppMenuProvider } from '../../shared/hooks/useAppMenu'
import { useOwner } from '../../shared/hooks/useOwner'

export default function OwnerManager(): JSX.Element {
  const { owner_id } = useParams()
  const { isLoading, loading, fetchOwner } = useOwner()

  useEffect(() => {
    loading()
    if (owner_id) {
      fetchOwner(owner_id)
    }
  }, [])
  return (
    <AppMenuProvider>
      <div className={'flex flex-col gap-3 bg-white-abs h-full w-full overflow-hidden'}>
        <Header />
        <div className={'container flex justify-center h-full w-full px-3 py-2 mb-3 overflow-y-auto overflow-x-hidden'}>
          {isLoading ? <h1>Loading</h1> : <Outlet />}
        </div>
      </div>
    </AppMenuProvider>
  )
}
