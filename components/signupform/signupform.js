import React, {Component} from 'react'
import './style.scss'

class SignupForm extends Component{
    render(){
        const errors = this.props.errors; 
        return(
             <div>
                 <form action="" id="signup-form">
                    <div className="signup-input">
                        <input type="text" name="firstName" placeholder="First Name" onChange={this.props.onInputChange} />
                        {errors.firstName.length > 0 && <p className="signup-input-error">{errors.firstName}</p>}
                    </div>
                    <div className="signup-input">
                        <input type="text" name="lastName" placeholder="Last Name" onChange={this.props.onInputChange} />
                        {errors.lastName.length > 0 && <p className="signup-input-error">{errors.lastName}</p>}                        
                    </div>
                    <div className="signup-input">
                        <input type="email" name="email" placeholder="Email Address" onChange={this.props.onInputChange} />
                        {errors.email.length > 0 && <p className="signup-input-error">{errors.email}</p>}                        
                    </div>
                    <div className="signup-input">
                        <input type="password" name="password" placeholder="Password" onChange={this.props.onInputChange} />
                        {errors.password.length > 0 && <p className="signup-input-error">{errors.password}</p>}                        
                    </div>
                    <div className="signup-input">
                        <input type="password" name="confirm" placeholder="Confirm Password" onChange={this.props.onInputChange} />
                        {errors.confirm.length > 0 && <p className="signup-input-error">{errors.confirm}</p>}
                    </div>
                </form>
                <div id="signup-submit">
                        <button onClick={ this.props.onButtonClick }>Sign Up!</button>
                </div>
            </div>
        )
    }
}

export default SignupForm