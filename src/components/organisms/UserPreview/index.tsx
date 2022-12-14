import { FC } from 'react'

import { TUser } from '../../../reducks/resources/user/reducer'
import theme from '../../../styles/theme'
import { Avatar, Heading, Text } from '../../atoms'
import Icon from '../../atoms/Icon'

interface TProps {
  user: TUser
  editCurrentUser: () => void
  deleteCurrentUser: () => void
}

const UserPreview: FC<TProps> = ({
  user,
  editCurrentUser,
  deleteCurrentUser
}) => {
  const {
    name: { firstname, lastname },
    address: { street, number, city, zipcode },
    email,
    phone
  } = user

  const handleEditCurrentUser = () => {
    if (editCurrentUser) editCurrentUser()
  }

  const handleDeleteCurrentUser = () => {
    if (deleteCurrentUser) deleteCurrentUser()
  }

  return (
    <div className="p-4 rounded shadow-[0_1px_20px_-12px_rgba(0,0,0,0.4)]">
      <div className="flex flex-col justify-center items-center">
        <Avatar
          size="xlg"
          image="https://randomuser.me/api/portraits/men/34.jpg"
        />
        <Heading
          style={{
            fontWeight: 600,
            lineHeight: '125%',
            margin: '16px 0px',
            textTransform: 'capitalize'
          }}
          textColor={theme.colors.text.primaryDarkest}
          level={6}
        >
          {firstname} {lastname}
        </Heading>

        <button
          onClick={handleEditCurrentUser}
          className="flex justify-center items-center mb-4 rounded-full bg-brand w-full h-12 focus:outline-none primary leading-tight text-xs font-normal text-white font-serif"
          type="button"
        >
          <Icon
            className="pr-2"
            name="pencil"
            color={theme.colors.text.white}
          />
          Editar Perfil
        </button>
      </div>
      <div className="flex flex-col justify-start items-start">
        <div className="flex items-center mb-1">
          <Icon
            className="pr-1"
            name="pin"
            color={theme.colors.text.primaryDark}
          />
          <Text variant="xs" textColor={theme.colors.text.primaryLight}>
            {street}, {number} {city}, {zipcode}
          </Text>
        </div>
        <div className="flex items-center mb-1">
          <Icon
            className="pr-1"
            name="mail"
            color={theme.colors.text.primaryDark}
          />
          <Text variant="xs" textColor={theme.colors.text.primaryLight}>
            {email}
          </Text>
        </div>
        <div className="flex items-center mt-1">
          <Icon
            className="pr-1"
            name="phone"
            color={theme.colors.text.primaryDark}
          />
          <Text variant="xs" textColor={theme.colors.text.primaryLight}>
            {phone}
          </Text>
        </div>

        <div className="flex justify-center mt-3 w-full">
          <Icon
            name="trash"
            cursor="pointer"
            color={theme.colors.text.error}
            onClick={handleDeleteCurrentUser}
          />
        </div>
      </div>
    </div>
  )
}

export default UserPreview
