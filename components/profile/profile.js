import React, { Component } from 'react'
import PropTypes from 'prop-types'

function Profile(props){
    const user = props.user;
    console.log(user)
    return (
        <div>
            <h1> {user.first_name}'s Profile </h1>
        </div>
    )
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