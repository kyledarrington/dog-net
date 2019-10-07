import React, {Component} from 'react'
import LoginForm from '../loginform'

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
                        <form action="" id="signup-form">
                            <label htmlFor=""></label>
                            <input type="text" className="signup-input"/>
                            <label htmlFor=""></label>
                            <input type="text" className="signup-input"/>
                            <label htmlFor=""></label>
                            <input type="text" className="signup-input"/>
                            <label htmlFor=""></label>
                            <input type="text" className="signup-input"/>
                            <label htmlFor=""></label>
                            <input type="text" className="signup-input"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login