import petRepository from '../../../web/repository/pet'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { PetRegistryState } from '../../features/pets/slice'

export const createPet = createAsyncThunk('pets/create', async (registry: PetRegistryState) => {
  const { id, pet } = registry
  return await petRepository.create(id, pet)
})

export const getPetByID = createAsyncThunk('pets/get', async (id: string) => {
  console.log('here pet by id')
  return await petRepository.get(id)
})
