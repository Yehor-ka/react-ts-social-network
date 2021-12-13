import { Box, TextField } from '@mui/material';
import React, { useState } from 'react';
import { IPost, TypeSetState } from '../../../types';
import { users } from '../../layout/sidebar/dataUser';

interface IAddPost {
  setPosts: TypeSetState<IPost[]>;
}

export const AddPost = ({ setPosts }: IAddPost) => {
  const [content, setContent] = useState<string>('');

  const handleAddPost = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setPosts((prev) => [
        {
          author: users[0],
          content,
          createdAt: new Date().toLocaleDateString(),
        },
        ...prev,
      ]);
      setContent('');
    }
  };

  return (
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
  );
};
