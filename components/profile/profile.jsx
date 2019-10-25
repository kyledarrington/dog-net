import React, { Component } from 'react'
import './style.scss'
import PropTypes from 'prop-types'

class Profile extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const user = this.props.user
        const followButton = !this.props.isFollowing 
            ? <button onClick={this.props.onFollowClick}>Follow</button> 
            : <button onClick={this.props.onUnfollowClick}>Unfollow</button>
        return (
            <div id="profile-container">
                <div id="info-container">
                    <div id="portrait">
                        <img src={ user.portraitSrc } alt="" />
                    </div>
                    <div id="basic-info">
                        <h3>{user.first_name + ' ' + user.last_name}</h3>
                        <p>{user.email}</p>
                        <div>{ followButton }</div>
                    </div>
                </div>
                <div id="profile-feed">
                    { this.props.feed }
                </div>
            </div>
        )
    }
}

Profile.propTypes = {
    onFollowClick : PropTypes.func,
    onUnfollowClick : PropTypes.func,
    user : PropTypes.shape({
        first_name: PropTypes.string,
        last_name : PropTypes.string,
        email : PropTypes.string,
        portraitSrc: PropTypes.string,
    }),
    isFollowing: PropTypes.bool,
    feed : PropTypes.object
}

export default Profile;