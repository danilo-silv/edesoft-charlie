import { PropsWithChildren } from 'react'

import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../../../styles/global'
import theme from '../../../styles/theme'

const Theme = ({
  children
}: PropsWithChildren<{
  //
}>): JSX.Element => {
  return (
    <ThemeProvider {...{ theme }}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default Theme
