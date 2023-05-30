import { configureStore } from '@reduxjs/toolkit'
import ownerReducer from './features/owner'

const store = configureStore({
  reducer: {
    owners: ownerReducer,
  },
})

export default store
