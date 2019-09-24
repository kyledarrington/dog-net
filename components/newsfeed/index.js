import React from 'react'
import Newsfeed from './newsfeed.js'

class NewsfeedContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            posts : [
                {
                    text: 'Test Post 1!',
                    user : {
                        fullName: 'Kyle Arrington',
                        imgSrc: 'https://picsum.photos/50'
                    },
                },
                {
                    text: 'Test Post 2!',
                    user : {
                        fullName: 'Elanor Shellstrop',
                        imgSrc: 'https://picsum.photos/50'
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