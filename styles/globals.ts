import { createGlobalStyle } from 'styled-components'
export const theme = {
    colors: {
      // Colors
      black: '#1C1D21',
      yellow: '#f2b829'
    },
    fonts: {
      // Font family  
      default: 'Fira Code , monospace',  
      firaSans: 'Fira Sans, sans-serif',

      // Font color
      white: '#f5f5f3',
      black:  '#1C1D21'

      // Font size
    },
    max_area: '1200px',
    max_area_1400: '1400px',
    padding_area: '0 15px',
  }

  export const GlobalStyle = createGlobalStyle`
        html,
        body {
            padding: 0;
            margin: 0;
            font-family: ${theme.fonts.default};
            color: white;
            background: white;/* 
            min-width: 1016px; */
        }

        a {
            color: inherit;
            text-decoration: none;
        }

        * {
            box-sizing: border-box;
        }

        @media (prefers-color-scheme: dark) {
            html {
                color-scheme: dark;
            }
            body {
                color: white;
                background: white;
            }
        }
  `

  