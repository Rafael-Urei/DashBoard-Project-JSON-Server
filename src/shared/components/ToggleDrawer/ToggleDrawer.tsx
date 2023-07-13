import { Box, IconButton, useTheme } from "@mui/material";
import { useAppDrawerContext } from "../../contexts";
import MenuIcon from "@mui/icons-material/Menu";

export const ToggleDrawerComponent = () => {
  const theme = useTheme();
  const { isOpen, toggleDrawer } = useAppDrawerContext();
  return (
    <Box onClick={toggleDrawer} display="flex">
      <IconButton>
        {!isOpen ? (
          <MenuIcon sx={{ color: theme.palette.secondary.dark }} />
        ) : null}
      </IconButton>
    </Box>
  );
};
