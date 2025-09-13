import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // A professional blue
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#009688', // A modern teal
      contrastText: '#ffffff',
    },
    background: {
      default: '#f5f5f5', // A light grey background
      paper: '#ffffff', // White for paper elements
    },
    text: {
      primary: '#333333', // Dark grey for primary text
      secondary: '#555555', // Lighter grey for secondary text
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Cinzel", serif',
    },
    h2: {
      fontFamily: '"Cinzel", serif',
    },
    h3: {
      fontFamily: '"Cinzel", serif',
    },
    h4: {
      fontFamily: '"Cinzel", serif',
    },
    h5: {
      fontFamily: '"Cinzel", serif',
    },
    h6: {
      fontFamily: '"Cinzel", serif',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiCard: {
        styleOverrides: {
            root: {
                boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
            }
        }
    }
  }
});

export default theme;
