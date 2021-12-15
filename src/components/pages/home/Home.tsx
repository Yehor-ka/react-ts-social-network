import { Box } from '@mui/material'
import React, { useState } from 'react'
import { IPost } from '../../../types'
import { AddPost } from './AddPost'
import { Posts } from './Posts'

interface Props {
    
}

export const Home = (props: Props) => {
    return (
        <Box>
            <AddPost />
            <Posts/>
        </Box>
    )
}
