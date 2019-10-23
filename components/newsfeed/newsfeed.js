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
            elements.push(<Post data={post} key={i} />)
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
