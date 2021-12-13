import { Box } from '@mui/material'
import React, { useState } from 'react'
import { IPost } from '../../../types'
import { AddPost } from './AddPost'
import { Posts } from './Posts'

interface Props {
    
}

export const Home = (props: Props) => {
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
    return (
        <Box>
            <AddPost setPosts={setPosts} />
            <Posts posts={posts}/>
        </Box>
    )
}
