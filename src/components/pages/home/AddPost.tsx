import { Alert, Box, TextField } from '@mui/material';
import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { IPost, TypeSetState } from '../../../types';
import { users } from '../../layout/sidebar/dataUser';
import { useAuth } from '../../providers/useAuth';

interface IAddPost {
}

export const AddPost = ({}: IAddPost) => {
  const [content, setContent] = useState<string>('');
  const { user, db } = useAuth();
  const [error, setError] = useState('');

  const handleAddPost = async (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && user) {
      try {
        const docRef = await addDoc(collection(db, 'posts'), {
          author: user,
          content,
          createdAt: new Date().toLocaleDateString(),
        })
      } catch (e) {
        setError((e as Error).message);
      }
      setContent('');
    }
  };

  return (
    <>
      {error && <Alert severity="error">{error}</Alert>}
      <Box
        sx={{
          border: '1px solid #ccc',
          borderRadius: '10px',
          padding: 2,
        }}>
        <TextField
          variant="outlined"
          label="Расскажи, что у тебя нового"
          sx={{ width: '100%', borderRadius: '25px', border: 'none', backgroundColor: '#f9f9f9' }}
          margin="normal"
          onKeyPress={handleAddPost}
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
      </Box>
    </>
  );
};
