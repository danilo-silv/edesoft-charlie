import { combineReducers } from 'redux'

import * as resources from './resources'
import { UserState } from './resources/user/reducer'

export interface AppState {
  userReducer: UserState
}

export const combinedReducers = combineReducers({
  userReducer: resources.users.reducer
})

export default combinedReducers
