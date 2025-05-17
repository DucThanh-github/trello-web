// import { teal, deepOrange, cyan, orange } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight: '58px',
    appBoardBarHeight: '60px'
  },
  // colorSchemes: {
  //   light: {
  //     palette: {
  //       primary: teal,
  //       secondary: deepOrange
  //     }
  //   },
  //   dark: {
  //     palette: {
  //       primary: cyan,
  //       secondary: orange
  //     }
  //   }
  // },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '10px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            background: '#dfe6e9',
            borderRadius: '4px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            background: 'white'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          // color: theme.palette.primary.main,
          fontSize: '0.875rem',
          // '.MuiOutlinedInput-notchedOutline': {
          //   borderColor: 'white'
          // },
          // '&:hover .MuiOutlinedInput-notchedOutline': {
          //   borderColor: theme.palette.primary.light
          // },
          '& fieldset': {
            borderWidth: '1px !important'
          },
          '&:hover fieldset': {
            borderWidth: '2px !important'
          }
        })
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem'
        })
      }
    }
  }
})

export default theme
