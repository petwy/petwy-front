import type { AppDispatch, AppState } from './store'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
