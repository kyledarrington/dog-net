import React from 'react'
import NavBar from '../navbar'
import NewsfeedContainer from '../newsfeed'

class App extends React.Component{
    render(){
        return (
            <div>
                <NavBar />
                <NewsfeedContainer />
            </div>
        )
    }
}

export default App
