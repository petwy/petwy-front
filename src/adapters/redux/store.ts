import { configureStore } from '@reduxjs/toolkit'
import config from '../../config/config'
import reducers from './features'

const store = configureStore({
  reducer: reducers,
  devTools: config.api.core.environment !== '"production"',
})

store.subscribe(() => console.log('state app: ', store.getState()))

export default store

export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof store.getState>
