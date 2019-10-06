import {object, array, string} from 'prop-types'
import React from 'react'
import SubmissionForm from '../submissionform/submissionform'

class Newsfeed extends React.Component{
    constructor(props){
        super(props)
    }
    posts(){
        const postArray = this.props.posts
        let elements = []
        for (var i in postArray){
            let post = postArray[i]
            let fullName = post.userFirstName + ' ' + post.userLastName
            let e = (
                <div className="post-container" key={i}>
                    <div className="post-user-icon"><img src={post.userImgSrc} alt={fullName} className="post-icon"/></div>
                    <div className="post-user-info"><div><span>{fullName}<br />POST DATE</span></div></div>
                    <div className="post-text">
                        <span>{post.content}</span>
                    </div>
                    <div className="post-image">
                        <img src={post.imgSrc} alt={post.content} />
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
