import {
  Avatar,
  Box,
  Divider,
  Fab,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { IMessage } from '../../../types';
import { useAuth } from '../../providers/useAuth';
import { Send as SendIcon } from '@mui/icons-material';

interface Props {}

export const Messages = (props: Props) => {
  const { user, db } = useAuth();
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      const unsub = await onSnapshot(collection(db, 'messages'), (doc) => {
        const arr: IMessage[] = [];
        doc.forEach((d: any) => arr.push(d.data()));
        setMessages(arr)
      });

      return () => {
        unsub();
      };
    };

    fetchPosts();
  }, []);

  const handleAddMessage = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      await addDoc(collection(db, 'messages'), {
        user,
        message,
      });
    } catch (e) {
      setError((e as Error).message);
    }
    setMessage('');
  };

  return (
    <Box
      sx={{
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: 2,
      }}>
      <List sx={{ height: '65vh', overflowY: 'auto' }}>
        {messages &&
          messages.map((msg, i) => (
            <ListItem key={i}>
              <Grid container>
                <Grid display="flex" justifyContent={msg.user?.id === user?.id ?"flex-end" : ''} item xs={12}>
                  <Avatar sx={{ width: '30px', height: '30px' }} src={msg.user?.avatar} />
                </Grid>
                <Grid item xs={12}>
                  <ListItemText
                    sx={
                      msg.user?.id === user?.id ? { textAlign: 'right' } : { textAlign: 'left' }
                    }
                    primary={msg.message}></ListItemText>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText
                    sx={
                        msg.user?.id === user?.id ? { textAlign: 'right' } : { textAlign: 'left' }
                      }
                    secondary={msg.user?.name}></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
          ))}
      </List>
      <Divider />
      <Grid container style={{ padding: '20px' }}>
        <Grid item xs={11}>
          <TextField
            id="outlined-basic-email"
            label="Type Something"
            fullWidth
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
              setMessage(e.target.value)
            }
            value={message}
          />
        </Grid>
        <Grid xs={1} alignItems="right">
          <Fab color="primary" onClick={handleAddMessage}>
            <SendIcon />
          </Fab>
        </Grid>
      </Grid>
    </Box>
  );
};
