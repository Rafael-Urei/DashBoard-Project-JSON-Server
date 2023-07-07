import { Box, IconButton, useTheme } from "@mui/material";
import { useAppThemeContext } from "../../contexts";
import { Brightness4, Brightness7 } from "@mui/icons-material";

export const ToggleComponent = () => {
  const theme = useTheme();
  const { toggleTheme, themeName } = useAppThemeContext();

  return (
    <>
      <Box
        display="flex"
        alignSelf="center"
        justifyContent="flex-end"
        marginRight={theme.spacing(2)}
      >
        <IconButton onClick={toggleTheme}>
          {themeName === "light" ? (
            <Brightness4 />
          ) : (
            <Brightness7 style={{ color: "#f6f6f6" }} />
          )}
        </IconButton>
      </Box>
    </>
  );
};
