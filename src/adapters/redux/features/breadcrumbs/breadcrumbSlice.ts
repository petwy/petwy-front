import { createSlice } from '@reduxjs/toolkit'
import { IBreadcrumb } from '../../../../domain/components/appMenu/interfaces/IBreadcrumb'

export type BreadCrumbState = {
  breadcrumbs: Array<IBreadcrumb>
}

const initialState: BreadCrumbState = {
  breadcrumbs: [],
}
export const breadcrumbSlice = createSlice({
  name: 'breadcrumbs',
  initialState,
  reducers: {
    addBreadCrumb(state, action) {
      const payload = action.payload
      const existingElement = state.breadcrumbs.find((e) => e.label === payload.label)
      if (existingElement) {
        return
      } else {
        state.breadcrumbs = [...state.breadcrumbs, payload]
      }
    },
    removeBreadCrumb(state) {
      state.breadcrumbs = [...state.breadcrumbs.slice(0, state.breadcrumbs.length - 1)]
    },
  },
})
export const { addBreadCrumb, removeBreadCrumb } = breadcrumbSlice.actions
export default breadcrumbSlice.reducer
