import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
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
      default: "#262626",
      paper: "#434343",
    },
  },
  typography: {
    allVariants: {
      color: "#f3f3f3",
    },
  },
});
