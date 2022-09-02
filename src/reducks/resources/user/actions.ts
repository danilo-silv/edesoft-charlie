import * as integration from '../../../integration'
import { AppThunk } from '../../store'
import {
  setLoading,
  setUsers,
  setUsersFailed,
  setCurrentUser,
  TUser
} from './reducer'

export const getUsers = (): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoading(true))

    const { data } = await integration.resources.user.requests.getAllUsers()

    dispatch(setUsers(data))

    dispatch(setCurrentUser(data[1]))
  } catch (error) {
    dispatch(setUsersFailed({ message: 'Um erro ocorreu ao buscar usuários' }))
  } finally {
    dispatch(setLoading(false))
  }
}

export const updateUser =
  (user: TUser): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true))

      await integration.resources.user.requests.updateUser(user)

      //simulating a new fake listing
      dispatch(getUsers())
    } catch (error) {
      dispatch(setUsersFailed({ message: 'Um erro ocorreu ao editar usuário' }))
    }
  }

export const createUser =
  (user: TUser): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true))

      await integration.resources.user.requests.createUser(user)

      //simulating a new fake listing
      dispatch(getUsers())
    } catch (error) {
      dispatch(setUsersFailed({ message: 'Um erro ocorreu ao criar usuário' }))
    }
  }

export const deleteUser =
  (user: TUser): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true))

      await integration.resources.user.requests.deleteUser(user)

      //simulating a new fake listing
      dispatch(getUsers())
    } catch (error) {
      dispatch(setUsersFailed({ message: 'Um erro ocorreu ao criar usuário' }))
    }
  }

export const currentUser =
  (user?: TUser): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setCurrentUser(user))
    } catch (error) {
      // eslint-disable-next-line no-empty
    } finally {
    }
  }
