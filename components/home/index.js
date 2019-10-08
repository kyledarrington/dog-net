import React from 'react'
import NewsfeedContainer from '../newsfeed'
import Navbar from '../navbar'

export default function Home(){
    return(
        <div>
            <Navbar />
            <NewsfeedContainer />
        </div>
    )
}
