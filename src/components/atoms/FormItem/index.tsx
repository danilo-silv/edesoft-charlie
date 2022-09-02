/* eslint-disable @typescript-eslint/no-empty-function */
import React, { PropsWithChildren } from 'react'

import classNames from 'classnames'
import { useTheme } from 'styled-components'

import Icon from '../Icon'
import { Item } from './style'

export type FormItemProps = PropsWithChildren<{
  className?: string
  error?: string
  hideMessage?: boolean
  margin?: string
  full?: boolean
  icon?: JSX.Element
}>

const FormItem: React.FC<FormItemProps> = ({
  className,
  children,
  error,
  full,
  icon,
  hideMessage,
  ...props
}) => {
  const theme = useTheme()

  const classNameForm = classNames(className, {
    error,
    full
  })

  return (
    <Item {...props} className={classNameForm}>
      {children}
      {!icon && !!error && (
        <div className="icon">
          <Icon color={theme.colors.text.error} name="alert-circle" size={24} />
        </div>
      )}
      {!hideMessage && <span>{error}</span>}
      {icon && <div className="icon">{icon}</div>}
    </Item>
  )
}

export default FormItem
