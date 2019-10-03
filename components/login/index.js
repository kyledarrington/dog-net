import { connect } from 'react-redux'
import { setToken } from '../../store/actions'
import Login from './login.js'
import React from 'react'

function LoginContainer(props) {
    return (
        <Login user={props.user} />
    )
}

const mapStateToProps = (state) =>{
    return {
        user : state.user
    }
}
const mapDispatchToProps = { setToken }

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)


