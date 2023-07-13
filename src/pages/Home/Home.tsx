import { Box, useMediaQuery, useTheme } from "@mui/material";
import { ToggleDrawerComponent } from "../../shared/components/ToggleDrawer/ToggleDrawer";

export default function Home() {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Box>{match && <ToggleDrawerComponent />}</Box>
    </>
  );
}
