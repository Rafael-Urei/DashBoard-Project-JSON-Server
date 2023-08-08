import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ReactNode } from "react";
import { useAppDrawerContext } from "../contexts";
import { MenuIcon } from "lucide-react";

interface IBasicLayoutProps {
  children: ReactNode;
  title: string;
  dateSelector: ReactNode;
}

export const BaseLayout = ({
  children,
  title,
  dateSelector,
}: IBasicLayoutProps) => {
  const { toggleDrawer } = useAppDrawerContext();
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Box height="100%" display="flex" flexDirection="column" gap={1}>
        <Box>
          {match && (
            <IconButton onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          )}
        </Box>
        <Box
          display="flex"
          height={theme.spacing(match ? 4 : 8)}
          alignItems="center"
          padding={2}
        >
          <Typography
            variant={!match ? "h2" : "h5"}
            fontWeight={600}
            component="h1"
          >
            {title}
          </Typography>
        </Box>
        {children}
        {dateSelector}
      </Box>
    </>
  );
};
