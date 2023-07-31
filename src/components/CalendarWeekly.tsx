import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import isBetweenPlugin from 'dayjs/plugin/isBetween';
import { styled } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import { theme } from '../../theme';

dayjs.extend(isBetweenPlugin);

interface CustomPickerDayProps extends PickersDayProps<Dayjs> {
  dayIsBetween: boolean;
  isFirstDay: boolean;
  isLastDay: boolean;
}

const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) =>
    prop !== 'dayIsBetween' && prop !== 'isFirstDay' && prop !== 'isLastDay',
})<CustomPickerDayProps>(({ theme, dayIsBetween, isFirstDay, isLastDay }) => ({
  ...(dayIsBetween && {
    borderRadius: 0,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.primary.dark,
    },
  }),
  ...(isFirstDay && {
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
  }),
  ...(isLastDay && {
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
  }),
})) as React.ComponentType<CustomPickerDayProps>;

function Day(props: PickersDayProps<Dayjs> & { selectedDay?: Dayjs | null }) {
  const { day, selectedDay, ...other } = props;

  if (selectedDay == null) {
    return <PickersDay day={day} {...other} />;
  }

  const start = selectedDay.startOf('week');
  const end = selectedDay.endOf('week');

  const dayIsBetween = day.isBetween(start, end, null, '[]');
  const isFirstDay = day.isSame(start, 'day');
  const isLastDay = day.isSame(end, 'day');

  return (
    <CustomPickersDay
      {...other}
      day={day}
      sx={dayIsBetween ? { px: 2.5, mx: 0 } : {}}
      dayIsBetween={dayIsBetween}
      isFirstDay={isFirstDay}
      isLastDay={isLastDay}
    />
  );
}

export default function CalendarWeekly() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        value={value}
        onChange={(newValue) => setValue(newValue)}
        slots={{ day: Day }}
        slotProps={{
          day: {
            selectedDay: value,
          } as any,
        }}
        sx={{
            boxShadow:'rgba(149, 157, 165, 0.2) 0px 8px 24px',
            borderRadius:'20px',
            "&.MuiDateCalendar-root": {
                bgcolor:'white',
                "& .Mui-selected, & .Mui-selected:focus, & .Mui-selected:hover": {
                  backgroundColor: theme.palette.primary.main,
                  fontWeight: "bold",
                },
        //         ".MuiDateCalendar-viewTransitionContainer":{
        //             "& > div > div": {
        //                 justifyContent: "space-between !important",
        //                 paddingLeft: 2,
        //                 paddingRight: 2,
        //               },
        //               "& div[role=row]": {
        //                 paddingLeft: 2,
        //                 paddingRight: 2,
        //                 justifyContent: "space-between !important",
    
        //               },
        //         }
           },
       ".MuiPickersDay-root":{
        fontWeight: "600",
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
}