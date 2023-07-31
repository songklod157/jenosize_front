import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, Stack } from "@mui/material";
import { theme } from "../../theme";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import RedeemIcon from "@mui/icons-material/Redeem";
import DashboardIcon from "@mui/icons-material/Dashboard";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const data = [
  {
    id: 1,
    title: "Like",
    point: 34,
  },
  {
    id: 2,
    title: "Comments",
    point: 56,
  },
  {
    id: 3,
    title: "Points",
    point: 450,
  },
  {
    id: 4,
    title: "Dashboard",
    point: 40,
  },
];

const DailyList = () => {
  return (
    <Grid container spacing={4}>
      {data?.map((e: any, index: number) => (
        <Grid item md={6} key={index}>
          <Card
            sx={{
              minWidth: 275,
              height: "auto",
              boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
            }}
          >
            <CardContent>
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                {e.title === "Like" ? (
                  <Stack direction="row" alignItems='center'>
                    <ThumbUpIcon color='primary'/>
                    <Button>{e.title}</Button>
                  </Stack>
                ) : e.title === "Comments" ? (
                  <Stack direction="row"  alignItems='center'>
                    <ModeCommentIcon color='primary'/>
                    <Button>{e.title}</Button>
                  </Stack>
                ) : e.title === "Points" ? (
                  <Stack direction="row" alignItems='center'>
                    <RedeemIcon color='primary'/>
                    <Button>{e.title}</Button>
                  </Stack>
                ) : (
                  <Stack direction="row"  alignItems='center'>
                    <DashboardIcon color='primary'/>
                    <Button>{e.title}</Button>
                  </Stack>
                )}
                <Typography sx={{ fontSize: 36 }}>{e.point}</Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color={theme.palette.secondary.contrastText}
                >
                  {e.title}
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DailyList;
