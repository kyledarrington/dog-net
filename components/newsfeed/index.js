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
                    imgSrc: 'http://picsum.photos/400/300',
                    user : {
                        fullName: 'Kyle Arrington',
                        imgSrc: 'http://picsum.photos/45/'
                    },
                },
                {
                    text: 'Test Post 2!',
                    imgSrc: 'http://picsum.photos/400/300',
                    user : {
                        fullName: 'Elanor Shellstrop',
                        imgSrc: 'http://picsum.photos/45/'
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
