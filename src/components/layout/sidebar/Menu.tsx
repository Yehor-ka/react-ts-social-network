import { Card } from '@mui/material';
import React from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { menu } from './dataMenu';

interface Props {}

export const Menu = (props: Props) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        padding: '10px',
        backgroundColor: '#f6f6f6',
        marginTop: 5,
        marginBottom: 10
      }}>
      <List>
        {menu.map((menuItem) => (
          <ListItem key={menuItem.link} disablePadding>
            <ListItemButton onClick={() => navigate(menuItem.link)}>
              <ListItemIcon>
                <menuItem.icon />
              </ListItemIcon>
              <ListItemText primary={menuItem.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};
