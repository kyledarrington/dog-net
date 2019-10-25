import React from 'react'
import Post from '../post/post'
import {arrayOf, object} from 'prop-types'

function ProfileFeed(props){
    let posts = []
    console.log(props.posts)
    for (var i = 0; i < props.posts.length; i++){
        let p = props.posts[i]
        posts.push((
            <Post data={p} key={i} />
        ))
    }
    return(
        <div>{posts}</div>
    )
}

ProfileFeed.propTypes = {
    posts : arrayOf(object)
}

export default ProfileFeed