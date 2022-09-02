import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AppState } from '../../reducers'

export interface UserError {
  message: string
}

export interface TUser {
  id: number
  email: string
  username: string
  password: string
  name: {
    firstname: string
    lastname: string
  }
  address: {
    city: string
    street: string
    number: number
    zipcode: string
    geolocation: {
      lat: string
      long: string
    }
  }
  phone: string
}

export interface UserState {
  users?: TUser[]
  currentUser?: TUser
  isLoading: boolean
  error: UserError
}

export const initialState: UserState = {
  isLoading: false,
  error: { message: 'Um erro ocorreu' }
}

export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload
    },
    setUsers: (state, { payload }: PayloadAction<TUser[]>) => {
      state.users = payload
    },
    setCurrentUser: (state, { payload }: PayloadAction<TUser>) => {
      state.currentUser = payload
    },
    createPost(state, { payload }: PayloadAction<TUser>) {
      state.users?.push(payload)
    },
    updatePost(state, { payload }: PayloadAction<TUser>) {
      state.users = state.users?.map((user) =>
        user.id === payload.id ? { ...payload } : user
      )
    },
    deletePost(state, { payload }: PayloadAction<number>) {
      state.users = state.users?.filter((user) => user.id !== payload)
    },
    setUsersFailed: (state, { payload }: PayloadAction<UserError>) => {
      state.error = payload
    }
  }
})

const { actions, reducer } = usersSlice

export const {
  setLoading,
  setUsers,
  createPost,
  updatePost,
  deletePost,
  setUsersFailed,
  setCurrentUser
} = actions

export default reducer

export const userSelector = (state: AppState) => state.userReducer
