import { connect } from 'react-redux'
import { setToken } from '../../store/actions'
import axios from 'axios'
import Login from './login.js'
import React from 'react'

class LoginContainer extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
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
            console.log('dispatching...')
            this.props.setToken(token)
        }
        console.log(this.props.user)
    }
    render(){
        return (
            <Login 
             user={ this.props.user } 
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)


