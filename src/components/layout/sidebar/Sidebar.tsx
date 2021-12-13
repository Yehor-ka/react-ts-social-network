import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from './Menu';
import { UserItems } from './UserItems';

interface Props {}

export const Sidebar = (props: Props) => {
  return (
    <div>
      <UserItems />
      <Menu />
    </div>
  );
};
