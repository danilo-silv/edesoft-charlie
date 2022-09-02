import { configureStore, Action } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import logger from 'redux-logger'
import { ThunkAction } from 'redux-thunk'

import lib from '../lib'
import reducer, { AppState } from './reducers'

const {
  environment: { isDev }
} = lib

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: isDev()
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch()

export type AppThunk = ThunkAction<void, AppState, unknown, Action>

export default store
