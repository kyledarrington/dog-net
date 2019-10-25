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
                    <div id="welcome-header">
                        <h1>Show Off Your Dogs On DogNet!</h1>
                    </div>
                    <div id="welcome-text">
                        <p>
                            Dognet is a safe space to share all of the dog photos you want. Better yet, your feed will always be filled with photos of adorable, precious pups! What could be better?
                        </p>
                    </div>
                    <div id="dog-img-container">
                        <img src="/images/frontpage-dog.jpg" />
                    </div>
                    <div id="signup-header">
                        <h2>Start Sharing Your Dogs!</h2>
                        <h3>Tell us about yourself:</h3>
                    </div>
                    <div id="signup-form-container">
                        <SignupFormContainer />
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
