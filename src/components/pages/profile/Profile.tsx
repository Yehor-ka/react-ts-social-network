import { Avatar, Box } from '@mui/material'
import React from 'react'
import { useAuth } from '../../providers/useAuth'

interface Props {
    
}

export const Profile = (props: Props) => {
    const {user} = useAuth()

    
    return (
        <Box
          sx={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: 2,
            margin: '25px 0',
          }}>
              <Avatar src={user?.avatar} />
            <h1>{user?.name}</h1>
        </Box>
    )
}
