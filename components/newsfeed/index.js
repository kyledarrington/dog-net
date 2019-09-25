import React from 'react'
import Newsfeed from './newsfeed.js'
import './style.scss'

class NewsfeedContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            posts : [
                {
                    text: 'Test Post 1!',
                    imgSrc: 'http://lorempixel.com/400/300/animals',
                    user : {
                        fullName: 'Kyle Arrington',
                        imgSrc: 'http://lorempixel.com/45/45/people'
                    },
                },
                {
                    text: 'Test Post 2!',
                    imgSrc: 'http://lorempixel.com/400/300/animals',
                    user : {
                        fullName: 'Elanor Shellstrop',
                        imgSrc: 'http://lorempixel.com/45/45/people'
                    },
                }
            ]
        }
    }
    render(){
        return <Newsfeed posts={this.state.posts} user={this.state.user} />
    }
}
    
export default NewsfeedContainer
