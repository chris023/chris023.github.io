import { createMuiTheme } from '@material-ui/core/'

const Theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: '#252627',
      main: '#181818',
      dark: '#070707',
    },
  },
})

export default Theme
