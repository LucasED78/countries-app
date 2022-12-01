export const theme = {
  colors: {
    dark: {
      background: '#202c37',
      element: '#2b3945',
      text: '#ffffff'
    },
    light: {
      background: '#fafafa',
      element: '#ffffff',
      text: '#111517',
      input: '#858585'
    },
  },
  boxShadow: {
    dark: '0px 0px 6px 0px #000000',
    light: '0px 0px 6px 0px #e0e0e0',
  },
  fontSize: {
    XL: '32px',
    LG: '22px',
    MD: '18px',
    SM: '16px',
    XS: '14px',
  }
}

export type Theme = typeof theme