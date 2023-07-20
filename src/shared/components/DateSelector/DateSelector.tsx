import { Box, IconButton, Paper, Typography, useTheme } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";
import { useAppDateContext } from "../../contexts/DateContext";
import { Dayjs } from "dayjs";

export const DateSelector = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const { date, setDate } = useAppDateContext();
  const theme = useTheme();

  const handleChangeDate = (value: Dayjs | null) => {
    setDate(value);
    console.log(date?.toDate());
  };

  return (
    <>
      <Box
        component={Paper}
        gap={1}
        marginX={1}
        padding={1}
        paddingX={2}
        alignItems="center"
        height={theme.spacing(7)}
        elevation={0}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box display="flex" alignItems="center" gap={1} height="100%">
            <Typography component="h2" fontSize={16} fontWeight={400}>
              View another month
            </Typography>
            <IconButton
              sx={{ height: 35, width: 35 }}
              onClick={() => setShowCalendar(!showCalendar)}
            >
              {!showCalendar ? (
                <ChevronRight color="#0C1B3D" />
              ) : (
                <ChevronLeft color="#0C1B3D" />
              )}
            </IconButton>
            {showCalendar && (
              <DatePicker
                format="LL"
                value={date}
                onChange={(newValue) => handleChangeDate(newValue)}
              ></DatePicker>
            )}
          </Box>
        </LocalizationProvider>
      </Box>
    </>
  );
};
