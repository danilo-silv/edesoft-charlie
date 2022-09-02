import { TUser } from '../../../reducks/resources/user/reducer'
import client from '../../client'

export const getAllUsers = () => client.get<TUser[]>('/users')
