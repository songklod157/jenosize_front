'use client'
import Image from 'next/image'
import styles from './page.module.css'
import HomePage from '@/components/HomePage'
import { ThemeProvider, styled } from '@mui/material';
import { theme } from '../../theme';
import LineChart from '@/components/LineChart';

export const OverFlowContainer = styled("div")`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
`;
export const HomePageContainer = styled("div")`
  display: flex;
  flex-direction: column;
`;
export const LayoutContainer = styled("div")`
  display: flex;
  flex-direction: row;
  background: #ffffff;
  min-height: 100vh;
`;
export const ContentContainer = styled("div")`
  display: flex;
  width: 100%;
  flex-direction: column;
  background: #f7f7fa;
  overflow: auto;
`;

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
    <OverFlowContainer>
     <HomePageContainer>
     <LayoutContainer>
     <ContentContainer>
      <HomePage/>
      </ContentContainer>
      </LayoutContainer>
      </HomePageContainer>
      </OverFlowContainer>
      </ThemeProvider>
  )
}
