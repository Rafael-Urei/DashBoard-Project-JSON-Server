import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#202124",
      dark: "#303134",
      contrastText: "#ffffff",
    },
    background: {
      paper: "#202124",
      default: "#303134",
    },
  },
});
