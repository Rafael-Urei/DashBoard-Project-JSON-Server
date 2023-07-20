import { Box, IconButton, Paper, Typography, useTheme } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useAppDateContext } from "../../contexts/DateContext";
import dayjs from "dayjs";

export const DateSelector = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const { date, getSelectedDate } = useAppDateContext();
  const theme = useTheme();
  return (
    <>
      <Box
        component={Paper}
        gap={1}
        marginX={1}
        padding={1}
        paddingX={2}
        alignItems="center"
        height={theme.spacing(5)}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box display="flex" alignItems="center" gap={1}>
            <Typography component="h2" sx={{ fontSize: 14 }}>
              Filter by date
            </Typography>
            <IconButton
              sx={{ height: 35, width: 35 }}
              onClick={() => setShowCalendar(!showCalendar)}
            >
              <ChevronDown />
            </IconButton>
          </Box>
          {showCalendar && (
            <DatePicker
              value={date}
              onChange={(newValue) => getSelectedDate(dayjs(newValue))}
            ></DatePicker>
          )}
        </LocalizationProvider>
      </Box>
    </>
  );
};
