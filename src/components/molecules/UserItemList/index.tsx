import { useCallback } from 'react'

import styled, { useTheme } from 'styled-components'

import { app } from '../../../hooks'
import * as resources from '../../../reducks/resources'
import { TUser } from '../../../reducks/resources/user/reducer'
import { Avatar, Heading, Text } from '../../atoms'

const Item = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  position: relative;
`

const UserItemList: React.FC<TUser> = (user) => {
  const { name, email, phone, id } = user

  const theme = useTheme()

  const { useAppSelector, useAppDispatch } = app

  const { currentUser } = useAppSelector((state) => state.userReducer)

  const dispatch = useAppDispatch()

  const handleCurrentUser = useCallback(() => {
    return dispatch(resources.user.actions.currentUser(user))
  }, [user, dispatch])

  const isActive = currentUser?.id === id

  return (
    <Item
      onClick={handleCurrentUser}
      className={`cursor-pointer border-b py-2 border-secondary-lightest divide-secondary-lightest hover:opacity-60 duration-400 ease-in-out ${
        isActive && 'bg-brand-hover'
      }`}
    >
      <div className="flex justify-between">
        <div className="flex justify-center ml-4">
          <Avatar
            size="lg"
            image="https://randomuser.me/api/portraits/men/34.jpg"
          />
          <div className="ml-2">
            <Heading
              textColor={theme.colors.text.primaryDark}
              level={6}
              className="capitalize border-b-2 border-y-brand mb-2"
            >
              {name.firstname} {name.lastname}
            </Heading>

            <Text variant="s" textColor={theme.colors.text.primaryLight}>
              {email}, {phone}
            </Text>
          </div>
        </div>
      </div>
    </Item>
  )
}

export default UserItemList
