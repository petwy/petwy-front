import React, { JSX, useEffect } from 'react'
import { FormNewPet } from './form/FormNewPet'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../../../adapters/redux/store'
import { OwnerState } from '../../../adapters/redux/features/owners/ownerSlice'
import { getByOwnerID } from '../../../adapters/redux/thunks/owner'

export const AddPetByOwner = (): JSX.Element => {
  const { owner_id } = useParams()
  const dispatch = useDispatch<AppDispatch>()
  const state = useSelector<AppState>((state: AppState) => state.ownerState)
  const { owner } = state as OwnerState
  useEffect(() => {
    dispatch(getByOwnerID(owner_id as string))
  }, [])
  return <FormNewPet owner={owner} />
}
