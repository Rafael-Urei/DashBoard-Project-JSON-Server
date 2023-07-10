import { createTheme } from "@mui/material";

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#142052",
      dark: "#0F173B",
      light: "#ffffff",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
    },
    background: {
      paper: "#ffffff",
      default: "#DBDBDB",
    },
  },
});
