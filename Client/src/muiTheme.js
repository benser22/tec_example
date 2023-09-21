// muiTheme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff5722', 
    },
    secondary: {
      main: '#2979ff', 
    },
  },
  typography: {
    fontFamily: 'Comic Sans MS, Comic Sans, cursive', // Cambia la tipografía a Comic Sans
  },
});

export default theme;
