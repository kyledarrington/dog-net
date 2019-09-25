import {object, array, string} from 'prop-types'
import React from 'react'
import SubmissionForm from '../submissionform/submissionform'

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
                    <div className="post-user-container">
                        <div className="post-user-icon"><img src={post.user.imgSrc} alt={post.user.fullName} className="post-icon"/></div>
                        <div className="post-user-info"><span>{post.user.fullName}</span></div>
                    </div>
                    <div className="post-content-container">
                        <div className="post-text">
                            <span>{post.text}</span>
                        </div>
                        <div className="post-image">
                            <img src={post.imgSrc} alt={post.text} />
                        </div>
                    </div>

                </div>
            )
            elements.push(e)
        }
        return elements
    }
    render(){
        return (
            <div id="newsfeed">
                <SubmissionForm />
                {this.posts()}
            </div>
        )
    }
}

export default Newsfeed
