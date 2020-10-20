/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    darkSelector: '.dark-mode',
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960x',
      xl: '1280px',
      xxlmin: '1351px',
      xxlmax: { max: '1350px' }
    },
    fontFamily: {
      spectral: ['Spectral', 'serif'],
      crimsonpro: ['Crimson Pro', 'serif'],
      corgar: ['Cormorant Garamond', 'serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      body: ['Cormorant Garamond', 'serif']
    },
    borderWidth: {
      default: '1px',
      0: '0',
      2: '2px',
      4: '4px'
    },
    minHeight: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%'
    },
    extend: {
      colors: {
        darkbg: '#0B191E',
        darktitle: '#DFE0E2',
        darkheading: '#23B5D3',
        darkcontent: '#DFE0E2',
        darkhighlight: '#DFE0E2'
      },
      spacing: {
        96: '24rem',
        128: '32rem'
      },
      height: {
        84: '22rem'
      },
      width: {
        '3/2': '150%',
        '4/2': '200%',
        '1/2-screen': '50vw'
      },
      margin: {
        '-fullh': '-100vh'
      }
    },
    inset: {
      0: 0,
      16: '16px',
      32: '32px',
      64: '64px',
      '2rem': '2rem',
      '3rem': '3rem'
    }
  },
  variants: {
    backgroundColor: [
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
      'hover',
      'responsive'
    ],
    borderColor: [
      'dark',
      'dark-focus',
      'dark-focus-within',
      'hover',
      'responsive'
    ],
    textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive']
  },
  plugins: [require('tailwindcss-dark-mode')()]
}
