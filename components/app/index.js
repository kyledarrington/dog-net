import React from 'react'
import NavBar from '../navbar'
import NewsfeedContainer from '../newsfeed'

class App extends React.Component{
    render(){
        return (
            <div>
                <NavBar />
                <h1>
                    Hello World
                </h1>
                <NewsfeedContainer />
            </div>
        )
    }
}

export default App
