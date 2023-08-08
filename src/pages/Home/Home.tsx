import {
  useTheme,
  useMediaQuery,
  Grid,
  Paper,
  Box,
  Typography,
  ButtonBase,
} from "@mui/material";
import { DateSelector } from "../../shared/components";
import { BaseLayout } from "../../shared/layouts";
import { PieChart, Pie, Cell } from "recharts";

export const Home = () => {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));
  const data = [
    { name: "Group A", value: 700 },
    { name: "Group B", value: 200 },
    { name: "Group C", value: 100 },
  ];

  const COLORS = ["#25D997", "#F2C84B", "#D9234E"];

  return (
    <>
      <BaseLayout title="Summary" dateSelector={<DateSelector />}>
        <Box
          component={Paper}
          display="flex"
          flexDirection={!match ? "row" : "column"}
          elevation={0}
          padding={theme.spacing(1)}
        >
          <Box component={Paper} padding={theme.spacing(2)}>
            <Box
              component={Paper}
              height={200}
              width={200}
              display="flex"
              flexDirection="column"
              padding={theme.spacing(2)}
              justifyContent="space-between"
            >
              <Box>
                <Typography component="h2" fontSize={12}>
                  {"Actual Month" + "Sales"}
                </Typography>
              </Box>
              <Box alignSelf="center">
                <Typography
                  component="p"
                  fontSize={32}
                  fontWeight={500}
                  color="#25D997"
                >
                  R$ 45.765,98
                </Typography>
              </Box>
              <Box>
                <Typography component="p" fontSize={12}>
                  Last Month
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box component={Paper} padding={theme.spacing(2)}>
            <Box
              component={Paper}
              height={200}
              width={200}
              display="flex"
              flexDirection="column"
              padding={theme.spacing(2)}
              justifyContent="space-between"
            >
              <Box>
                <Typography component="h2" fontSize={12}>
                  Recollect
                </Typography>
              </Box>
              <Box alignSelf="center">
                <Typography
                  component="p"
                  fontSize={45}
                  fontWeight={500}
                  color="#D9234E"
                >
                  3
                </Typography>
              </Box>
              <Box>
                <Typography component="p" fontSize={12}>
                  Last Month
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </BaseLayout>
    </>
  );
};
