import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { LinkRouteProps, Props } from "../../types";
import { useAppDrawerContext } from "../../contexts";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

const ListWithRoutes = ({ to, label, onClick, icon }: LinkRouteProps) => {
  const navigate = useNavigate();
  const resolvedPath = useResolvedPath(to);
  const match = useMatch({ path: resolvedPath.pathname, end: false });
  const handleNavigate = () => {
    navigate(to);
    onClick?.();
  };
  return (
    <ListItemButton selected={!!match} onClick={handleNavigate}>
      <ListItemIcon>
        <Icon sx={{ color: "#25d997", textAlign: "center", width: "100%" }}>
          {icon}
        </Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

export default function NavBar({ children }: Props) {
  const theme = useTheme();
  const { isOpen, toggleDrawer, drawerOptions } = useAppDrawerContext();
  const match = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Drawer
        open={isOpen}
        variant={match ? "temporary" : "permanent"}
        onClose={toggleDrawer}
      >
        <Box
          width={theme.spacing(38)}
          display="flex"
          flexDirection="column"
          height="100%"
        >
          <Box
            height={theme.spacing(6)}
            display="flex"
            alignItems="center"
            paddingLeft={theme.spacing(2)}
          >
            <Box
              marginRight={theme.spacing(2)}
              display="flex"
              alignItems="center"
              width="100%"
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
                  fontSize: "12px",
                }}
              >
                Tristitia Lab.
              </Typography>
            </Box>
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav">
              {drawerOptions.map((drawerOption) => (
                <ListWithRoutes
                  key={drawerOption.path}
                  label={drawerOption.label}
                  to={drawerOption.path}
                  icon={drawerOption.icon}
                  onClick={match ? toggleDrawer : undefined}
                />
              ))}
            </List>
          </Box>

          <Divider />

          <Box
            sx={{
              height: theme.spacing(6),
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              sx={{
                fontSize: "12px",
              }}
            >
              Created by Urei.
            </Typography>
          </Box>
        </Box>
      </Drawer>
      <Box height="100vh" marginLeft={match ? 0 : theme.spacing(38)}>
        {children}
      </Box>
    </>
  );
}
