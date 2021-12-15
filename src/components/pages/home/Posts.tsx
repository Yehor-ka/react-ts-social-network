import { UnsubscribeTwoTone } from '@mui/icons-material';
import { Avatar, Box, ImageList, ImageListItem, Typography } from '@mui/material';
import { collection, doc, onSnapshot, QuerySnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IPost } from '../../../types';
import { useAuth } from '../../providers/useAuth';

interface IPosts {
}

export const Posts = ({}: IPosts) => {
  const [error, setError] = useState('');
  const [posts, setPosts] = useState<IPost[]>([
    {
        author: {
            id: "9363",
            avatar: "https://i.natgeofe.com/n/1147543c-d041-400a-b2bb-22aa407c45fa/1347.jpg?w=636&h=477",
            name: "National Geograpgic"
        },
        createdAt: '05.12.2021',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, neque.',
        images: [ "https://blog.depositphotos.com/wp-content/uploads/2017/11/week-1-national-geographic-nature-photographer-of-the-year-2017-4.jpg", "https://d.newsweek.com/en/full/1403370/sea-turtle-stock-getty.jpg", "https://i.natgeofe.com/n/5d292cbb-5e53-4523-8d28-2a92ac8121f2/POD-22-06-2021_NationalGeographic_521543.jpg?w=636&h=426", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmRI2tcGQxICwFjK1yRp2gq8uLL28Thsqf1QpOByOeh8eu0v53lZGU98CJcBPs09sLf5w&usqp=CAU"]
    }
])
  const { db } = useAuth();

  useEffect(() => {
    const fetchPosts = async () => {
        const unsub = await onSnapshot(collection(db, 'posts'), doc => {
          const arr: IPost[] = []
          doc.forEach((d: any) => arr.unshift(d.data()))
          setPosts(arr)
        })

        return () => {
          unsub()
        }
    };

    fetchPosts();
  }, []);
  return (
    <>
      {posts.map((post, index) => (
        <Box
          key={index}
          sx={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: 2,
            margin: '25px 0',
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
            <ImageList variant="masonry" cols={3} gap={8}>
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
