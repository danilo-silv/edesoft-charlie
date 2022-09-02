import { FC } from 'react'

import { app } from '../../../hooks'
import { user } from '../../../reducks/resources'
import { Container } from '../../atoms'
import UserList from '../UserList'

const App: FC = () => {
  const { useAppSelector, useAppDispatch } = app

  const { users, isLoading } = useAppSelector((state) => state.userReducer)

  const dispatch = useAppDispatch()

  if (!users?.length && !isLoading) {
    dispatch(user.actions.getUsers())
  }

  return (
    <Container>
      <div className="py-16 md:py-28">
        <UserList users={users} />
      </div>
    </Container>
  )
}

export default App
