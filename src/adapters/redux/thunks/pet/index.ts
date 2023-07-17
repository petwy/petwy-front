import petRepository from '../../../web/repository/pet'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { PetRegistryState } from '../../features/pets/slice'
import { IChipUpdate, IPetUpdate } from '../../../../domain/entities/pets/IPetUpdate'

export const createPet = createAsyncThunk('pets/create', async (registry: PetRegistryState) => {
  const { id, pet } = registry
  return await petRepository.create(id, pet)
})

export const getPetByID = createAsyncThunk('pets/get', async (id: string) => {
  return await petRepository.get(id)
})

export const patchPet = createAsyncThunk('pets/patch', async (update: IPetUpdate) => {
  return await petRepository.patch(update.pet_id, update)
})

export const addChip = createAsyncThunk('pets/add_chip', async (chip: IChipUpdate) => {
  return await petRepository.addChip(chip)
})
