"use client";
import { theme } from "../../theme";
import { Button, styled } from "@mui/material";
export const BtnCate = styled(Button)(() => ({
  color: theme.palette.primary.main,
  width: "200px",
  height: "50px",
  boxShadow: "none",
  textTransform: "none",
  fontSize: "15px",
  padding: "6px 12px",
  border: "2px solid",
  lineHeight: 1.5,
  backgroundColor: "transparent",
  borderRadius: "29px",
  borderColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
    boxShadow: "none",
  },
  ":active": {
    backgroundColor: theme.palette.primary.dark,
  },
  "&:focus": {
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
}));
