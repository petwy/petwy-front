import { createSlice } from '@reduxjs/toolkit'
import { IPet } from '../../../../domain/entities/pets/IPet'
import { IPetRegistry } from '../../../../domain/entities/pets/PetRegistry'
import { addChip, createPet, getPetByID, patchPet } from '../../thunks/pet'
import { IPetIdentificationOwner } from '../../../../domain/entities/pets/IPetIdentificationOwner'

export type PetRegistryState = {
  id: IPetIdentificationOwner
  pet: IPetRegistry
}

export type PetState = {
  pets: Array<IPet>
  pet: IPet
  registry: PetRegistryState
  isLoading: boolean
}

const initialState: PetState = {
  pets: [],
  pet: {} as IPet,
  registry: {} as PetRegistryState,
  isLoading: false,
}

export const slice = createSlice({
  name: 'pets',
  initialState,
  reducers: {},
  extraReducers(builder) {
    // CREATE PET
    builder.addCase(createPet.pending, (state) => {})
    builder.addCase(createPet.fulfilled, (state, action) => {
      state.pets.push(action.payload)
    })
    builder.addCase(createPet.rejected, (state) => {})
    // get PET BY ID
    builder.addCase(getPetByID.pending, (state) => {})
    builder.addCase(getPetByID.fulfilled, (state, action) => {
      state.pet = action.payload
    })
    builder.addCase(getPetByID.rejected, (state) => {})
    // PATCH
    builder.addCase(patchPet.pending, (state) => {})
    builder.addCase(patchPet.fulfilled, (state, action) => {
      state.pet = action.payload
    })
    builder.addCase(patchPet.rejected, (state) => {})
    // ADD CHIP
    builder.addCase(addChip.pending, (state) => {})
    builder.addCase(addChip.fulfilled, (state, action) => {
      state.pet = action.payload
    })
    builder.addCase(addChip.rejected, (state) => {})
  },
})

export default slice.reducer
