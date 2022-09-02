import { FC, useMemo } from 'react'

import { TUser } from '../../../reducks/resources/user/reducer'
import { UserItemList } from '../../molecules'

interface TProps {
  users?: TUser[]
}

const UserList: FC<TProps> = ({ users }) => {
  const list = useMemo(
    () =>
      (users || []).map((user: TUser) => (
        <div className="col-span-1 lg:col-span-2 xl:col-span-1" key={user.id}>
          <UserItemList {...user} />
        </div>
      )),
    [users]
  )

  return (
    <div className="grid grid-cols-1 gap-3 p-4  divide-y divide-secondary-lightest rounded shadow-[0_1px_20px_-12px_rgba(0,0,0,0.4)]">
      {list}
    </div>
  )
}

export default UserList
