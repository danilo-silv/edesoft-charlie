import { combineReducers } from 'redux'

import * as resources from './resources'
import { UserState } from './resources/user/reducer'

export interface AppState {
  usersReducer: UserState
}

export const combinedReducers = combineReducers({
  usersReducer: resources.users.reducer
})

export default combinedReducers
