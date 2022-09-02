import { FC, useCallback, useState } from 'react'

import { TUser } from '../../../reducks/resources/user/reducer'
import theme from '../../../styles/theme'
import { Avatar, Heading, Text } from '../../atoms'
import Icon from '../../atoms/Icon'
import Modal from '../../atoms/Modal'
import { UserForm } from '../../molecules'

interface TProps {
  user: TUser
}

const UserPreview: FC<TProps> = ({ user }) => {
  const {
    name: { firstname, lastname },
    address: { street, number, city, zipcode },
    email,
    phone
  } = user

  const [open, setOpenModal] = useState(false)

  const handleCloseModal = useCallback(() => {
    setOpenModal(false)
  }, [])

  const handleEditCurrentUser = useCallback(() => {
    setOpenModal(true)
  }, [])

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
      </div>
      <Modal open={open} onClose={handleCloseModal}>
        <UserForm onClose={handleCloseModal} />
      </Modal>
    </div>
  )
}

export default UserPreview
