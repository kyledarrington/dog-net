import React, { Component } from 'react'
import Profile from './profile'
import axios from 'axios'

class ProfileContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            user: {}
        }
    }
    async componentDidMount(){
        const { match: { params } } = this.props
        let profileQuery = await axios.get('http://localhost:8081/profile/' + params.userid)
        this.setState({
            user : profileQuery.data[0]
        })
    }
    render(){
        return <Profile user={this.state.user} />
    }
}

export default ProfileContainer