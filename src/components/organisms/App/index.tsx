import { FC, useEffect } from 'react'

import { app } from '../../../hooks'
import { user } from '../../../reducks/resources'

const App: FC = () => {
  const { useAppSelector, useAppDispatch } = app

  const { users, isLoading } = useAppSelector((state) => state.userReducer)

  const dispatch = useAppDispatch()

  if (!users?.length && !isLoading) {
    dispatch(user.actions.getUsers())
  }

  return <h1 className="text-3xl font-bold underline">Hello world!</h1>
}

export default App
