import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { green, blue} from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
      light: blue[200]
    },
    secondary: {
      main: green[500],
    }
  },
});

export const Wrapper = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
