import {object, array, string} from 'prop-types'
import React from 'react'

class Newsfeed extends React.Component{
    constructor(props){
        super(props)
    }
    posts(){
        const postArray = this.props.posts
        const user = this.props.user
        let elements = []
        for (var i in postArray){
            let post = postArray[i]
            let e = (
                <div className="post-container">
                    <div className="post-icon-container"><img src={post.user.imgSrc} alt={post.user.fullName} className="post-icon"/></div>
                    <div className="post-content-container">
                        <div className="post-user-info">
                            <p>{post.user.fullName}</p>
                        </div>
                        <div className="post-text">
                            <p>{post.text}</p>
                        </div>
                    </div>
                </div>
            )
            elements.push(e)
        }
        return elements
    }
    render(){
        return <div>{this.posts()}</div>
    }
}

export default Newsfeed