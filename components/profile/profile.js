import React, { Component } from 'react'

function Profile(props){
    const user = props.user;
    console.log(user)
    return (
        <div>
            <h1> {user.first_name}'s Profile </h1>
        </div>
    )
}

export default Profile;