import styled from 'styled-components'

type Props = {
  offset?: number
  mobileOffset?: number
}

const Spacing = styled.div<Props>`
  height: ${({ offset }) => offset || 48}px;
  width: 100%;
  position: relative;

  @media (max-width: 768px) {
    height: ${({ mobileOffset }) => mobileOffset || 32}px;
  }
`

export default Spacing
