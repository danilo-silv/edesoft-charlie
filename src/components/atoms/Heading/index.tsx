import styled from 'styled-components'

import theme from '../../../styles/theme'

interface TProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  as?: string
  textColor?: string
  extraBold?: boolean
  margin?: string
  lineHeight?: string
}

export const getClassesByLevel = (level?: number) => {
  switch (level) {
    case 1:
      return 'leading-5 md:leading-10 text-4xl md:text-6xl font-bold'

    case 2:
      return 'leading-5 md:leading-9 text-3xl md:text-5xl font-bold'

    case 3:
      return 'leading-5 md:leading-8 text-xl md:text-4xl font-bold'

    case 4:
      return 'leading-5 md:leading-7 text-lg md:text-3xl font-bold'

    case 5:
      return 'leading-5 md:leading-6 text-3xl font-bold'

    case 6:
      return 'leading-5 text-xl md:text-2xl font-bold'

    default:
      return 'leading-5 md:leading-10 text-4xl md:text-6xl font-bold'
  }
}

const Heading = styled.h1.attrs<TProps>(({ as, level = 1 }) => ({
  as: as || `h${level}`,
  variant: `h${level}`,
  className: getClassesByLevel(level)
}))`
  margin: ${({ margin }: TProps) => margin};
  color: ${({ textColor }: TProps) =>
    textColor || theme.colors.text.primaryDark};
  font-family: ${theme.typography.secondary};
  line-height: ${({ lineHeight }: TProps) => lineHeight};
`

export default Heading
