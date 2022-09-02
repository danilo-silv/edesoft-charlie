import { FunctionComponent, memo, ReactNode } from 'react'

import { Provider } from 'react-redux'

import store from '../../../reducks/store'
import Theme from '../Theme'

type TProps = {
  children: ReactNode
}

export const Wrapper: FunctionComponent<TProps> = memo(({ children }) => (
  <Provider store={store}>
    <Theme>{children}</Theme>
  </Provider>
))

export default Wrapper
