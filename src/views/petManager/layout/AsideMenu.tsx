import React, { JSX, useEffect } from 'react'
import { MenuItem } from './menuItem'
import { IPet } from '../../../domain/entities/pets/IPet'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../../../adapters/redux/store'
import { OwnerState } from '../../../adapters/redux/features/owners/ownerSlice'
import { getByOwnerID } from '../../../adapters/redux/thunks/owner'
import { menu, settingMenu } from '../../../data/menu'

export function AsideOwnerMenu(props: { owner_id: string }): JSX.Element {
  const { owner_id } = props
  const dispatch = useDispatch<AppDispatch>()
  const state = useSelector<AppState>((state: AppState) => state.ownerState)
  const { owner } = state as OwnerState
  useEffect(() => {
    if (owner_id !== undefined) {
      dispatch(getByOwnerID(owner_id as string))
    }
  }, [])
  return (
    <div className={'w-1/3'}>
      {/* AVATAR-PROFILE */}
      <div className={'flex items-center gap-3 justify-start px-3 py-3'}>
        {/* AVATAR */}
        <div className={'border-2 border-secondary bg-gray-light p-9 rounded-full'}></div>
        {/* PROFILE */}
        <div>
          <h1 className={``}>{owner?.name + ' ' + owner?.surname}</h1>
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
      {/* MENU */}
      <div className={'flex flex-col gap-3 justify-center items-start p-3'}>
        <div className={'flex flex-col gap-3'}>
          {menu(owner_id).map((m) => (
            <MenuItem link={m.link} key={m.label} Icon={m.icon} style={m.style} label={m.label} />
          ))}
        </div>
        <div className={'flex flex-col gap-3'}>
          {settingMenu.map((m) => (
            <MenuItem link={m.link} key={m.label} Icon={m.icon} style={m.style} label={m.label} />
          ))}
        </div>
      </div>
    </div>
  )
}
