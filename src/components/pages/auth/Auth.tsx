import { Preview } from '@mui/icons-material';
import { Alert, Button, ButtonGroup, TextField } from '@mui/material';
import React, { ChangeEventHandler, SyntheticEvent, useEffect, useState } from 'react';
import { IUserData } from './types';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { lightGreen } from '@mui/material/colors';
import { useAuth } from '../../providers/useAuth';
import { useNavigate } from 'react-router-dom';

interface Props {}

export const Auth = (props: Props) => {
  const [userData, setUserData] = useState<IUserData>({
    email: '',
    password: '',
    name: ''
  } as IUserData);
  const [isRegForm, setIsRegForm] = useState(false);
  const [error, setError] = useState('');
  const {ga, user} = useAuth()

  const navigator = useNavigate()

  const handleLogin = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isRegForm) {
      try {
        const res = await createUserWithEmailAndPassword(ga, userData.email, userData.password);
        await updateProfile(res.user, {
          displayName: userData.name
        })
        setError('');
      } catch (e) {
        setError((e as Error).message);
      }
    } else {
      try {
        await signInWithEmailAndPassword(ga, userData.email, userData.password);
        setError('');
      } catch (e) {
        setError((e as Error).message);
      }
    }
    setUserData({
      email: '',
      password: '',
      name: ''
    });
    console.log(userData.email, userData.password);
  };

  const addUserData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if(!user) navigator('/')
  }, [user]) 

  return (
    <>
    {error && <Alert severity='error'>{error}</Alert>}
      <form onSubmit={handleLogin}>
      <TextField
          type="name"
          name="name"
          label="Name"
          variant="outlined"
          value={userData.name}
          onChange={addUserData}
          sx={{ display: 'block', marginBottom: '10px' }}
        />
        <TextField
          type="email"
          name="email"
          label="Email"
          variant="outlined"
          value={userData.email}
          onChange={addUserData}
          sx={{ display: 'block', marginBottom: '10px' }}
          required
        />
        <TextField
          type="password"
          name="password"
          label="Password"
          variant="outlined"
          value={userData.password}
          onChange={addUserData}
          sx={{ display: 'block', marginBottom: '10px' }}
          required
        />
        <ButtonGroup variant="contained">
          <Button type="submit" onClick={() => setIsRegForm(false)}>
            Auth
          </Button>
          <Button type="submit" onClick={() => setIsRegForm(true)}>
            Registration
          </Button>
        </ButtonGroup>
      </form>
    </>
  );
};
