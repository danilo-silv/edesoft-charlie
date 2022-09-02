import { TUser } from '../../../reducks/resources/user/reducer'
import client from '../../client'

export const getAllUsers = () => client.get<TUser[]>('/users')

export const updateUser = (user: TUser) =>
  client.put<TUser>(`/users/${user.id}`, user)

export const createUser = (user: TUser) => client.post<TUser>('/users', user)
