import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#2b43c9",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#c9b12b",
      dark: "#ba000d",
      contrastText: "#000",
    },
    background: {
      default: "#0d0d0d",
      paper: "#3c3c3c",
    },
  },
});
