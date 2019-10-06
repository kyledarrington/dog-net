import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

import reducer from '../store/rootreducer'
import LoadingScreen from '../components/loadingscreen'
import App from '../components/app'

const persistConfig = {
 key: 'root',
 storage,
};

const pReducer = persistReducer(persistConfig, reducer)
const store = createStore(
    pReducer,
    applyMiddleware(logger)
)
const persistor = persistStore(store)

ReactDOM.render((
    <Provider store={store}> 
        <PersistGate loading={<LoadingScreen />} persistor={persistor}>
            <Router>
                <App />
            </Router>
        </PersistGate>
    </Provider>), 
    document.getElementById("root"))
