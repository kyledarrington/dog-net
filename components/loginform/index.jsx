import { connect } from 'react-redux'
import { setToken } from '../../store/actions'
import axios from 'axios'
import LoginForm from './loginform'
import React from 'react'

class LoginFormContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {loggedIn : false}
        this.handleClick = this.handleClick.bind(this)
    }
    async handleClick(event){
        const data = new FormData(document.getElementById('login-form'))
        const payload = {
            email : data.get('email'),
            password: data.get('password')
        }
        let user = (await axios.post('http://localhost:8081/login', payload)).data
        if(user){
            this.props.setToken(user)
            this.setState({loggedIn: true})
        }
    }
    render(){
        return (
            <LoginForm 
             user={ this.props.user }
             loggedIn={ this.state.loggedIn }
             onClick = { this.handleClick }
             />
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        user : state.user
    }
}
const mapDispatchToProps = dispatch => {
    return { 
        setToken : user => {
            dispatch(setToken(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer)


