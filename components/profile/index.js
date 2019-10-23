import React, { Component } from 'react'
import Navbar from '../navbar'
import Profile from './profile'
import ProfileFeed from './feed'
import axios from 'axios'
import {connect} from 'react-redux'
import {object} from 'prop-types'

class ProfileContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            user: {},
            posts: [],
            isFollowing: false
        }
        this.handleFollowClick = this.handleFollowClick.bind(this)
        this.handleUnfollowClick = this.handleUnfollowClick.bind(this)
    }
    async handleFollowClick(){
        let result = await axios.get('http://localhost:8081/users/follow/' + this.state.user.id, {headers : {'Authorization' : 'Bearer ' + this.props.user.token}})
        if(result.statusText === 'OK') this.setState({isFollowing : true});
    }
    async handleUnfollowClick(){
        let result = await axios.delete('http://localhost:8081/users/follow/' + this.state.user.id, {headers : {'Authorization' : 'Bearer ' + this.props.user.token}})
        console.log(result.statusText)
        if(result.statusText === 'OK') this.setState({isFollowing : false});
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

ProfileContainer.propTypes = {
    match: object,
    user : object
}

const mapStateToProps = (state) => {
    return {user: state.user}
}

export default connect(mapStateToProps)(ProfileContainer);