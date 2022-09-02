import styled from 'styled-components'

import { FormItemProps } from '.'

export const Item = styled.div<FormItemProps>`
  border: 1px solid ${(props) => props.theme.colors.element.secondaryLight};
  border-radius: 26px;
  display: flex;
  margin: ${({ margin }) => (margin ? margin : '20px 0')};
  position: relative;

  &.error {
    border-color: ${(props) => props.theme.colors.text.error} !important;
  }

  &.full {
    width: 100%;
  }

  &.phone {
    select {
      background-color: ${(props) =>
        props.theme.colors.element.quarternaryLightest};
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
      display: block;
      flex: none;
      padding: 0 0 0 16px !important;
      width: 70px !important;
    }

    input {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }

    label {
      margin-left: 70px !important;
    }
  }

  .icon {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  span {
    color: ${(props) => props.theme.colors.text.error};
    font-size: 12px;
    bottom: -20px;
    left: 24px;
    position: absolute;
  }

  input:placeholder-shown ~ label {
    visibility: hidden;
    z-index: -1;
    transition: 0.2s ease-in-out;
  }

  input:not(:placeholder-shown) ~ label,
  input:focus:not(:placeholder-shown) ~ label {
    color: ${(props) => props.theme.colors.element.secondary};
    font-size: 12px;
    line-height: 16px;
    top: 7px;
    transition: 0.2s ease-in-out;
  }

  &:focus-within {
    border-color: ${(props) => props.theme.colors.element.secondary};
  }

  input:not(:placeholder-shown),
  input:focus:not(:placeholder-shown) {
    padding-top: 16px;
  }

  input {
    background-color: #fff;
    border: 0;
    border-radius: 26px;
    box-sizing: border-box;
    width: 100%;
    display: block;
    height: 42px;
    outline: none;
    padding: 0 24px;
    color: ${(props) => props.theme.colors.text.primaryDark};
    font-family: ${(props) => props.theme.typography.primary};
    font-weight: ${(props) => props.theme.fontWeight.normal};
    font-size: ${(props) => props.theme.fontSize.text.s};
  }

  label {
    border-radius: 50px;
    color: #737373;
    font-family: ${(props) => props.theme.typography.primary};
    font-size: 15px;
    font-style: normal;
    font-weight: normal;
    left: 24px;
    line-height: 20px;
    position: absolute;
    top: 17px;
    transition: 0.3s ease all;
  }
`
