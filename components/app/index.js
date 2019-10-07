import React, {Component} from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import App from './app'

class RootApp extends Component{
    constructor(props){
        super(props)
        this.state = {
            loggedIn: false
        }
    }
    async componentWillMount(){
        let result = {}
        if (this.props.user.token){
            let validate = await axios.get('http://localhost:8081/validate', 
                                        {headers : {'Authorization' : 'Bearer ' + this.props.user.token}})
            result = validate.data;
            console.log(result);
        }
        if (result.isValid != null) {
            this.setState({
                loggedIn: result.isValid
            });      
        }
        console.log(this.state)
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