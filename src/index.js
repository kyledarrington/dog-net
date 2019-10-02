import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import App from '../components/app'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../store/rootreducer'

const store = createStore(reducer)
console.log(store.getState())



ReactDOM.render((
    <Provider store={store}> 
        <Router>
            <App />
        </Router>
    </Provider>), 
    document.getElementById("root"))
