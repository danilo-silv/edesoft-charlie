import { FunctionComponent } from 'react'

import { PopupProps } from 'reactjs-popup/dist/types'

import Icon from '../Icon'
import { ModalContainer } from './styles'

type TProps = PopupProps & {
  hiddenCloseButton?: boolean
}

const Modal: FunctionComponent<TProps> = ({
  children,
  hiddenCloseButton,
  onClose,
  ...props
}) => {
  return (
    <ModalContainer
      {...props}
      contentStyle={{ overflow: 'scroll' }}
      closeOnDocumentClick={false}
      onClose={onClose}
    >
      {!hiddenCloseButton && (
        <div
          className="absolute flex justify-end items-center pointer-events-auto"
          style={{ right: 27 }}
        >
          <Icon className="modalClose z-0" name="modalClose" color="black" />
          <button
            id="close"
            className="focus:outline-none p-5 w-full h-full absolute z-10 "
            onClick={onClose}
          ></button>
        </div>
      )}

      {children}
    </ModalContainer>
  )
}

export default Modal
