"use client";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  ThemeProvider,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import TuneIcon from "@mui/icons-material/Tune";
import { theme } from "../../theme";

export const NavContainer = styled(Stack)(() => ({
  display: "flex",
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <NavContainer>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <HomeIcon />
              </IconButton>

              <Typography variant="h6" component="div" fontWeight="bold">
                Jenosize
              </Typography>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <TuneIcon />
              </IconButton>
            </NavContainer>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
};

export default Navbar;
