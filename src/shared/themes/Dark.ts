import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#303134",
      dark: "#202124",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
    },
    background: {
      paper: "#303134",
      default: "#121314",
    },
  },
});
