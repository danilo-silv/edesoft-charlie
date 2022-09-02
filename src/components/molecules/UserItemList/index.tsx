import styled, { useTheme } from 'styled-components'

import { TUser } from '../../../reducks/resources/user/reducer'
import { Avatar, Heading, Text } from '../../atoms'

const Item = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  position: relative;
`

const UserItem: React.FC<TUser> = ({ name, email, phone }) => {
  const theme = useTheme()

  return (
    <Item>
      <div className="flex justify-between mt-2">
        <div className="flex justify-center ml-4">
          <Avatar
            size="lg"
            image="https://randomuser.me/api/portraits/men/34.jpg"
          />
          <div className="ml-2">
            <Heading
              textColor={theme.colors.text.primaryDark}
              level={6}
              className="capitalize"
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

export default UserItem
