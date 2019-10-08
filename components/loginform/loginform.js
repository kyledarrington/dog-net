import React from 'react'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'

class LoginForm extends React.Component{
    render(){
        const form = (
         <div>
                <form id="login-form">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" placeholder="email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" placeholder="password" />
                    </div>
                </form>
                <div>
                    <button onClick={ this.props.onClick }>Login</button>
                </div>
            </div>
        )
        return !this.props.loggedIn ? form : <Redirect to="/" loggedIn={true} />
    }
}

export default LoginForm