import { Box, IconButton, useTheme } from "@mui/material";
import { Menu, X } from "lucide-react";
import { useAppDrawerContext } from "../../contexts";
import { MenuBook } from "@mui/icons-material";

export const ToggleDrawerComponent = () => {
  const theme = useTheme();
  const { isOpen, toggleDrawer } = useAppDrawerContext();
  return (
    <Box onClick={toggleDrawer} display="flex">
      <IconButton>
        {!isOpen ? (
          <MenuBook sx={{ color: theme.palette.secondary.dark }} />
        ) : null}
      </IconButton>
    </Box>
  );
};
