import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Props } from "../../types";
import { BarChart, FileSearch, HomeIcon, UserPlus2 } from "lucide-react";
import { useState } from "react";
import { useAppDrawerContext } from "../../contexts";

export default function NavBar({ children }: Props) {
  const theme = useTheme();
  const { isOpen, toggleDrawer } = useAppDrawerContext();
  const match = useMediaQuery(theme.breakpoints.down("sm"));
  const [alignment, setAlignment] = useState("home");
  const handleChange = (
    e: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };
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
                  color: theme.palette.primary.contrastText,
                  fontSize: "12px",
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
              <ToggleButtonGroup
                orientation="vertical"
                color="secondary"
                value={alignment}
                exclusive
                onChange={handleChange}
                sx={{ width: "100%" }}
                aria-label="Platform"
              >
                <ToggleButton
                  value="home"
                  sx={{
                    fontSize: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    paddingLeft: theme.spacing(8),
                    gap: theme.spacing(2),
                    color: "#B6C3EE",
                  }}
                >
                  <HomeIcon color="#25d997"></HomeIcon>
                  Home - Summary
                </ToggleButton>
                <ToggleButton
                  value="chart"
                  sx={{
                    fontSize: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    paddingLeft: theme.spacing(8),
                    gap: theme.spacing(2),
                    color: "#B6C3EE",
                  }}
                >
                  <BarChart color="#25d997"></BarChart>
                  Charts
                </ToggleButton>
                <ToggleButton
                  value="mreport"
                  sx={{
                    fontSize: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    paddingLeft: theme.spacing(8),
                    gap: theme.spacing(2),
                    color: "#B6C3EE",
                  }}
                >
                  <FileSearch color="#25d997"></FileSearch>
                  Medical Report
                </ToggleButton>
                <ToggleButton
                  value="register"
                  sx={{
                    fontSize: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    paddingLeft: theme.spacing(8),
                    gap: theme.spacing(2),
                    color: "#B6C3EE",
                  }}
                >
                  <UserPlus2 color="#25d997"></UserPlus2>
                  Register
                </ToggleButton>
              </ToggleButtonGroup>
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
