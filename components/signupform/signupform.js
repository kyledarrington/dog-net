import React, {Component} from 'react'
import './style.scss'

class SignupForm extends Component{
    render(){
        return(
             <div>
                 <form action="" id="signup-form">
                    <div className="signup-input">
                        <input type="text" placeholder="First Name" />
                    </div>
                    <div className="signup-input">
                        <input type="text" placeholder="Last Name" />
                    </div>
                    <div className="signup-input">
                        <input type="text" placeholder="Email Address" />
                    </div>
                    <div className="signup-input">
                        <input type="text" placeholder="Password" />
                    </div>
                    <div className="signup-input">
                        <input type="text" placeholder="Confirm Password" />
                    </div>
                </form>
                <div id="signup-submit">
                        <button onClick={ this.props.onClick }>Sign Up!</button>
                </div>
            </div>
        )
    }
}

export default SignupForm