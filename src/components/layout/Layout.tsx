import { Grid } from '@mui/material';
import { margin } from '@mui/system';
import React from 'react';
import { useAuth } from '../providers/useAuth';
import { Header } from './header/Header';
import { Sidebar } from './sidebar/Sidebar';

interface Props {
  children: React.ReactChild;
}

export const Layout = ({ children }: Props) => {
  const { user } = useAuth();
  return (
    <>
      <Header />
      <Grid container spacing={2} paddingX={5} marginTop={2}>
        {user && (
          <Grid item md={2}>
            <Sidebar />
          </Grid>
        )}
        <Grid item md={user ? 9 : 12}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};
