'use client'
import { BottomNavigation, BottomNavigationAction, Box, Paper, ThemeProvider } from '@mui/material';
import React, { useState } from 'react'
import { theme } from '../../theme';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import EngineeringIcon from '@mui/icons-material/Engineering';

const Footer = () => {
    const [value, setValue] = useState(0);
  return (
    <Box>
      <ThemeProvider theme={theme}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<EditCalendarIcon />} />
        <BottomNavigationAction label="Favorites" icon={<CheckCircleIcon />} />
        <BottomNavigationAction label="Nearby" icon={<RocketLaunchIcon />} />
        <BottomNavigationAction label="Nearby" icon={<WatchLaterIcon />} />
        <BottomNavigationAction label="Nearby" icon={<EngineeringIcon />} />
      </BottomNavigation>
      </Paper>
      </ThemeProvider>
    </Box>
  )
}

export default Footer