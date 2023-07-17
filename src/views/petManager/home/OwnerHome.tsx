import React, { JSX, useEffect } from 'react'
import { IPet } from '../../../domain/entities/pets/IPet'
import PetCard from '../petCard/PetCard'
import { NoPetsHome } from './noPetsHome/NoPetsHome'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../../../adapters/redux/store'
import { OwnerState } from '../../../adapters/redux/features/owners/ownerSlice'
import { getByOwnerID } from '../../../adapters/redux/thunks/owner'
import { styles } from '../../../config/styles'
import { ButtonAddPet } from '../../../shared/components/buttons/pet/ButtonAddPet'
import { Tooltip } from '../../../shared/components/loadingBar/toolTip/ToolTip'
import { useNavigate } from 'react-router-dom'
import { routes } from '../../../config/routes'

export const OwnerHome = (): JSX.Element => {
  const { owner_id: id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const state = useSelector<AppState>((state: AppState) => state.ownerState)
  const { owner } = state as OwnerState

  useEffect(() => {
    dispatch(getByOwnerID(id as string))
  }, [])

  const petAlive = (): JSX.Element => (
    <div className={'flex flex-col gap-3 w-full'}>
      <div className={'flex flex-row justify-between mx-3'}>
        <h1 className={styles.text.title}>Mascotas Activas</h1>
        <Tooltip content={'Agrega una mascota'}>
          <ButtonAddPet size={'sm'} onHandle={() => navigate(routes.owners.manager.pets.new)} />
        </Tooltip>
      </div>

      <div className={'alive grid grid-cols-3 gap-3 w-full justify-center items-start'}>
        {owner?.pets?.filter((p) => p.is_alive && p.is_enable).length > 0 ? (
          owner.pets.filter((p: IPet) => p.is_alive && p.is_enable).map((p: IPet) => <PetCard key={p.name} pet={p} />)
        ) : (
          <NoPetsHome />
        )}
      </div>
    </div>
  )

  const petRemain = (): JSX.Element => (
    <div className={'flex flex-col gap-3 w-full'}>
      <h1 className={styles.text.title}>Mis Recuerdos</h1>
      <div className={'alive grid grid-cols-3 gap-3 w-full justify-center items-start'}>
        {owner?.pets
          ? owner.pets
              .filter((p: IPet) => !p.is_alive && !p.is_enable)
              .map((p: IPet) => <PetCard key={p.name} pet={p} />)
          : null}
      </div>
    </div>
  )

  return (
    <div className={'container flex flex-col gap-6'}>
      <div className={'flex flex-col'}>{petAlive()}</div>
      <div className={'flex flex-col'}>{petRemain()}</div>)
    </div>
  )
}
