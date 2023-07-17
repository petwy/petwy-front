import React, { JSX, useEffect } from 'react'
import { Outlet, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import HeaderView from './headerView'
import { AsideOwnerMenu } from './AsideMenu'
import { OwnerState } from '../../../adapters/redux/features/owners/ownerSlice'
import { AppDispatch, AppState } from '../../../adapters/redux/store'
import { getByOwnerID } from '../../../adapters/redux/thunks/owner'

const breadcrumbs = [
  { label: 'Home', link: '' },
  { label: 'Mis Mascotas', link: '' },
]
export default function OwnerManager(): JSX.Element {
  const { owner_id } = useParams()
  const dispatch = useDispatch<AppDispatch>()
  const state = useSelector<AppState>((state: AppState) => state.ownerState)
  const { owner } = state as OwnerState

  useEffect(() => {
    dispatch(getByOwnerID(owner_id as string))
  }, [])

  return (
    <div className={'flex flex-row gap-3 bg-white-abs h-full w-full overflow-hidden'}>
      <AsideOwnerMenu owner_id={owner?.owner_id} />
      <div className={'flex flex-col gap-3 w-full'}>
        <HeaderView />
        <div className={'container flex justify-center h-full w-full px-3 py-2 overflow-y-auto overflow-x-hidden'}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
