import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ReactNode } from "react";
import { useAppDrawerContext } from "../../shared/contexts";
import { MenuIcon } from "lucide-react";

interface IBasicLayoutProps {
  children: ReactNode;
  titulo: string;
}

export const BaseLayout = ({ children, titulo }: IBasicLayoutProps) => {
  const { toggleDrawer } = useAppDrawerContext();
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Box height="100%" display="flex" flexDirection="column" gap={1}>
        <Box>
          {match && (
            <IconButton>
              <MenuIcon onClick={toggleDrawer} />
            </IconButton>
          )}
        </Box>
        <Box
          display="flex"
          height={theme.spacing(match ? 4 : 8)}
          alignItems="center"
          padding={2}
        >
          <Typography variant={!match ? "h2" : "h5"} component="h1">
            {titulo}
          </Typography>
        </Box>
        <Box>{children}</Box>
      </Box>
    </>
  );
};
