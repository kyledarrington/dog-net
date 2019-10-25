import React from 'react'
import { Redirect } from 'react-router-dom'
import './style.scss'
import PropTypes from 'prop-types'

class LoginForm extends React.Component{
    render(){
        const form = (
            <div id="login-form-container">
                <form id="login-form">
                    <div className="login-input">
                        <input type="text" name="email" placeholder="email" />
                    </div>
                    <div className="login-input">
                        <input type="password" name="password" placeholder="password" />
                    </div>
                </form>
                <div id="login-submit">
                    <button onClick={ this.props.onClick }>Login</button>
                </div>
            </div>
        )
        return !this.props.loggedIn ? form : <Redirect to="/" loggedIn={true} />
    }
}

LoginForm.propTypes = {
    onClick : PropTypes.func,
    loggedIn: PropTypes.bool
}

export default LoginForm