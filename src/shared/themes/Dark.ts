import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#303134",
      dark: "#202124",
      contrastText: "#ffffff",
    },
    background: {
      paper: "#202124",
      default: "#303134",
    },
  },
});
