import * as integration from '../../../integration'
import { AppThunk } from '../../store'
import { setLoading, setUsers, setUsersFailed } from './reducer'

export const getUsers = (): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoading(true))

    const { data } = await integration.resources.user.requests.fetchUsers()

    console.log(data)

    // dispatch(setUsers(currentUser))
  } catch (error) {
    dispatch(setUsersFailed({ message: 'Um erro ocorreu ao buscar usuários' }))
  } finally {
    dispatch(setLoading(false))
  }
}
