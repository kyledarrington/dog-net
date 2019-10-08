import React, {Component} from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import App from './app'

class RootApp extends Component{
    constructor(props){
        super(props)
        this.state = {
            loggedIn: false,
            loaded: false
        }
    }
    async componentWillMount(){
        let result = {}
        let isLoggedIn = false
        if (this.props.user.token){
            let validate = await axios.get('http://localhost:8081/validate', 
                                        {headers : {'Authorization' : 'Bearer ' + this.props.user.token}})
            result = validate.data;
        }
        if (result.isValid != null) isLoggedIn = result.isValid
        this.setState({
            loggedIn: isLoggedIn,
            loaded: true
        })
    }
    render(){
        return (
            <App loggedIn={this.state.loggedIn} />
        )
    }
}
        
const mapStateToProps = state =>{
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(RootApp)