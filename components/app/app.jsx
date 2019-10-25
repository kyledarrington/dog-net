import React from 'react'
import Home from '../home'
import Login from '../login'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from '../privateroute'
import './style.scss'
import ProfileContainer from '../profile'

class App extends React.Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/profile/:userid" component={ProfileContainer} />
                    <PrivateRoute exact path="/" component={Home} loggedIn={this.props.loggedIn} />
                </Switch>
            </div>
        )
    }
}

export default App
