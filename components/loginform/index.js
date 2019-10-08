import { connect } from 'react-redux'
import { setToken } from '../../store/actions'
import axios from 'axios'
import LoginForm from './loginform.js'
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
        let token = (await axios.post('http://localhost:8081/login', payload)).data
        if(token){
            this.props.setToken(token)
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
        setToken : token => {
            dispatch(setToken(token))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer)


