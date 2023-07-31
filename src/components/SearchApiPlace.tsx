"use client";
import {
  Avatar,
  Box,
  Divider,
  Grid,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { theme } from "../../theme";

const data = [
  {
    id: 1,
    name: "Mikert",
    like: 34,
    comment: "This is a comment",
    description: "A comment",
  },
  {
    id: 2,
    name: "Alden",
    like: 56,
    comment: "This is a comment",
    description: "A comment",
  },
  {
    id: 3,
    name: "Alex",
    like: 450,
    comment: "This is a comment",
    description: "A comment",
  },
  {
    id: 4,
    name: "Tom",
    like: 40,
    comment: "This is a comment",
    description: "A comment",
  },
  {
    id: 5,
    name: "Rachal",
    like: 2,
    comment: "This is a comment",
    description: "A comment",
  },
  {
    id: 6,
    name: "Bob",
    like: 45,
    comment: "This is a comment",
    description: "A comment",
  },
  {
    id: 7,
    name: "Gege",
    like: 10,
    comment: "This is a comment",
    description: "A comment",
  },
];
const SearchApiPlace = () => {
  const [search, setSearch] = useState("");
  return (
    <Box width="100%">
      <TextField
        id="input-with-icon-textfield"
        placeholder="Search..."
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Grid container spacing={4} mt={6}>
        {data?.map((e: any, index: number) => (
          <>
            <Grid item xs={12} key={index}>
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
                  <Stack direction="row" spacing={6}>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Typography fontWeight="600" color="gray">
                      {e.like} People Like
                    </Typography>
                  </Stack>
                </Stack>
              </Paper>
            </Grid>
          </>
        ))}
      </Grid>
    </Box>
  );
};

export default SearchApiPlace;
