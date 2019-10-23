import React, { Component } from 'react'
import Navbar from '../navbar'
import Profile from './profile'
import ProfileFeed from './feed'
import axios from 'axios'

class ProfileContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            user: {},
            posts: [],
        }
    }
    async componentDidMount(){
        const { params } = this.props.match
        console.log(params.userid)
        let profileQuery = await axios.get('http://localhost:8081/profile/' + params.userid, 
            {headers : {'Authorization' : 'Bearer ' + this.props.user.token}})
        this.setState(profileQuery.data)
    }
    render(){
        const feed = <ProfileFeed posts={this.state.posts} />
        return (
            <div>
                <Navbar />
                <Profile user={ this.state.user } feed={ feed } isFollowing={ this.state.isFollowing } 
                    onFollowClick={this.handleFollowClick} onUnfollowClick={this.handleUnfollowClick} />
            </div>
        )
    }
}

export default ProfileContainer