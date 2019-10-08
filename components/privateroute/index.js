import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function PrivateRoute({ component: Component, loggedIn, ...rest}) {
    console.log(rest);
    return(
        <Route
            {...rest}
            render={ props => 
                loggedIn ? (<Component {...props} />) : (<Redirect to="/login" />)
             }
        />
    )
}