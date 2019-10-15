import React, {Component} from 'react'
import axios from 'axios'
import SignupForm from './signupform'

class SignupFormContainer extends Component{
    constructor(props){
        super(props)
        this.handleButtonClick = this.handleButtonClick.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            firstName : '',
            lastName : '',
            email : '',
            password : '',
            confirm : '',
            errors : {firstName : '', lastName : '', email : '', password : '', confirm: ''}
        }
    }
    async handleInputChange(event){
        let name = event.target.name,
            value = event.target.value
        
        this.setState({
            [name] : value
        })
    }
    async handleButtonClick(event){
        this.validateForm()
        if (this.hasErrors()) return
        const result = await axios.post('http://localhost:8081/signup', this.state)
        const userid = result.data
    }
    validateForm(){
        let newErrors = Object.assign({}, this.state.errors)
        //Passwords Match
        newErrors.confirm = this.state.password == this.state.confirm ? '' : 'Passwords do not match.'
        //Email is valid
        newErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.state.email) ? '' : 'Invalid Email Address.'
        this.setState({
            errors: newErrors
        })
    }
    hasErrors(){
        let result = false
        for (var i in this.state.errors){
            let val = this.state.errors[i]
            if (val != '') result = true
        }
        return result
    }
    render(){
        return <SignupForm 
           onButtonClick={this.handleButtonClick} 
           onInputChange={this.handleInputChange}
           errors={this.state.errors} />
    }
}
    
export default SignupFormContainer