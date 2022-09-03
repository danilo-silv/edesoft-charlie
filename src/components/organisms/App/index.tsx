import { FC, useCallback, useEffect, useState } from 'react'

import { app } from '../../../hooks'
import { user } from '../../../reducks/resources'
import theme from '../../../styles/theme'
import { Container, Heading } from '../../atoms'
import Modal from '../../atoms/Modal'
import { UserForm } from '../../molecules'
import UserList from '../UserList'
import UserPreview from '../UserPreview'

const App: FC = () => {
  const [open, setOpenModal] = useState(false)

  const [action, setAction] = useState<'CREATE' | 'EDIT'>('EDIT')

  const { useAppSelector, useAppDispatch } = app

  const { users, isLoading, currentUser } = useAppSelector(
    (state) => state.userReducer
  )

  const dispatch = useAppDispatch()

  if (!users?.length && !isLoading) {
    dispatch(user.actions.getUsers())
  }

  const handleCloseModal = useCallback(() => {
    setOpenModal(false)
  }, [])

  const handleEditCurrentUser = useCallback(() => {
    setAction('EDIT')

    setOpenModal(true)
  }, [])

  const handleCreateUser = useCallback(() => {
    setAction('CREATE')

    setOpenModal(true)
  }, [])

  const handleDeleteUser = useCallback(() => {
    if (currentUser) dispatch(user.actions.deleteUser(currentUser))
  }, [dispatch, currentUser])

  useEffect(() => {
    if (users?.length && !isLoading) {
      dispatch(user.actions.currentUser(users[1]))
    }
  }, [dispatch, isLoading, users])

  return (
    <Container>
      <div className="py-16 md:py-28">
        <div className="grid grid-cols-12 gap-x-4">
          <div className="col-span-8 col-start-1 mb-4 flex justify-between items-center w-full">
            <Heading
              level={6}
              lineHeight="28px"
              textColor={theme.colors.text.primaryDark}
            >
              Usuários
            </Heading>

            <button
              onClick={handleCreateUser}
              className="flex justify-center items-center rounded-full bg-brand w-28 h-12 focus:outline-none primary leading-tight text-xs font-normal text-white font-serif"
              type="button"
            >
              Criar usuário
            </button>
          </div>
          {users?.length && (
            <div className="col-span-8 col-start-1 mb-4 lg:mb-0 lg:relative">
              <UserList users={users} />
            </div>
          )}
          {currentUser && (
            <div className="col-span-4 col-start-9">
              <div className="lg:sticky top-24">
                <UserPreview
                  user={currentUser}
                  editCurrentUser={handleEditCurrentUser}
                  deleteCurrentUser={handleDeleteUser}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <Modal open={open} onClose={handleCloseModal}>
        <UserForm action={action} onClose={handleCloseModal} />
      </Modal>
    </Container>
  )
}

export default App
