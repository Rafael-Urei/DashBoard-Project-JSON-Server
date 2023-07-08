import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
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
            height={theme.spacing(6)}
            display="flex"
            alignItems="center"
            paddingLeft={theme.spacing(2)}
          >
            <Box
              marginRight={theme.spacing(2)}
              display="flex"
              alignItems="center"
            >
              <Avatar
                src="#"
                alt="Tristitia-Profile"
                sx={{
                  width: theme.spacing(4),
                  height: theme.spacing(4),
                  marginLeft: theme.spacing(2),
                }}
              ></Avatar>
              <Typography
                sx={{
                  marginLeft: theme.spacing(2),
                  color: theme.palette.primary.contrastText,
                }}
              >
                Tristitia Lab.
              </Typography>
            </Box>
          </Box>

          <Divider color={theme.palette.primary.main} />

          <Box flex={1} bgcolor={theme.palette.primary.dark}>
            <List
              component="nav"
              sx={{
                paddingTop: theme.spacing(10),
              }}
            >
              <ListItemButton
                sx={{
                  height: theme.spacing(6),
                  paddingLeft: theme.spacing(4),
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
                  paddingLeft: theme.spacing(4),
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
                  paddingLeft: theme.spacing(4),
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
                  paddingLeft: theme.spacing(4),
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
          <Divider color={theme.palette.primary.main} />
          <Box
            sx={{
              height: theme.spacing(6),
              bgcolor: theme.palette.primary.main,
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              sx={{
                color: theme.palette.primary.contrastText,
              }}
            >
              Created by Urei.
            </Typography>
          </Box>
        </Box>
      </Drawer>
      <Box height="100vh" marginLeft={theme.spacing(38)}>
        {children}
      </Box>
    </>
  );
}
