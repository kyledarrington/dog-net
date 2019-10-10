import React, {Component} from 'react'
import './style.scss'

class SignupForm extends Component{
    render(){
        return(
             <form action="" id="signup-form">
                <div className="signup-input">
                    <input type="text" placeholder="" />
                </div>
                <div className="signup-input">
                    <input type="text" placeholder="" />
                </div>
                <div className="signup-input">
                    <input type="text" placeholder="" />
                </div>
                <div className="signup-input">
                    <input type="text" placeholder="" />
                </div>
                <div className="signup-input">
                    <input type="text" placeholder="" />
                </div>
            </form>
        )
    }
}

export default SignupForm