"use client";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import React from "react";
import { theme } from "../../theme";

const data = [
  {
    id: 1,
    name: "Mikert",
    like: 34,
    comment:'This is a comment',
    description:'A comment'
  },
  {
    id: 2,
    name: "Alden",
    like: 56,
    comment:'This is a comment',
    description:'A comment'
  },
  {
    id: 3,
    name: "Alex",
    like: 450,
    comment:'This is a comment',
    description:'A comment'
  },
  {
    id: 4,
    name: "Tom",
    like: 40,
    comment:'This is a comment',
    description:'A comment'
  },
  {
    id: 5,
    name: "Rachal",
    like: 2,
    comment:'This is a comment',
    description:'A comment'
  },
  {
    id: 6,
    name: "Bob",
    like: 45,
    comment:'This is a comment',
    description:'A comment'
  },
  {
    id: 7,
    name: "Gege",
    like: 10,
    comment:'This is a comment',
    description:'A comment'
  },
];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.primary,
}));

const WeeklyList = () => {
  return (
    <Grid container spacing={4}>
      {data?.map((e: any, index: number) => (
        <>
          <Grid item xs={1} key={index} mt={3}>
            <Paper
              sx={{
                width: "60px",
                borderRadius: "50px",
                padding: theme.spacing(2),
                textAlign: "center",
                color: "white",
                bgcolor: "black",
              }}
            >
              {index+1}
            </Paper>
          </Grid>
          <Grid item xs={11}>
            <Paper
              sx={{
                borderRadius: "5px",
                padding: theme.spacing(3.5),
                border: "2px solid #E8E8E8",
                boxShadow: "none",
                opacity: 1,
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Stack direction="row" alignItems="center" spacing={3}>
                  <Avatar>H</Avatar>
                  <Stack direction="column">
                    <Typography variant="h6" component="p">
                      {e.name} : {e.comment}
                    </Typography>
                    <Typography component="p">{e.description}</Typography>
                  </Stack>
                </Stack>
                <Stack direction='row' spacing={6}>
                  <Divider orientation="vertical" variant="middle" flexItem />
                  <ThumbUpIcon color="primary"/>
                  <Typography fontWeight='600' color='gray'>{e.like} People Like</Typography>
                </Stack>
              </Stack>
            </Paper>
          </Grid>
        </>
      ))}
    </Grid>
  );
};

export default WeeklyList;
