import { Avatar, Box, Card, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { useNavigate } from 'react-router-dom';
import { IUser } from '../../../types';
import { users } from './dataUser';

interface Props {}


export const UserItems = (props: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <Card
        sx={{
          padding: '10px',
          backgroundColor: '#f6f6f6',
        }}>
        {users.map((user) => (
          <Link
            key={user.id}
            to={`/profile/${user.id}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              marginBottom: 12,
            }}>
            <Box
              sx={{
                position: 'relative',
                marginRight: 2,
              }}>
              <Avatar alt="user" src={user.avatar} sx={{ width: 50, height: 50 }} />
              {user.isOnline && (
                <Box
                  sx={{
                    backgroundColor: '#4fb14f',
                    width: 8,
                    height: 8,
                    border: '2px solid #f6f6f6',
                    position: 'absolute',
                    bottom: 0,
                    right: 5,
                    borderRadius: '50%',
                  }}
                />
              )}
            </Box>
            <Typography sx={{ fontSize: '14px', color: '#111' }} variant="body1">
              {user.name}
            </Typography>
          </Link>
        ))}

        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate('/messages')}>
              <ListItemIcon>
                <QuestionAnswerIcon />
              </ListItemIcon>
              <ListItemText primary="Сообщения" />
            </ListItemButton>
          </ListItem>
        </List>
      </Card>
    </>
  );
};
