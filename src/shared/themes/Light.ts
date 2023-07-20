import { colors, createTheme } from "@mui/material";

export const mainTheme = createTheme({
  palette: {
    mode: "light",
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
      default: "#f5f5f5",
      paper: "#fafafa",
    },
  },
  typography: {
    allVariants: {
      color: "#0C1B3D",
    },
  },
});
