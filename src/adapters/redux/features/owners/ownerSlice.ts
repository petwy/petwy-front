import { createSlice } from '@reduxjs/toolkit'
import { createOwner, getByOwnerID } from '../../thunks/owner'
import { OwnerRegistry } from '../../../../domain/entities/owners/ownerRegistry'
import { IOwner } from '../../../../domain/entities/owners/owner'

export type OwnerState = {
  ownerRegistry: OwnerRegistry
  owner: IOwner
  isLoading: boolean
  error: string
}

const initialState: OwnerState = {
  ownerRegistry: {} as OwnerRegistry,
  owner: {} as IOwner,
  isLoading: false,
  error: '',
}

export const ownerSlice = createSlice({
  name: 'owners',
  initialState,
  reducers: {
    isLoading(state) {
      state.isLoading = !state.isLoading
    },
  },
  extraReducers(builder) {
    builder
      /*
       * createOwner: create new owners with OwnerRegistry payload
       * */
      .addCase(createOwner.pending, (state) => {
        state.isLoading = !state.isLoading
      })
      .addCase(createOwner.fulfilled, (state, action) => {
        state.ownerRegistry = action.payload
      })
      .addCase(createOwner.rejected, (state, action) => {
        state.error = action.payload as string
      })
      /*
       * getByOwnerID: get owner from login
       * */
      .addCase(getByOwnerID.pending, (state) => {
        state.isLoading = !state.isLoading
      })
      .addCase(getByOwnerID.fulfilled, (state, action) => {
        state.owner = action.payload
      })
      .addCase(getByOwnerID.rejected, (state, action) => {
        state.error = action.payload as string
      })
  },
})
export const { isLoading } = ownerSlice.actions
export default ownerSlice.reducer
