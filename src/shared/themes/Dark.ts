import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    primary: {
      light: "#c5cbf4",
      main: "#2351d9",
      dark: "#001ea4",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ddd332",
      main: "#d9ab23",
      dark: "#d06f05",
      contrastText: "#000",
    },
    background: {
      default: "#434343",
      paper: "#262626",
    },
  },
});
