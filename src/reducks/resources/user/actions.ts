import { AppThunk } from '../../store'
import { setLoading, setUsers, setUsersFailed } from './reducer'

export const getUsers = (): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoading(true))

    // const currentUser = getUsersFromAPI('https://auth-end-point.com/login')

    // dispatch(setUsers(currentUser))
  } catch (error) {
    dispatch(setUsersFailed({ message: 'Um erro ocorreu ao buscar usuários' }))
  } finally {
    dispatch(setLoading(false))
  }
}
