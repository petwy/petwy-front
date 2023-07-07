import React, { JSX, useEffect } from 'react'
import { IPet } from '../../../domain/entities/pets/IPet'
import PetCard from '../petCard/PetCard'
import { NoPetsHome } from './noPetsHome/NoPetsHome'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../../../adapters/redux/store'
import { OwnerState } from '../../../adapters/redux/features/owners/ownerSlice'
import { getByOwnerID } from '../../../adapters/redux/thunks/owner'

export const OwnerHome = (): JSX.Element => {
  const { owner_id: id } = useParams()
  const dispatch = useDispatch<AppDispatch>()
  const state = useSelector<AppState>((state: AppState) => state.ownerState)
  const { owner } = state as OwnerState

  useEffect(() => {
    dispatch(getByOwnerID(id as string))
  }, [])
  return (
    <div className={'grid grid-cols-3 gap-3 w-full justify-center items-center'}>
      {owner?.pets ? owner.pets.map((p: IPet) => <PetCard key={p.name} pet={p} />) : <NoPetsHome />}
    </div>
  )
}
