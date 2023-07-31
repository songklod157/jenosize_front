import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { MobileDatePicker } from "@mui/x-date-pickers";
import { Box, Stack } from "@mui/material";
import { theme } from "../../theme";

const CalendarDaily = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        sx={{
            boxShadow:'rgba(149, 157, 165, 0.2) 0px 8px 24px',
            borderRadius:'20px',
          "&.MuiDateCalendar-root": {
            width: '100%',
            bgcolor:'white',
            "& .Mui-selected, & .Mui-selected:focus, & .Mui-selected:hover": {
              backgroundColor: theme.palette.primary.main,
              fontWeight: "bold",
            },
            ".MuiDateCalendar-viewTransitionContainer":{
                "& > div > div": {
                    justifyContent: "space-between !important",
                    paddingLeft: 2,
                    paddingRight: 2,
                  },
                  "& div[role=row]": {
                    paddingLeft: 2,
                    paddingRight: 2,
                    justifyContent: "space-between !important",

                  },
            }
       },
       ".MuiPickersDay-root":{
        fontWeight: "600",
        bgcolor: '#F9F9F9',
        fontSize: "14px",
       },
       ".MuiDayCalendar-weekDayLabel":{
        fontWeight: "600",
        fontSize: "14px",
        color: theme.palette.primary.light
       }
        }}
      />
    </LocalizationProvider>
  );
};

export default CalendarDaily;
