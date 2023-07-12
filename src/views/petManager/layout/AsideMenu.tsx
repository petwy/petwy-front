import React, { JSX, useEffect } from 'react'
import { MenuItem } from './menuItem'
import { IPet } from '../../../domain/entities/pets/IPet'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../../../adapters/redux/store'
import { OwnerState } from '../../../adapters/redux/features/owners/ownerSlice'
import { getByOwnerID } from '../../../adapters/redux/thunks/owner'
import { menu, settingMenu } from '../../../data/menu'
import { toCapitalize } from '../../../shared/utils'
import { LoadingBar } from '../../../shared/components/loadingBar/LoadingBar'

export function AsideOwnerMenu(props: { owner_id: string }): JSX.Element {
  const { owner_id } = props
  const dispatch = useDispatch<AppDispatch>()
  const state = useSelector<AppState>((state: AppState) => state.ownerState)
  const { owner } = state as OwnerState
  const ownerName = toCapitalize(owner?.name)
  const ownerSurname = toCapitalize(owner?.surname)
  useEffect(() => {
    if (owner_id !== undefined) {
      dispatch(getByOwnerID(owner_id as string))
    }
  }, [])

  const profile = (): React.JSX.Element => {
    return (
      <div className={'flex items-center gap-3 justify-start px-3 py-3'}>
        <div className={'border-2 border-main-dark bg-white p-9 rounded-full'}></div>
        <div>
          <h1 className={`text-2xl`}>{ownerName + ' ' + ownerSurname}</h1>
          <p className={'text-gray-light text-md italic'}>
            {owner?.pets
              ? 'humano de ' +
                owner.pets
                  .map((p: IPet, i: number) =>
                    i === 0 ? `${p.name}` : owner.pets.length - 1 === i ? ` y ${p.name}` : `, ${p.name}`
                  )
                  .join('')
              : 'aun no tienes mascotas'}
          </p>
        </div>
      </div>
    )
  }

  return owner.owner_id ? (
    <div className={'w-max-1/3 px-2 py-6 h-full bg-main text-white'}>
      {profile()}
      {/* MENU */}
      <div className={'flex flex-col w-full gap-3 justify-center items-start p-3'}>
        <div className={'flex flex-col gap-3 w-full'}>
          {menu(owner_id).map((m) => (
            <MenuItem link={m.link} key={m.label} Icon={m.icon} label={m.label} />
          ))}
        </div>
        <div className={'flex flex-col gap-3'}>
          {settingMenu.map((m) => (
            <MenuItem link={m.link} key={m.label} Icon={m.icon} label={m.label} />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <LoadingBar />
  )
}
