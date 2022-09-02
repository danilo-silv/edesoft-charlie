import Popup from 'reactjs-popup'
import styled from 'styled-components'

export const ModalContainer = styled(Popup)`
  @keyframes fadeIn {
    0% {
      transform: translateY(0deg);
      opacity: 0;
    }

    100% {
      transform: translateY(0deg);
      opacity: 1;
      visibility: visible;
    }
  }

  &-content {
    padding: 27px;
    background: ${({ theme }) => theme.colors.text.white};
    max-width: 552px;
    width: 90%;
    animation: fadeIn cubic-bezier(0.1, 0.2, 0.1, 0.1) 0.2s;
    animation-delay: 0.1s;
    animation-fill-mode: both;
    cursor: default;
    position: relative;

    box-shadow: 0px 24px 24px rgba(0, 0, 0, 0.04);
    border-radius: 10px;

    .modalClose svg {
      height: 18px;
      width: 18px;
    }
    max-width: 100%;
    width: 100%;
    height: 100%;
    border-radius: 0px;
  }

  &-overlay {
    background: rgba(23, 23, 23, 0.8);
    cursor: pointer;
  }
`
