import { FC } from 'react'

import { TUser } from '../../../reducks/resources/user/reducer'
import theme from '../../../styles/theme'
import { Avatar, Heading, Text } from '../../atoms'

interface TProps {
  user: TUser
}

const UserPreview: FC<TProps> = ({ user }) => {
  const {
    name: { firstname, lastname }
  } = user

  return (
    <div className="flex flex-col p-4 justify-center items-center rounded shadow-[0_1px_20px_-12px_rgba(0,0,0,0.4)]">
      <Avatar
        size="xlg"
        image="https://randomuser.me/api/portraits/men/34.jpg"
      />
      <Heading
        style={{
          fontWeight: 600,
          lineHeight: '125%',
          margin: '16px 0px'
        }}
        textColor={theme.colors.text.primaryDarkest}
        level={6}
      >
        {firstname} {lastname}
      </Heading>

      <button
        className="flex justify-center items-center mb-4 rounded-full bg-brand w-full h-12 focus:outline-none primary leading-tight text-xs font-normal text-white font-serif"
        type="button"
      >
        Editar Perfil
      </button>

      <Text
        variant="xs"
        textColor={theme.colors.brand.primary}
        className="uppercase"
      >
        {new Date().toLocaleDateString()}
      </Text>
    </div>
  )
}

export default UserPreview
