import { Grid } from '@mui/material';
import { margin } from '@mui/system';
import React from 'react';
import { Header } from './header/Header';
import { Sidebar } from './sidebar/Sidebar';

interface Props {
  children: React.ReactChild;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Grid container spacing={2} paddingX={5} marginTop={2}>
        <Grid item md={2}>
          <Sidebar />
        </Grid>
        <Grid item md={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};
