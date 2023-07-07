import { createSlice } from '@reduxjs/toolkit'
import { IPet } from '../../../../domain/entities/pets/IPet'
import { IPetRegistry } from '../../../../domain/entities/pets/PetRegistry'
import { createPet, getPetByID } from '../../thunks/pet'
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
  reducers: {
    start(state: PetState) {
      state.isLoading = true
    },
  },
  extraReducers(builder) {
    // CREATE PET
    builder.addCase(createPet.pending, (state) => {
      console.log('here i am waiting')
    })
    builder.addCase(createPet.fulfilled, (state, action) => {
      state.pets.push(action.payload)
    })
    builder.addCase(createPet.rejected, (state) => {
      console.log('here i am rejecting')
    })
    // get PET BY ID
    builder.addCase(getPetByID.pending, (state) => {
      console.log('here i am waiting')
    })
    builder.addCase(getPetByID.fulfilled, (state, action) => {
      state.pet = action.payload
    })
    builder.addCase(getPetByID.rejected, (state) => {
      console.log('here i am rejecting')
    })
  },
})

export default slice.reducer
