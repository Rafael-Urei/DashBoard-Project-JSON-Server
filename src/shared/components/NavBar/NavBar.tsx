import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import { Props } from "../../types";
import { BarChart, FileSearch, HomeIcon, UserPlus2 } from "lucide-react";

export default function NavBar({ children }: Props) {
  const theme = useTheme();
  return (
    <>
      <Drawer variant="permanent">
        <Box
          width={theme.spacing(38)}
          display="flex"
          flexDirection="column"
          height="100%"
        >
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
          </Box>

          <Divider color="primary.dark" />

          <Box flex={1} bgcolor="primary.dark">
            <List
              component="nav"
              sx={{
                paddingTop: theme.spacing(10),
              }}
            >
              <ListItemButton
                sx={{
                  height: theme.spacing(6),
                }}
              >
                <ListItemIcon>
                  <HomeIcon
                    style={{ color: "25D997", height: "20px", width: "20px" }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Home - Summary"
                  style={{ color: "#fff" }}
                ></ListItemText>
              </ListItemButton>
              <ListItemButton
                sx={{
                  height: theme.spacing(6),
                }}
              >
                <ListItemIcon>
                  <BarChart
                    style={{ color: "25D997", height: "20px", width: "20px" }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Charts"
                  style={{ color: "#fff" }}
                ></ListItemText>
              </ListItemButton>
              <ListItemButton
                sx={{
                  height: theme.spacing(6),
                }}
              >
                <ListItemIcon>
                  <FileSearch
                    style={{ color: "25D997", height: "20px", width: "20px" }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Medical Reports"
                  style={{ color: "#fff" }}
                ></ListItemText>
              </ListItemButton>
              <ListItemButton
                sx={{
                  height: theme.spacing(6),
                }}
              >
                <ListItemIcon>
                  <UserPlus2
                    style={{ color: "25D997", height: "20px", width: "20px" }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Register"
                  style={{ color: "#fff" }}
                ></ListItemText>
              </ListItemButton>
            </List>
          </Box>
          <Divider color="primary.dark" />
          <Box
            sx={{
              height: theme.spacing(4),
              bgcolor: "primary.main",
            }}
          ></Box>
        </Box>
      </Drawer>
      <Box height="100vh" marginLeft={theme.spacing(38)}>
        {children}
      </Box>
    </>
  );
}
