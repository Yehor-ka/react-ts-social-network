import { Avatar, Box, ImageList, ImageListItem, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { IPost } from '../../../types';

interface IPosts {
  posts: IPost[];
}

export const Posts = ({ posts }: IPosts) => {
  return (
    <>
      {posts.map((post, index) => (
        <Box
        key={index}
          sx={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: 2,
            margin: "25px 0"
          }}>
          <Link
            key={post.author.id + ' ' + post.createdAt}
            to={`/profile/${post.author.id}`}
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
              <Avatar alt="user" src={post.author.avatar} sx={{ width: 50, height: 50 }} />
            </Box>
            <div>
              <Typography sx={{ fontSize: '14px', color: '#111' }} variant="body1">
                {post.author.name}
              </Typography>
              <Typography sx={{ fontSize: '14px', color: '#111', opacity: '0.6' }} variant="body1">
                {post.createdAt}
              </Typography>
            </div>
          </Link>
          <p>{post.content}</p>
            {post.images?.length && (
              <ImageList variant='masonry' cols={3} gap={8}>
                {post.images.map((image) => (
                  <ImageListItem key={image}>
                    <img
                      src={`${image}?w=164&h=164&fit=crop&auto=format`}
                      alt={image}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            )}
        </Box>
      ))}
    </>
  );
};
