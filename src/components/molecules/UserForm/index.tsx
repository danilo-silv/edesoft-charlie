import { FC, useMemo } from 'react'

import { TUser } from '../../../reducks/resources/user/reducer'

interface TProps {
  user?: TUser
}

const UserForm: FC<TProps> = ({ user }) => {
  return (
    <div className="grid grid-cols-1 gap-3 p-4  divide-y divide-secondary-lightest rounded shadow-[0_1px_20px_-12px_rgba(0,0,0,0.4)]">
      <h1>TESTE</h1>
    </div>
  )
}

export default UserForm
