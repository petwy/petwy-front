import { configureStore } from '@reduxjs/toolkit'
import config from '../../config/config'
import reducers from './features'
import { ownerSyncRepositoryMiddleware } from './middlewares/ownerSyncRepository'

const store = configureStore({
  reducer: reducers,
  devTools: config.api.core.environment !== '"production"',
  middleware: [ownerSyncRepositoryMiddleware],
})

store.subscribe(() => console.log('STATE APP: ', store.getState()))

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
