import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useAppDrawerContext } from "../../shared/contexts";
import { ToggleDrawerComponent } from "../../shared/components/ToggleDrawer/ToggleDrawer";

export default function Home() {
  const theme = useTheme();
  const { isOpen } = useAppDrawerContext();
  const match = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Box>{match && <ToggleDrawerComponent />}</Box>
    </>
  );
}
