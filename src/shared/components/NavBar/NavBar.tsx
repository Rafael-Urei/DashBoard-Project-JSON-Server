import { Avatar, Box, Drawer, useTheme } from "@mui/material";
import { Props } from "../../types";

export default function NavBar({ children }: Props) {
  const theme = useTheme();
  return (
    <>
      <Drawer variant="permanent">
        <Box width={theme.spacing(28)} height="100vh">
          <Box
            bgcolor="primary.main"
            height={theme.spacing(5)}
            display="flex"
            alignItems="center"
            paddingLeft={theme.spacing(2)}
          >
            <Box marginRight={theme.spacing(2)}>
              <Avatar
                src="#"
                alt="Profile"
                sx={{ width: theme.spacing(3), height: theme.spacing(3) }}
              ></Avatar>
            </Box>
            <p>Tristitia Lab.</p>
          </Box>
        </Box>
      </Drawer>
      <Box height="100vh" marginLeft={theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
}
