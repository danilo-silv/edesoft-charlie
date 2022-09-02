import { FC } from 'react'

import { app } from '../../../hooks'
import { user } from '../../../reducks/resources'
import theme from '../../../styles/theme'
import { Container, Heading } from '../../atoms'
import UserList from '../UserList'
import UserPreview from '../UserPreview'

const App: FC = () => {
  const { useAppSelector, useAppDispatch } = app

  const { users, isLoading, currentUser } = useAppSelector(
    (state) => state.userReducer
  )

  const dispatch = useAppDispatch()

  if (!users?.length && !isLoading) {
    dispatch(user.actions.getUsers())
  }

  return (
    <Container>
      <div className="py-16 md:py-28">
        <div className="grid grid-cols-12 gap-x-4">
          <Heading
            level={6}
            lineHeight="28px"
            margin="0px 0px 12px"
            textColor={theme.colors.text.primaryDark}
          >
            Usuários
          </Heading>

          {users?.length && (
            <div className="col-span-8 col-start-1 mb-4 lg:mb-0 lg:relative">
              <UserList users={users} />
            </div>
          )}
          {currentUser && (
            <div className="col-span-4 col-start-9">
              <div className="lg:sticky top-24">
                <UserPreview user={currentUser} />
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  )
}

export default App
