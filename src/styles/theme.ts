import { DefaultTheme } from 'styled-components'

type Brand = Record<'primary', string>

type Element = Record<
  | 'primary'
  | 'secondaryDark'
  | 'secondary'
  | 'secondaryLight'
  | 'secondaryLightest'
  | 'tertiary'
  | 'tertiaryLight'
  | 'tertiaryLightest'
  | 'quarternaryLightest'
  | 'inactive'
  | 'error'
  | 'success'
  | 'lightground',
  string
>

type Text = Record<
  | 'primaryDarkest'
  | 'primaryDark'
  | 'primary'
  | 'primaryLight'
  | 'secondary'
  | 'success'
  | 'error'
  | 'white',
  string
>

type FontSizes = Record<'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl', string>

type FontWeights = Record<'normal' | 'semiBold' | 'bold', string>

type LineHeights = Record<
  | 'xxxxl'
  | 'xxxl'
  | 'xxl'
  | 'xl'
  | 'l'
  | 'xs'
  | 'l'
  | 'm'
  | 's'
  | 'xxs'
  | 'xxs',
  string
>

type Color = Record<
  'gradientPrimary' | 'gradientSecondary' | 'gradientTertiary',
  string | any
>

type Typography = Record<'primary' | 'secondary', string>

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Color & {
      brand: Brand
      element: Element
      text: Text
    }
    typography: Typography
    fontSize: {
      text: FontSizes
      heading: FontSizes
    }
    fontWeight: FontWeights
    lineHeight: LineHeights
  }
}

const theme: DefaultTheme = {
  colors: {
    brand: {
      primary: 'var(--f-color-brand--primary)'
    },
    element: {
      primary: 'var(--f-color-element--primary)',
      secondaryDark: 'var(--f-color-element--secondary-dark)',
      secondary: 'var(--f-color-element--secondary)',
      secondaryLight: 'var(--f-color-element--secondary-light)',
      secondaryLightest: 'var(--f-color-element--secondary-lightest)',
      tertiary: 'var(--f-color-element--tertiary)',
      tertiaryLight: 'var(--f-color-element--tertiary-light)',
      tertiaryLightest: 'var(--f-color-element--tertiary-lightest)',
      quarternaryLightest: 'var(--f-color-element--quarternary-lightest)',
      inactive: 'var(--f-color-element--inactive)',
      error: 'var(--f-color-element--error)',
      success: 'var(--f-color-element--success)',
      lightground: 'var(--f-color-element--lightground)'
    },
    text: {
      primaryDarkest: 'var(--f-color-text--primary-darkest)',
      primaryDark: 'var(--f-color-text--primary-dark)',
      primary: 'var(--f-color-text--primary)',
      primaryLight: 'var(--f-color-text--primary-light)',
      secondary: 'var(--f-color-text--secondary)',
      success: 'var(--f-color-text--success)',
      error: 'var(--f-color-text--error)',
      white: 'var(--f-color-text--white)'
    },
    gradientPrimary: 'linear-gradient(#f85871, #fa8989)',
    gradientSecondary: 'linear-gradient(#70d9e9, #00c6e3)',
    gradientTertiary: 'linear-gradient(#ffbe60, #ff8d24)'
  },
  typography: {
    primary: 'var(--f-typography--primary)',
    secondary: 'var(--f-typography--secondary)'
  },
  fontSize: {
    text: {
      xxs: 'var(--f-fontSize--xxs)',
      xs: 'var(--f-fontSize--xs)',
      s: 'var(--f-fontSize--s)',
      m: 'var(--f-fontSize--m)',
      l: 'var(--f-fontSize--l)',
      xl: 'var(--f-fontSize--xl)',
      xxl: 'var(--f-fontSize--xxl)'
    },
    heading: {
      xxs: 'var(--f-fontSize-heading--xxs)',
      xs: 'var(--f-fontSize-heading--xs)',
      s: 'var(--f-fontSize-heading--s)',
      m: 'var(--f-fontSize-heading--m)',
      l: 'var(--f-fontSize-heading--l)',
      xl: 'var(--f-fontSize-heading--xl)',
      xxl: 'var(--f-fontSize-heading--xxl)'
    }
  },
  fontWeight: {
    normal: 'var(--f-fontWeight--normal)',
    semiBold: 'var(--f-fontWeight--semiBold)',
    bold: 'var(--f-fontWeight--bold)'
  },
  lineHeight: {
    xxxxl: 'var(--f-lineHeight--xxxxl)',
    xxxl: 'var(--f-lineHeight--xxxl)',
    xxl: 'var(--f-lineHeight--xxl)',
    xl: 'var(--f-lineHeight--xl)',
    l: 'var(--f-lineHeight--l)',
    xs: 'var(--f-lineHeight--xs)',
    m: 'var(--f-lineHeight--m)',
    s: 'var(--f-lineHeight--s)',
    xxs: 'var(--f-lineHeight--xxs)'
  }
}

export default theme
