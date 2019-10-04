import React from 'react'
import Axios from 'axios'

class Login extends React.Component{
    render(){
        return (
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
    }
}

export default Login