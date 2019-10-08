import React from 'react'
import Home from '../home'
import NavBar from '../navbar'
import Login from '../login'
import NewsfeedContainer from '../newsfeed'
import { Switch, Route, Redirect } from 'react-router-dom'
import PrivateRoute from '../privateroute'
import './style.scss'

class App extends React.Component{
    render(){
        return(
            <div>
                <Route path="/login" component={Login} />
                <PrivateRoute path="" component={Home} loggedIn={this.props.loggedIn} />
            </div>
        )
    }
}

export default App
