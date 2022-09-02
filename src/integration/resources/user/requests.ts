import * as request from '../../request'
import { UserSerializers } from './serializers'

const serializers = new UserSerializers()

export const fetchUsers = async () => {
  try {
    const res = await request.get('/users')

    return serializers.items(res)
  } catch (err) {
    return Promise.reject(err)
  }
}
