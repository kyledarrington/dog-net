import React, {Component} from 'react'
import LoginForm from '../loginform'
import SignupFormContainer from '../signupform'
import './style.scss'

class Login extends Component{
    render(){
        return(
            <div id="container">
                <div id="login-bar">
                    <div id="login-container">
                        <LoginForm />
                    </div>
                </div>
                <div id="signup">
                    <div id="signup-form-container">
                        <SignupFormContainer />
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
