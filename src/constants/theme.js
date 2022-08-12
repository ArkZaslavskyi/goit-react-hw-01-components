export const theme = Object.freeze({
  colors: {

    white: '#ffffff',
    black: '#010101',
    
    bgLightGray: '#fafafa',
    bgMediumGray: '#eeeeee',
    background: '#ffffff',

    textBlack: '#2a2a2a',
    textGray: '#9a9a9a',

    friendList: {
      green: 'green',
      red: 'red',
    },

    transactionTable: {
      bgHead: '#00ccdd',
      cellBorderColor: '#cecece',
    },
  },

  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  
  fonts: {
    body: "'Roboto' -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'",
  },

  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '32px',
    xl: '64px',
  },

  fontWeights: {
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },

  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },

  borders: {
    none: 'none',
    normal: '1px solid',
  },

  shadows: {
    normal: '1px 1px 2px 2px #cecece',
  },

  radii: {
    none: '0',
    normal: '4px',
    round: '50%',
  },
});
