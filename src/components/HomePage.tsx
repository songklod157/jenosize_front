"use client";
import {
  Box,
  Divider,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { theme } from "../../theme";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AlignVerticalBottomIcon from "@mui/icons-material/AlignVerticalBottom";
import CalendarDaily from "./CalendarDaily";
import CalendarWeekly from "./CalendarWeekly";
import CalendarMonthly from "./CalendarMonthly";
import LineChart from "./LineChart";
import { BtnCate } from "./BtnCustom";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import RedeemIcon from "@mui/icons-material/Redeem";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DailyList from "./DailyList";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import WeeklyList from "./WeeklyList";
import SearchApiPlace from "./SearchApiPlace";

export const ContentContainer = styled("div")`
  justify-content: center;
`;
export const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  padding-left: 5%;
  padding-right: 5%;
`;
interface StyledTabProps {
  label: string;
}
interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function HeadTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function DisplayTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
const headTabProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};
const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};
const tabDisplayProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};
const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    width: "100%",
  },
});
const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(() => ({
  textTransform: "none",
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.pxToRem(15),
  marginRight: theme.spacing(1),
  color: "#A9A9A9",
  "&.Mui-selected": {
    color: theme.palette.primary.main,
  },
  "&.Mui-focusVisible": {
    backgroundColor: "rgba(100, 95, 228, 0.32)",
  },
}));
const StyledTabsSec = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: "auto",
    width: "100%",
    backgroundColor: theme.palette.primary.main,
  },
});
const StyledTabSec = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(() => ({
  textTransform: "none",
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.pxToRem(15),
  marginRight: theme.spacing(1),
  color: "#A9A9A9",
  "&.Mui-selected": {
    color: theme.palette.primary.main,
  },
  "&.Mui-focusVisible": {
    backgroundColor: "rgba(100, 95, 228, 0.32)",
  },
}));
const state = {
  series: [
    {
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Product Trends by Month",
      align: "left",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
  },
};
const HomePage = () => {
  const [value1, setValue1] = React.useState(2);
  const [value2, setValue2] = React.useState(0);
  const [value3, setValue3] = React.useState(0);

  const handleChangeV1 = (event: React.SyntheticEvent, newValue: number) => {
    setValue1(newValue);
  };
  const handleChangeV2 = (event: React.SyntheticEvent, newValue: number) => {
    setValue2(newValue);
  };
  const handleChangeV3 = (event: React.SyntheticEvent, newValue: number) => {
    setValue3(newValue);
  };
  return (
    <ContentContainer>
      <Wrapper>
        <StyledTabs
          variant="fullWidth"
          value={value1}
          onChange={handleChangeV1}
          aria-label="disabled tabs example"
        >
          <StyledTab label="Workflows" {...headTabProps(0)} />
          <Divider orientation="vertical" variant="middle" flexItem />
          <StyledTab label="Datasets" {...headTabProps(2)} />
        </StyledTabs>
        <Divider />
        <HeadTabPanel index={0} value={value1}>
        <SearchApiPlace/>
        </HeadTabPanel>
        <HeadTabPanel index={2} value={value1}>
          <Stack direction="row" justifyContent="space-between">
            <StyledTabsSec
              value={value2}
              onChange={handleChangeV2}
              aria-label="icon tabs example"
            >
              <StyledTabSec label="Daily" {...a11yProps(0)} />
              <StyledTabSec label="Weekly" {...a11yProps(1)} />
              <StyledTabSec label="Monthly" {...a11yProps(2)} />
            </StyledTabsSec>
            <Tabs
              value={value3}
              onChange={handleChangeV3}
              aria-label="icon tabs example"
            >
              <Tab
                icon={<AlignVerticalBottomIcon />}
                aria-label="alignverticale"
                {...tabDisplayProps(0)}
              />
              <Tab
                icon={<FormatListBulletedIcon />}
                aria-label="bulleted"
                {...tabDisplayProps(1)}
              />
            </Tabs>
          </Stack>
          <CustomTabPanel value={value2} index={0}>
            <Box width="100%">
              <CalendarDaily />
            </Box>
            <Stack direction="row" mt={3} spacing={3} alignItems='center'>
              <Typography variant="h5" component="h2">
                22 July 2023
              </Typography>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <SaveAltIcon />
              </IconButton>
            </Stack>
            <DisplayTabPanel index={0} value={value3}>
              <DailyList />
            </DisplayTabPanel>
            <DisplayTabPanel index={1} value={value3}>
              <Typography variant="h5" component="h2">
                No data...
              </Typography>
            </DisplayTabPanel>
          </CustomTabPanel>
          <CustomTabPanel value={value2} index={1}>
            <Box width="100%">
              <CalendarWeekly />
            </Box>
            <Stack direction="row">
              <Typography variant="h5" component="h2">
                27 July 2023
                <SaveAltIcon />
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between" mt={2}>
              <BtnCate variant="outlined">
                <ThumbUpIcon /> &nbsp;&nbsp;Like
              </BtnCate>
              <BtnCate variant="outlined">
                <ModeCommentIcon /> &nbsp;&nbsp;Comment
              </BtnCate>
              <BtnCate variant="outlined">
                <RedeemIcon /> &nbsp;&nbsp;Point
              </BtnCate>
              <BtnCate variant="outlined">
                <DashboardIcon /> &nbsp;&nbsp;Dashboard
              </BtnCate>
            </Stack>
            <DisplayTabPanel index={0} value={value3}>
            <Stack direction="row" mt={2} justifyContent="center">
              <Box width="600px">
                <LineChart />
              </Box>
            </Stack>
            </DisplayTabPanel>
            <DisplayTabPanel index={1} value={value3}>
            <WeeklyList />
            </DisplayTabPanel>
          </CustomTabPanel>
          <CustomTabPanel value={value2} index={2}>
            <Box width="100%">
              <CalendarMonthly />
            </Box>
          </CustomTabPanel>
        </HeadTabPanel>
      </Wrapper>
    </ContentContainer>
  );
};

export default HomePage;
