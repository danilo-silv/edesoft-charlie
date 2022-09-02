/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      brand: {
        hover: 'var(--f-color-hover-brand-element)',
        DEFAULT: 'var(--f-color-brand--primary)'
      },
      secondary: {
        DEFAULT: 'var(--f-color-element--secondary)',
        dark: 'var(--f-color-element--secondary-dark)',
        light: 'var(--f-color-element--secondary-light)',
        lightest: 'var(--f-color-element--secondary-lightest)'
      },
      white: '#fff'
    },
    textColor: {
      white: 'var(--f-color-text--white)',
      brand: 'var(--f-color-brand--primary)',
      primary: {
        darkest: 'var(--f-color-text--primary-darkest)',
        dark: 'var(--f-color-text--primary-dark)',
        DEFAULT: 'var(--f-color-text--primary)',
        light: 'var(--f-color-text--primary-light)'
      },
      secondary: {
        dark: 'var(--f-color-element--secondary-dark)',
        DEFAULT: 'var(--f-color-text--secondary)'
      },
      success: {
        DEFAULT: 'var(--f-color-text--success)'
      },
      error: {
        DEFAULT: 'var(--f-color-text--error)'
      }
    },
    extend: {},
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1280px'
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: ['var(--f-typography--primary)', 'sans-serif'],
      serif: ['var(--f-typography--secondary)', 'serif'],
    },
    fontSize: {
      xs: 'var(--f-fontSize--xs)',
      sm: 'var(--f-fontSize--sm)',
      base: 'var(--f-fontSize--base)',
      lg: 'var(--f-fontSize--lg)',
      xl: 'var(--f-fontSize--xl)',
      '2xl': 'var(--f-fontSize--2xl)',
      '3xl': 'var(--f-fontSize--3xl)',
      '4xl': 'var(--f-fontSize--4xl)',
      '5xl': 'var(--f-fontSize--5xl)',
      '6xl': 'var(--f-fontSize--6xl)',
    },
    fontWeight: {
      regular: 'var(--f-fontWeight--normal)',
      semibold: 'var(--f-fontWeight--semiBold)',
      bold: 'var(--f-fontWeight--bold)'
    },
    lineHeight: {
      tight: 'var(--f-lineHeight--tight)',
      snug: 'var(--f-lineHeight--snug)',
      normal: 'var(--f-lineHeight--normal)',
      relaxed: 'var(--f-lineHeight--relaxed)',
      loose: 'var(--f-lineHeight--loose)',
      '3': 'var(--f-lineHeight--3)',
      '4': 'var(--f-lineHeight--4)',
      '5': 'var(--f-lineHeight--5)',
      '6': 'var(--f-lineHeight--6)',
      '7': 'var(--f-lineHeight--7)',
      '8': 'var(--f-lineHeight--8)',
      '9': 'var(--f-lineHeight--9)',
      '10': 'var(--f-lineHeight--10)',
    }
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
      pointerEvents: ['disabled']
    }
  },
  plugins: [],
}
