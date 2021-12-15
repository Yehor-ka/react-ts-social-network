import { Button, Card, Grid } from '@mui/material';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuth } from '../../providers/useAuth';

interface Props {}

export const User = (props: Props) => {
    const {ga, user} = useAuth()
  return (
    <Card
      sx={{
        padding: '10px',
        backgroundColor: '#f6f6f6',
        border: 'none',
        borderRadius: 3,
      }}>
          <Grid>{user?.name}</Grid>
          <Button variant='outlined' onClick={() => signOut(ga)}>Выйти</Button>
      </Card>
  );
};
