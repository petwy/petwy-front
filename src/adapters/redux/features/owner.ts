import { createSlice } from '@reduxjs/toolkit'

export const ownerSlice = createSlice({
  name: 'owners',
  initialState: [],
  reducers: {
    addOwner: (state, action: { payload: any }) => {
      const { payload } = action
      state.push(payload as never)
    },
  },
})

export const { addOwner } = ownerSlice.actions
export default ownerSlice.reducer
