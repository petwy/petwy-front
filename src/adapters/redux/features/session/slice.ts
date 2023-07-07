import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type TemplateState<T> = {
  entity: T
}

const initialState: TemplateState<any> = {
  entity: {},
}

export const slice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    create(state: TemplateState<any>, action: PayloadAction<TemplateState<any>>) {
      state.entity = action.payload
    },
  },
})

export const { create } = slice.actions
export default slice.reducer
