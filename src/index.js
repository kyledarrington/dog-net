import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import App from '../components/app'

console.log(document.getElementById("root"))
ReactDOM.render((
    <Router>
        <App />
    </Router>), document.getElementById("root"))
