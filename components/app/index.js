import React from 'react'
import NavBar from '../navbar'
import LoginContainer from '../login/index.js'
import NewsfeedContainer from '../newsfeed'
import './style.scss'

class App extends React.Component{
    render(){
        return (
            <div>
                <NavBar />
                <LoginContainer />
                <NewsfeedContainer />
            </div>
        )
    }
}

export default App
